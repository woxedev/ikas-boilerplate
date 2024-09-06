import Ikas from "./modules/ikas";
import { IkasWebhookScope } from "types/ikas";

if (!process.env.IKAS_ID || !process.env.IKAS_SECRET) {
   console.error("Please provide the IKAS_ID and IKAS_SECRET env variables.");
   process.exit(1);
}

const ikas = new Ikas({
   client_id: process.env.IKAS_ID,
   client_secret: process.env.IKAS_SECRET,
   store_name: "your-store-name",
   port: 3000,
   callback_url: "https://example.com/webhook" // This should be pointing to `0.0.0.0:port/webhook`.
});

ikas.ready(() => {
   console.log("Ikas is ready!");

   ikas.on<IkasWebhookScope.OrderUpdated>(IkasWebhookScope.OrderUpdated, (data) => {
      // Do something with the data
   });

   ikas.on<IkasWebhookScope.ProductUpdated>(IkasWebhookScope.ProductUpdated, (data) => {
      // Do something with the data
   });
});
