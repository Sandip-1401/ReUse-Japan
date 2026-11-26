import Link from "next/link";
import type { ReactNode } from "react";

export default function AuthLayout({
   children,
}: Readonly<{
   children: ReactNode;
}>) {
   return (
      <main className="flex min-h-screen flex-col items-center justify-center px-4 py-10">
         <div className="w-full max-w-md space-y-6">
            {children}
         </div>
      </main>
   );
}
