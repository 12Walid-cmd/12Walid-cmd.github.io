const focusAreas = [
  "Software Engineering",
  "Artificial Intelligence",
  "Cloud Computing",
  "Cybersecurity",
  "Automation",
  "Data Systems",
]

function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-screen items-center bg-slate-950 px-6 pb-16 pt-28 text-white"
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[1.2fr_0.8fr]">
        {/* Left side */}
        <div>
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.28em] text-blue-400">
            Software Developer • AI • Cloud • Cybersecurity
          </p>

          <h1 className="max-w-4xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Building intelligent, secure, and scalable software for the future.
          </h1>

          <p className="mt-6 text-xl font-semibold text-slate-200 sm:text-2xl">
            Hi, I’m Walid Anael Ekouma Lema.
          </p>

          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-400 sm:text-lg">
            I’m a Software Developer passionate about Artificial Intelligence,
            Cybersecurity, Cloud Computing, Automation, and large-scale data
            systems. I enjoy building modern software while exploring how
            intelligent technologies can create secure, scalable, and
            human-centered digital experiences.
          </p>

          <p className="mt-4 max-w-3xl text-base leading-8 text-slate-400 sm:text-lg">
            Every project is an opportunity to solve meaningful problems,
            expand my knowledge, and grow across the constantly evolving world
            of technology.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-blue-500"
            >
              Explore My Work
            </a>

            <a
              href="/resume.pdf"
              className="rounded-lg border border-slate-600 px-6 py-3 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:border-blue-400 hover:bg-slate-900"
            >
              Download Resume
            </a>

            <a
              href="#contact"
              className="rounded-lg px-6 py-3 font-semibold text-slate-300 transition duration-300 hover:text-white"
            >
              Let&apos;s Connect
            </a>
          </div>

          <div className="mt-10 flex max-w-3xl flex-wrap gap-3">
            {focusAreas.map((area) => (
              <span
                key={area}
                className="rounded-full border border-blue-400/20 bg-blue-400/10 px-4 py-2 text-sm font-medium text-blue-200"
              >
                {area}
              </span>
            ))}
          </div>
        </div>

        {/* Right side */}
        <div className="flex flex-col items-center gap-6 lg:items-end">
          <div className="flex h-80 w-full max-w-sm items-center justify-center overflow-hidden rounded-3xl border border-white/10 bg-slate-900 shadow-2xl shadow-blue-950/30">
            <p className="px-8 text-center text-slate-400">
              Your professional photo will go here.
            </p>
          </div>

          <div className="w-full max-w-sm rounded-2xl border border-white/10 bg-slate-900/80 p-6 shadow-xl">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-lg">
                AI
              </div>

              <div>
                <h2 className="font-semibold text-white">
                  AI Portfolio Assistant
                </h2>

                <p className="text-sm text-slate-400">
                  Coming soon
                </p>
              </div>
            </div>

            <p className="mt-5 leading-7 text-slate-300">
              Ask about my projects, technical skills, internships, experience,
              or résumé.
            </p>

            <button
              type="button"
              disabled
              className="mt-5 w-full cursor-not-allowed rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-sm font-semibold text-slate-500"
            >
              Ask the assistant
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero