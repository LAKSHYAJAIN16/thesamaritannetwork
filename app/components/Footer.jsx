export default function Footer() {
  return (
    <footer className="py-10 border-t border-black/10 dark:border-white/10 mt-16">
      <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm opacity-70">© {new Date().getFullYear()} The Samaritan Network</p>
        <div className="flex items-center gap-5 text-sm opacity-80">
          <a href="#" className="hover:opacity-100">Privacy</a>
          <a href="#" className="hover:opacity-100">Terms</a>
          <a href="#" className="hover:opacity-100">Contact</a>
        </div>
      </div>
    </footer>
  );
}