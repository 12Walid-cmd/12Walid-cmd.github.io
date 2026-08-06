const highlights = [
  {
    title: "Education",
    description:
      "My academic journey began with two years of Mathematics at the University of Yaoundé I in Cameroon before I continued my education in Canada, graduating from Holland College with a Diploma in Computer Information Systems.",
  },
  {
    title: "Professional Experience",
    description:
      "Former Software Developer Intern at CGI and AI & Automation Intern at COACHINGJD, contributing to full-stack applications, AI automation workflows, APIs, deployment pipelines, and modern software solutions.",
  },
  {
    title: "Languages",
    description:
      "Fluent in both English and French, allowing me to collaborate effectively within diverse and multicultural teams.",
  },
  {
    title: "Beyond Code",
    description:
      "Competitive ACAA college soccer athlete whose experiences have strengthened teamwork, discipline, leadership, resilience, and the ability to perform under pressure.",
  },
];

function About() {
  return (
    <section
      id="about"
      className="bg-slate-900 px-6 py-28 text-white"
    >
      <div className="mx-auto max-w-7xl">

        <div className="mb-16">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            MY JOURNEY
          </p>

          <h2 className="mt-4 max-w-4xl text-4xl font-bold leading-tight lg:text-5xl">
            Every experience has shaped the engineer I am becoming.
          </h2>
        </div>

        <div className="grid gap-14 lg:grid-cols-[1.15fr_0.85fr]">

          {/* Left */}

          <div>

            <p className="text-lg leading-9 text-slate-300">
              My journey into technology began through mathematics.
              I completed two years studying Mathematics at the
              <span className="font-semibold text-white">
                {" "}University of Yaoundé I{" "}
              </span>
              in Cameroon, where I developed analytical thinking,
              logical reasoning, and a passion for solving complex problems.
            </p>

            <p className="mt-7 text-lg leading-9 text-slate-300">
              Seeking new opportunities, I moved to Canada to continue my education
              at
              <span className="font-semibold text-white">
                {" "}Holland College
              </span>,
              where I graduated from the Computer Information Systems program.
              There, I gained hands-on experience in software engineering,
              databases, networking, systems analysis, mobile development,
              and information security.
            </p>

            <p className="mt-7 text-lg leading-9 text-slate-300">
              During my internships at
              <span className="font-semibold text-white">
                {" "}CGI{" "}
              </span>
              and
              <span className="font-semibold text-white">
                {" "}COACHINGJD
              </span>,
              I worked on enterprise software, AI automation,
              APIs, cloud-based workflows, deployment pipelines,
              and modern development practices using technologies such as
              React, Node.js, Java, Kotlin, PostgreSQL, Docker,
              GitHub Actions, and n8n.
            </p>

            <p className="mt-7 text-lg leading-9 text-slate-300">
              What excites me most is how different areas of technology
              connect together. I'm passionate about Software Engineering,
              Artificial Intelligence, Cybersecurity, Cloud Computing,
              Automation, and Large-Scale Data Systems. Rather than limiting
              myself to one specialization, I enjoy understanding how these
              disciplines work together to build secure, scalable,
              intelligent, and human-centered solutions.
            </p>

            <p className="mt-7 text-lg leading-9 text-slate-300">
              Above all, I believe technology never stops evolving—
              and neither should we. Every project, every challenge,
              and every new technology is another opportunity to learn,
              improve, and contribute to building the future.
            </p>

          </div>

          {/* Right */}

          <div className="space-y-6">

            {highlights.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-slate-950 p-7 transition duration-300 hover:border-blue-500/30 hover:-translate-y-1"
              >
                <h3 className="text-xl font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-3 leading-8 text-slate-400">
                  {item.description}
                </p>
              </div>
            ))}

            <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-700 p-8">

              <p className="text-sm uppercase tracking-[0.25em] text-blue-100">
                Personal Philosophy
              </p>

              <h3 className="mt-4 text-2xl font-bold">
                "Technology evolves every day—and so do I."
              </h3>

              <p className="mt-5 leading-8 text-blue-100">
                My mission is to continuously grow across the IT landscape
                while building software that is intelligent, secure,
                scalable, and meaningful for the people who use it.
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;