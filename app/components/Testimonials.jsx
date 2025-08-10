const quotes = [
  { name: "Amina R.", role: "Community Lead", text: "We cut response times by 63% in the first week. Volunteers love it." },
  { name: "Luis M.", role: "Nonprofit Director", text: "The dashboard made reporting to funders painless. Huge time saver." },
  { name: "Dana S.", role: "City Coordinator", text: "From onboarding to launch in a day. Incredible support." },
];

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-3xl border border-black/10 dark:border-white/15 p-8 md:p-12 bg-gradient-to-br from-white to-white/60 dark:from-white/5 dark:to-white/0">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-center">Trusted by organizers everywhere</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {quotes.map((q) => (
              <figure key={q.name} className="rounded-2xl border border-black/5 dark:border-white/10 p-6 bg-white/70 dark:bg-white/5">
                <blockquote className="text-sm text-black/80 dark:text-white/80">“{q.text}”</blockquote>
                <figcaption className="mt-3 text-xs opacity-75">{q.name} • {q.role}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}