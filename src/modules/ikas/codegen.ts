import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
   schema: "https://api.myikas.com/api/v1/admin/graphql",
   documents: "./src/modules/ikas/**/*.ts",
   generates: {
      "src/modules/ikas/graphql/": {
         preset: "client-preset",
         config: {
            documentMode: "string"
         }
      },
      "src/modules/ikas/graphql/schema.graphql": {
         plugins: ["schema-ast"],
         config: {
            includeDirectives: true
         }
      }
   }
};
export default config;
