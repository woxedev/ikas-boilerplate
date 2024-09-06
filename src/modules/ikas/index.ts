/*
This is boilerplate code for creating an app on Ikas that I use in my projects.
It can be modified at any time to suit the project's needs or to reflect changes in the Ikas API.
You can extend this class to add more functionality, but I do not recommend using multiple instances of this class in a single project.
Also, if you plan to use this class in a project, be aware that it does not include error handling or permission checks, so configure your app on Ikas accordingly.
*/
import axios from "axios";
import Fastify, { type FastifyInstance, type FastifyReply, type FastifyRequest } from "fastify";
import { graphql } from "./graphql";
import { OrderStatusEnum, QueryListOrderArgs, TypedDocumentString } from "./graphql/graphql";
import { IkasWebhookScope } from "types/ikas";

import queries from "./queries"; // I store large queries in a separate file to keep the code clean and easy to read.

export default class Ikas {
   private token: string = "";
   private events: {
      eventId: string;
      event: IkasWebhookScope;
      callback: Function;
   }[] = [];
   private onReady: Function | null = null;
   private fastify: FastifyInstance;
   private webhooks:
      | {
           [key in IkasWebhookScope]?: string;
        } = {};
   constructor(private config: IkasModuleConfig) {
      this.fastify = Fastify();
      this.fastify.post("/webhook", (req, res) => this.webhookCallback(req, res));
      this.fastify.listen({ port: this.config.port, host: "0.0.0.0" });
      this.getToken();
   }

   private async getToken() {
      let res = await axios
         .post(`https://${this.config.store_name}.myikas.com/api/admin/oauth/token`, {
            grant_type: "client_credentials",
            client_id: this.config.client_id,
            client_secret: this.config.client_secret
         })
         .catch((e) => {
            return e.response;
         });
      if (res.status === 200) {
         this.token = res.data.access_token;
         let webhooks = await this.getWebhooks();
         if (webhooks?.find((w) => w.endpoint != this.config.callback_url)) {
            webhooks.forEach(async (w) => {
               await this.unsubscribeFromWebhook(w.scope as IkasWebhookScope);
            });
         }
         this.webhooks =
            webhooks
               ?.filter((w) => w.endpoint === this.config.callback_url)
               .reduce((acc, curr) => {
                  acc[curr.scope] = curr.id;
                  return acc;
               }, {} as { [key in IkasWebhookScope]: string }) || {};
         this.onReady && this.onReady();
      } else {
         throw new Error(`Failed to get token from Ikas with status code: ${res.status}. Please check your credentials.`, {
            cause: res.data
         });
      }
   }
   ready(callback: () => void) {
      this.onReady = callback;
   }
   emit(event: IkasWebhookScope, data?: any) {
      this.events.forEach((e) => {
         if (e.event === event) {
            e.callback(data);
         }
      });
   }
   async on<T extends IkasWebhookScope>(event: IkasWebhookScope, callback: (data: IkasModuleEventData<T>) => void) {
      let eventId = Math.random().toString(36).substring(7);

      if (!this.webhooks[event]) {
         //this is an event that needs to be subscribed to Ikas.
         let id = await this.subscribeToWebhook(event);
         if (!id) throw new Error("Failed to subscribe to webhook");
         this.webhooks[event] = id;
      }
      this.events.push({ eventId, event, callback });
      return eventId;
   }

   off(eventId: string) {
      this.events = this.events.filter((e) => e.eventId !== eventId) || [];
   }

   private async webhookCallback(request: FastifyRequest, reply: FastifyReply) {
      const body = request.body as IkasWebhookPayloadRaw;
      let data = JSON.parse(body.data);
      let event = body.scope as IkasWebhookScope;
      this.emit(event, data);
      //Do not remove this line. It is required for Ikas to confirm that the webhook was received successfully. According to the documentation, if the response status code is not 200 after three attempts, the webhook will be disabled.
      return reply.status(200).send({ message: "Webhook received" });
   }

   private async subscribeToWebhook(scope: IkasWebhookScope) {
      let query = graphql(`
         mutation saveWebhook($scopes: [String!]!, $endpoint: String!) {
            saveWebhook(input: { scopes: $scopes, endpoint: $endpoint }) {
               id
            }
         }
      `);
      let res = await this.execute(query, { scopes: [scope], endpoint: this.config.callback_url });
      if (res) {
         return res.saveWebhook?.[0].id;
      }
      return null;
   }

   private async unsubscribeFromWebhook(scope: IkasWebhookScope) {
      let query = graphql(`
         mutation deleteWebhook($scopes: [String!]!) {
            deleteWebhook(scopes: $scopes)
         }
      `);
      let res = await this.execute(query, { scopes: [scope] });
      if (res) {
         return res.deleteWebhook;
      }
      return null;
   }

   private async getWebhooks() {
      let query = graphql(`
         query listWebhooks {
            listWebhook {
               id
               scope
               endpoint
            }
         }
      `);
      let res = await this.execute(query);
      if (res) {
         return res.listWebhook as {
            __typename?: "Webhook";
            id: string;
            scope: IkasWebhookScope;
            endpoint: string;
         }[];
      }
   }
   async listOrder(input?: { pagination?: QueryListOrderArgs["pagination"]; status?: QueryListOrderArgs["status"] }) {
      if (!input) input = {};
      if (!input.pagination) input.pagination = { page: 1, limit: 10 };
      if (!input.status) input.status = { in: [...(Object.values(OrderStatusEnum) as OrderStatusEnum[])] };
      let res = await this.execute(queries.listOrder, { pagination: input.pagination, status: input.status });
      if (res) {
         return res.listOrder;
      }
   }

   async execute<TResult, TVariables>(
      query: TypedDocumentString<TResult, TVariables>,
      ...[variables]: TVariables extends Record<string, never> ? [] : [TVariables]
   ) {
      const response = await fetch("https://api.myikas.com/api/v1/admin/graphql", {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
            Accept: "application/graphql-response+json",
            Authorization: `Bearer ${this.token}`
         },
         body: JSON.stringify({
            query: query,
            variables
         })
      }).catch((e) => {
         throw new Error("Failed to fetch ikas api.", { cause: e });
      });

      if (!response.ok) {
         throw new Error("Network response was not ok", {
            cause: await response.text()
         });
      }
      let json = (await response.json()) as {
         data: TResult;
      };
      return json.data;
   }
}
