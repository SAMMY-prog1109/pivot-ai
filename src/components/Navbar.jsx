function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <div>
  <h1 className="text-2xl font-extrabold text-indigo-600">
    Pivot
  </h1>

  <p className="text-xs text-slate-500">
    Find your next chapter.
  </p>
</div>

        <div className="hidden md:flex gap-8 text-slate-700 font-medium">
          <a href="#features" className="hover:text-indigo-600 transition">
            Features
          </a>
          <a href="#how" className="hover:text-indigo-600 transition">
            How it Works
          </a>
          <a href="#about" className="hover:text-indigo-600 transition">
            About
          </a>
        </div>

        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-full transition">
          Tell Your Story
        </button>
      </div>
    </nav>
  );
}

export default Navbar;