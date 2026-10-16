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
    <section id="about" className="about-section">
      <div className="shell about-content">
        <div className="about-heading">
          <p>MY JOURNEY</p>

          <h2>Every experience has shaped the engineer I am becoming.</h2>
        </div>

        <div className="about-grid">
          {/* Left */}

          <div className="about-prose">
            <p>
              My journey into technology began through mathematics. I completed
              two years studying Mathematics at the
              <span> University of Yaoundé I </span>
              in Cameroon, where I developed analytical thinking, logical
              reasoning, and a passion for solving complex problems.
            </p>

            <p>
              Seeking new opportunities, I moved to Canada to continue my
              education at
              <span> Holland College</span>, where I graduated from the Computer
              Information Systems program. There, I gained hands-on experience
              in software engineering, databases, networking, systems analysis,
              mobile development, and information security.
            </p>

            <p>
              During my internships at
              <span> CGI </span>
              and
              <span> COACHINGJD</span>, I worked on enterprise software, AI
              automation, APIs, cloud-based workflows, deployment pipelines, and
              modern development practices using technologies such as React,
              Node.js, Java, Kotlin, PostgreSQL, Docker, GitHub Actions, and
              n8n.
            </p>

            <p>
              What excites me most is how different areas of technology connect
              together. I&apos;m passionate about Software Engineering,
              Artificial Intelligence, Cybersecurity, Cloud Computing,
              Automation, and Large-Scale Data Systems. Rather than limiting
              myself to one specialization, I enjoy understanding how these
              disciplines work together to build secure, scalable, intelligent,
              and human-centered solutions.
            </p>

            <p>
              Above all, I believe technology never stops evolving— and neither
              should we. Every project, every challenge, and every new
              technology is another opportunity to learn, improve, and
              contribute to building the future.
            </p>
          </div>

          {/* Right */}

          <div className="highlights">
            {highlights.map((item) => (
              <div key={item.title} className="highlight">
                <h3>{item.title}</h3>

                <p>{item.description}</p>
              </div>
            ))}

            <div className="philosophy">
              <p>Personal Philosophy</p>

              <h3>"Technology evolves every day—and so do I."</h3>

              <p>
                My mission is to continuously grow across the IT landscape while
                building software that is intelligent, secure, scalable, and
                meaningful for the people who use it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
