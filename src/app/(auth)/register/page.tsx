import type { Metadata } from "next";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

import { auth } from "@/lib/auth";
import { RegisterForm } from "@/components/auth/register-form";

export const metadata: Metadata = {
   title: "Create Account | ReUse Japan",
   description:
      "Create your ReUse Japan account to buy and sell pre-owned goods across Japan.",
};

export default async function RegisterPage() {
   const session = await auth.api.getSession({
      headers: await headers(),
   });

   if (session) {
      redirect("/");
   }

   return <RegisterForm />;
}
