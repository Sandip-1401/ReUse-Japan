"use client";

import {
   Card,
   CardContent,
   CardDescription,
   CardHeader,
   CardTitle,
} from "@/components/ui/card";

import { User } from "lucide-react";
import { Mail } from "lucide-react";
import { Lock, Eye, EyeOff, CheckCircle2 } from "lucide-react";

import {
   Field,
   FieldError,
   FieldLabel,
} from "@/components/ui/field";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";

import { useForm } from "react-hook-form";
import { RegisterInput, registerSchema } from "@/lib/validations/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import Link from "next/link";

export function RegisterForm() {

   const route = useRouter();

   const [showPassword, setShowPassword] = useState(false);
   const [serverError, setServerError] = useState<string | null>(null);

   const form = useForm<RegisterInput>({
      resolver: zodResolver(registerSchema),
      defaultValues: {
         name: "",
         email: "",
         password: ""
      }
   })

   // eslint-disable-next-line react-hooks/incompatible-library
   const passwordValue = form.watch("password");
   const hasMinPasswordLength = passwordValue.length >= 8;

   const onSubmit = async (values: RegisterInput) => {
      setServerError(null);
      const { error } = await authClient.signUp.email({
         name: values.name,
         email: values.email,
         password: values.password
      })

      if (error) {
         setServerError(error.message || "Registration failed. Please try again.");
         return;
      }

      route.push("/");
      route.refresh();
   }

   return (
      <Card>
         <CardHeader>
            <CardTitle>Create your account</CardTitle>
            <CardDescription>
               Start buying and selling across Japan with a single account.
            </CardDescription>
         </CardHeader>

         <CardContent className="flex flex-col">
            <form
               id="register-form"
               className="space-y-4"
               onSubmit={form.handleSubmit(onSubmit)}
            >
               {serverError && (
                  <Alert variant="destructive">
                     <AlertCircle />
                     <AlertDescription>
                        {serverError}
                     </AlertDescription>
                  </Alert>
               )}
               <Field className="mb-4">
                  <FieldLabel htmlFor="register-name">
                     Full Name
                  </FieldLabel>
                  <div className="relative">
                     <User className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                     <Input
                        id="register-name"
                        type="text"
                        autoComplete="name"
                        placeholder="Taro Tanaka"
                        className="h-10 pl-9"
                        {...form.register("name")}
                     />
                  </div>
                  {form.formState.errors.name && (
                     <FieldError errors={[form.formState.errors.name]} />
                  )}
               </Field>
               <Field className="mb-4">
                  <FieldLabel htmlFor="register-email">
                     Email Address
                  </FieldLabel>

                  <div className="relative">
                     <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

                     <Input
                        id="register-email"
                        type="email"
                        autoComplete="email"
                        placeholder="taro@example.com"
                        className="h-10 pl-9"
                        {...form.register("email")}
                     />
                  </div>
                  {form.formState.errors.email && (
                     <FieldError errors={[form.formState.errors.email]} />
                  )}
               </Field>
               <Field className="mb-4">
                  <FieldLabel htmlFor="register-password">
                     Password
                  </FieldLabel>

                  <div className="relative">
                     <Lock className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

                     <Input
                        id="register-password"
                        type={showPassword ? "text" : "password"}
                        autoComplete="new-password"
                        placeholder="Create a strong password"
                        className="h-10 pl-9 pr-10"
                        {...form.register("password")}
                     />
                     <button
                        type="button"
                        onClick={() => setShowPassword((pre) => !pre)}
                        aria-label={showPassword ? "Hide password" : "Show password"}
                        className="absolute right-2.5 top-1/2 -translate-y-1/2 rounded p-1 text-muted-foreground transition-colors hover:text-foreground"
                     >
                        {showPassword ? (
                           <EyeOff className="h-4 w-4" />
                        ) : (
                           <Eye className="h-4 w-4" />
                        )}
                     </button>
                  </div>
                  <div className="flex items-center gap-1.5 pt-0.5 text-xs">
                     <CheckCircle2
                        className={`h-3.5 w-3.5 transition-colors ${hasMinPasswordLength
                           ? "text-emerald-600 rounded-3xl"
                           : "text-muted-foreground/50"
                           }`} />
                     <span
                        className={
                           hasMinPasswordLength
                              ? "text-emerald-600 rounded-3xl font-medium"
                              : "text-muted-foreground"
                        }
                     >
                        At least 8 characters
                     </span>
                  </div>
                  {form.formState.errors.password && (
                     <FieldError errors={[form.formState.errors.password]} />
                  )}
               </Field>
            </form>

            <Button
               type="submit"
               form="register-form"
               disabled={form.formState.isSubmitting}
               className="font-semibold bg-blue-500 text-white rounded-md py-2 px-3"
            >
               {form.formState.isSubmitting && (
                  <Loader2 className="animate-spin" />
               )}

               {form.formState.isSubmitting
                  ? "Creating account..."
                  : "Create Account"}
            </Button>
         </CardContent>
         <p className="text-center text-xs text-muted-foreground">
            Already have an account?{" "}
            <Link
               href="/login"
               className="font-semibold text-primary underline-offset-2 hover:underline"
            >
               Sign in
            </Link>
         </p>
      </Card>
   );
}