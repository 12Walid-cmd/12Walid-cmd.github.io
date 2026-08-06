function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-slate-950/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#home" className="text-xl font-bold text-white">
          Walid<span className="text-blue-500">.</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <a href="#about" className="text-sm text-slate-300 hover:text-white">
            About
          </a>

          <a href="#skills" className="text-sm text-slate-300 hover:text-white">
            Skills
          </a>

          <a href="#experience" className="text-sm text-slate-300 hover:text-white">
            Experience
          </a>

          <a href="#projects" className="text-sm text-slate-300 hover:text-white">
            Projects
          </a>

          <a href="#contact" className="text-sm text-slate-300 hover:text-white">
            Contact
          </a>
        </div>

        <a
          href="/resume.pdf"
          className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-500"
        >
          Resume
        </a>
      </nav>
    </header>
  )
}

export default Navbar