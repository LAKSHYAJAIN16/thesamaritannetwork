export default function CTA() {
  return (
    <section id="get-started" className="py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="rounded-3xl p-8 md:p-12 border border-black/10 dark:border-white/15 bg-black text-white dark:bg-white dark:text-black text-center">
          <h3 className="text-2xl md:text-3xl font-bold">Ready to mobilize your community?</h3>
          <p className="mt-3 opacity-80">Start free today. Upgrade only when you grow.</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <a className="inline-flex h-11 items-center rounded-full px-6 bg-white text-black dark:bg-black dark:text-white border border-transparent hover:opacity-90 transition" href="#signup">Create your workspace</a>
            <a className="inline-flex h-11 items-center rounded-full px-6 bg-transparent border border-white/40 dark:border-black/20 hover:bg-white/10 dark:hover:bg-black/5 transition" href="#contact">Talk to sales</a>
          </div>
        </div>
      </div>
    </section>
  );
}