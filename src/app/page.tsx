import { AuthStatus } from "@/components/auth/auth-status";

export default function Home() {
      return (
        <main className="flex-1 flex flex-col items-center justify-center px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-3xl w-full text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100 text-rose-700 text-xs font-semibold
            tracking-wide uppercase">
              <span className="w-2 h-2 rounded-full bg-rose-600 animate-pulse" />
              V2 — Authentication In Progress
            </div>
    
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
                ReUse <span className="text-rose-600">Japan</span>
              </h1>
              <p className="text-lg text-slate-600 max-w-xl mx-auto">
                A portfolio-grade C2C second-hand marketplace connecting residents across Japan.
              </p>
            </div>

            <AuthStatus />
    
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 text-left">
              <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
                <h3 className="font-semibold text-slate-900 text-sm">Currency & Market</h3>
                <p className="text-xs text-slate-500 mt-1">Japanese Yen (¥ JPY) base currency with bilingual accessibility.</p>
              </div>
              <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
                <h3 className="font-semibold text-slate-900 text-sm">Hybrid Fulfillment</h3>
                <p className="text-xs text-slate-500 mt-1">Simulated courier parcel tracking + local station pickup
                coordination.</p>
              </div>
              <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
                <h3 className="font-semibold text-slate-900 text-sm">Unified Account</h3>
                <p className="text-xs text-slate-500 mt-1">Single account model — every authenticated user can buy and sell.</p>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-200 text-xs text-slate-400">
              Next Phase: <strong className="text-slate-600 font-medium">V2 — Authentication & User Accounts (Better
              Auth)</strong>
            </div>
          </div>
        </main>
      );
    }
