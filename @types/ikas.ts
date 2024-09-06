//You need to run `bun run codegen` to generate the types
import { Customer, Order, Product } from "@/modules/ikas/graphql/graphql";

const enum IkasWebhookScope {
   OrderUpdated = "store/order/updated",
   OrderCreated = "store/order/created",
   ProductUpdated = "store/product/updated",
   ProductCreated = "store/product/created",
   CustomerUpdated = "store/customer/updated",
   CustomerCreated = "store/customer/created",
   CustomerFavoriteProductsUpdated = "store/customerFavoriteProducts/updated",
   CustomerFavoriteProductsCreated = "store/customerFavoriteProducts/created",
   StockUpdated = "store/stock/updated",
   StockCreated = "store/stock/created"
}
declare global {
   type IkasWebhookPayloadRaw = {
      merchantId: string;
      scope: IkasWebhookScope;
      createdAt: string;
      id: string;
      signature: string;
      authorizedAppId: string;
      data: string;
   };

   /**
    * @description Configuration object for the Ikas module.
    * @class Ikas
    *
    * @param {IkasModuleConfig} config The configuration object.
    * @param {string} config.client_id The client ID.
    * @param {string} config.client_secret The client secret.
    * @param {string} config.store_name Store name in the **store-name.myikas.com** domain.
    * @param {number} config.port The port number.
    * @param {string} config.callback_url Url that Ikas will send webhooks to. It should be pointing to `0.0.0.0:port/webhook`.
    */
   interface IkasModuleConfig {
      client_id: string;
      client_secret: string;
      store_name: string;
      port: number;
      callback_url: string;
   }

   type WebhookListenerGeneric = {
      [key in IkasWebhookScope]: key;
   };
   type WebhookCategory = "order" | "product" | "customer" | "customerFavoriteProducts" | "stock";
   type WebhookType = "updated" | "created";
   type WebhookEvent = {
      [key in IkasWebhookScope]: key extends `store/${infer Category}/${infer Type}`
         ? Category extends "order"
            ? WebhookPayload[Category]
            : Category extends "product"
            ? WebhookPayload[Category]
            : Category extends "customer"
            ? WebhookPayload[Category]
            : Category extends "customerFavoriteProducts"
            ? WebhookPayload[Category]
            : Category extends "stock"
            ? WebhookPayload[Category]
            : never
         : never;
   };

   type WebhookPayload = {
      order: Order;
      product: Product;
      customer: Customer;

      //I don't know what these are so I'm just going to leave them as any. Any help would be appreciated.
      customerFavoriteProducts: TODO_ANY;
      stock: TODO_ANY;
   };
   type IkasModuleEventData<T extends IkasWebhookScope> = WebhookEvent[T];
   type TODO_ANY = any;
}

export { IkasWebhookScope };
