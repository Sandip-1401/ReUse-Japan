"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Loader2, LogOut } from "lucide-react";

import { authClient } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function AuthStatus() {
   const router = useRouter();
   const { data: session, isPending } = authClient.useSession();
   const [isSigningOut, setIsSigningOut] = useState(false);

   async function handleSignOut() {
      setIsSigningOut(true);
      try {
         await authClient.signOut();
         router.refresh();
      } finally {
         setIsSigningOut(false);
      }
   }

   if (isPending) {
      return (
         <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
            <Loader2 className="h-4 w-4 animate-spin" />
            Checking session...
         </div>
      );
   }

   if (session?.user) {
      return (
         <Card className="mx-auto max-w-sm">
            <CardContent className="flex flex-col items-center gap-3 pt-4">
               <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-semibold text-emerald-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
                  Signed in
               </span>
               <div className="text-center">
                  <p className="font-semibold text-foreground">
                     {session.user.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                     {session.user.email}
                  </p>
               </div>
               <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={handleSignOut}
                  disabled={isSigningOut}
               >
                  {isSigningOut ? (
                     <Loader2 className="animate-spin" />
                  ) : (
                     <LogOut />
                  )}
                  {isSigningOut ? "Signing out..." : "Sign Out"}
               </Button>
            </CardContent>
         </Card>
      );
   }

   return (
      <div className="flex flex-wrap items-center justify-center gap-3">
         <Link
            href="/register"
            className="inline-flex h-9 items-center justify-center rounded-lg bg-primary px-4 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
         >
            Create Account
         </Link>
         <Link
            href="/login"
            className="inline-flex h-9 items-center justify-center rounded-lg border border-border bg-card px-4 text-sm font-semibold text-foreground transition hover:bg-accent"
         >
            Sign In
         </Link>
      </div>
   );
}
