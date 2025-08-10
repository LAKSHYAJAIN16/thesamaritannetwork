export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/40 dark:supports-[backdrop-filter]:bg-black/30 border-b border-black/5 dark:border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <a href="/" className="font-semibold text-lg tracking-tight">
          <span className="bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 bg-clip-text text-transparent">Samaritan</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#features" className="hover:opacity-80">Features</a>
          <a href="#demo" className="hover:opacity-80">Demo</a>
        </nav>
        <div className="flex items-center gap-3">
          <a href="#demo" className="hidden sm:inline-flex h-9 items-center rounded-full px-4 border border-black/10 dark:border-white/20 hover:bg-black/5 dark:hover:bg-white/10 transition">Live demo</a>
          <a href="#get-started" className="inline-flex h-9 items-center rounded-full px-4 bg-black text-white dark:bg-white dark:text-black hover:opacity-90 transition">Get Started</a>
        </div>
      </div>
    </header>
  );
}