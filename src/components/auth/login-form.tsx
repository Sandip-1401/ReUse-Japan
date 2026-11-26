"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AlertCircle, Eye, EyeOff, Loader2, Lock, Mail } from "lucide-react";

import { authClient } from "@/lib/auth-client";
import { loginSchema, type LoginInput } from "@/lib/validations/auth";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
   Card,
   CardContent,
   CardDescription,
   CardHeader,
   CardTitle,
} from "@/components/ui/card";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export function LoginForm() {
   const router = useRouter();
   const [showPassword, setShowPassword] = useState(false);
   const [serverError, setServerError] = useState<string | null>(null);

   const form = useForm<LoginInput>({
      resolver: zodResolver(loginSchema),
      defaultValues: {
         email: "",
         password: "",
      },
   });

   const onSubmit = async (values: LoginInput) => {
      setServerError(null);

      try {
         const { error } = await authClient.signIn.email({
            email: values.email,
            password: values.password,
         });

         if (error) {
            setServerError(error.message || "Invalid email or password.");
            return;
         }

         router.push("/");
         router.refresh();
      } catch {
         setServerError("Network error. Please try again.");
      }
   };

   return (
      <Card>
         <CardHeader>
            <CardTitle>Sign in to your account</CardTitle>
            <CardDescription>
               Welcome back to ReUse Japan.
            </CardDescription>
         </CardHeader>

         <CardContent className="flex flex-col gap-4">
            <form
               id="login-form"
               className="space-y-4"
               onSubmit={form.handleSubmit(onSubmit)}
            >
               {serverError && (
                  <Alert variant="destructive">
                     <AlertCircle />
                     <AlertDescription>{serverError}</AlertDescription>
                  </Alert>
               )}

               <Field data-invalid={!!form.formState.errors.email}>
                  <FieldLabel htmlFor="login-email">Email Address</FieldLabel>
                  <div className="relative">
                     <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                     <Input
                        id="login-email"
                        type="email"
                        autoComplete="email"
                        placeholder="taro@example.com"
                        aria-invalid={!!form.formState.errors.email}
                        className="h-10 pl-9"
                        {...form.register("email")}
                     />
                  </div>
                  {form.formState.errors.email && (
                     <FieldError errors={[form.formState.errors.email]} />
                  )}
               </Field>

               <Field data-invalid={!!form.formState.errors.password}>
                  <FieldLabel htmlFor="login-password">Password</FieldLabel>
                  <div className="relative">
                     <Lock className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                     <Input
                        id="login-password"
                        type={showPassword ? "text" : "password"}
                        autoComplete="current-password"
                        placeholder="Enter your password"
                        aria-invalid={!!form.formState.errors.password}
                        className="h-10 pl-9 pr-10"
                        {...form.register("password")}
                     />
                     <button
                        type="button"
                        onClick={() => setShowPassword((prev) => !prev)}
                        aria-label={
                           showPassword ? "Hide password" : "Show password"
                        }
                        className="absolute right-2.5 top-1/2 -translate-y-1/2 rounded p-1 text-muted-foreground transition-colors hover:text-foreground"
                     >
                        {showPassword ? (
                           <EyeOff className="h-4 w-4" />
                        ) : (
                           <Eye className="h-4 w-4" />
                        )}
                     </button>
                  </div>
                  {form.formState.errors.password && (
                     <FieldError errors={[form.formState.errors.password]} />
                  )}
               </Field>
            </form>

            <Button
               type="submit"
               form="login-form"
               size="lg"
               disabled={form.formState.isSubmitting}
               className="h-10 w-full font-semibold"
            >
               {form.formState.isSubmitting && (
                  <Loader2 className="animate-spin" />
               )}
               {form.formState.isSubmitting ? "Signing in..." : "Sign In"}
            </Button>

            <p className="text-center text-xs text-muted-foreground">
               Don&apos;t have an account?{" "}
               <Link
                  href="/register"
                  className="font-semibold text-primary underline-offset-4 hover:underline"
               >
                  Create account
               </Link>
            </p>
         </CardContent>
      </Card>
   );
}
