const features = [
  { title: "Smart Matching", desc: "AI-assisted request triage and volunteer matching in seconds.", color: "from-indigo-500 to-sky-500" },
  { title: "Community Hubs", desc: "Organize teams by neighborhood, org, or event.", color: "from-emerald-500 to-teal-500" },
  { title: "Messaging", desc: "Built-in chat and SMS notifications keep everyone aligned.", color: "from-rose-500 to-orange-500" },
  { title: "Analytics", desc: "Measure impact with dashboards and reports.", color: "from-violet-500 to-fuchsia-500" },
  { title: "Integrations", desc: "Connect Slack, Airtable, Google Sheets, more.", color: "from-cyan-500 to-blue-500" },
  { title: "Security", desc: "SSO, audit logs, and role-based access.", color: "from-amber-500 to-pink-500" },
];

export default function Features() {
  return (
    <section id="features" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Everything you need to mobilize help</h2>
          <p className="mt-3 text-black/70 dark:text-white/70">Built for speed, safety, and scale—without the complexity.</p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border border-black/10 dark:border-white/15 p-6 bg-white/60 dark:bg-white/5">
              <div className={`h-10 w-10 rounded-xl bg-gradient-to-br ${f.color} mb-4`} />
              <h3 className="font-semibold text-lg">{f.title}</h3>
              <p className="mt-2 text-sm text-black/70 dark:text-white/70">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}