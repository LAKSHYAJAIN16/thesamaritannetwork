import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 md:pt-36">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-48 right-[-10%] h-[500px] w-[500px] rounded-full bg-gradient-to-br from-sky-400/30 to-indigo-500/30 blur-3xl" />
        <div className="absolute -bottom-32 left-[-10%] h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-emerald-400/25 to-cyan-400/25 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="text-center md:text-left">
            <p className="inline-flex items-center gap-2 rounded-full border border-black/10 dark:border-white/20 px-3 py-1 text-xs font-medium mb-5">
              New
              <span className="rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 px-2 py-0.5">v1.0</span>
              Launching public beta
            </p>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.1]">
              Connect help with need, instantly.
            </h1>
            <p className="mt-5 text-base md:text-lg text-black/70 dark:text-white/70">
              The Samaritan Network is a platform for communities to coordinate assistance,
              match volunteers, and deliver resources where they matter most.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <a href="#get-started" className="inline-flex h-11 items-center rounded-full px-6 bg-black text-white dark:bg-white dark:text-black hover:opacity-90 transition">Get started free</a>
              <a href="#demo" className="inline-flex h-11 items-center rounded-full px-6 border border-black/10 dark:border-white/20 hover:bg-black/5 dark:hover:bg-white/10 transition">Watch 2‑min demo</a>
            </div>
            <div className="mt-6 flex items-center justify-center md:justify-start gap-6 opacity-75 text-xs">
              <span>No credit card</span>
              <span>•</span>
              <span>Open-source friendly</span>
              <span>•</span>
              <span>24/7 support</span>
            </div>
          </div>
          <div className="relative">
            <div className="relative rounded-2xl border border-black/10 dark:border-white/15 bg-white/60 dark:bg-white/5 shadow-2xl shadow-black/10 overflow-hidden">
              <div className="aspect-[16/10] w-full bg-gradient-to-br from-indigo-50 to-emerald-50 dark:from-indigo-900/20 dark:to-emerald-900/10 flex items-center justify-center">
                <div className="grid grid-cols-3 gap-3 p-6 w-full max-w-lg">
                  <div className="h-24 rounded-xl bg-gradient-to-br from-indigo-400 to-sky-400" />
                  <div className="h-24 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-400" />
                  <div className="h-24 rounded-xl bg-gradient-to-br from-rose-400 to-orange-400" />
                  <div className="col-span-2 h-24 rounded-xl bg-black/90 dark:bg-white/90" />
                  <div className="h-24 rounded-xl bg-gradient-to-br from-violet-400 to-fuchsia-400" />
                  <div className="h-24 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500" />
                  <div className="col-span-2 h-24 rounded-xl bg-gradient-to-br from-amber-400 to-pink-400" />
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 rounded-xl border border-black/10 dark:border-white/15 bg-white/80 dark:bg-black/40 backdrop-blur px-3 py-2 text-xs">
              <span className="font-semibold">Real-time matching</span>
              <span className="opacity-70"> • 98% success</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}