import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@/db";
import * as schema from "@/db/schema";

export const auth = betterAuth({
   database: drizzleAdapter(db, {
      provider: "pg",
      schema: {
         ...schema,
      },
   }),
   emailAndPassword: {
      enabled: true,
   },
   user: {
      additionalFields: {
         role: {
            type: "string",
            defaultValue: "user",
         },
         phone: {
            type: "string",
            required: false,
         },
         postalCode: {
            type: "string",
            required: false,
         },
         prefecture: {
            type: "string",
            required: false,
         },
         city: {
            type: "string",
            required: false,
         },
         addressLine: {
            type: "string",
            required: false,
         },
      },
   },
});
