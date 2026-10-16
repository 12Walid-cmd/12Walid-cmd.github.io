import Arrow from "../ui/Arrow";
import ResourceLink from "../ui/ResourceLink";
const focusAreas = [
  "Software Engineering",
  "Artificial Intelligence",
  "Cloud Computing",
  "Cybersecurity",
  "Automation",
  "Data Systems",
];

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="shell">
        <div className="hero-topline">
          <span className="eyebrow">
            Software Developer • AI • Cloud • Cybersecurity
          </span>
          <span className="mono">PORTFOLIO / 01</span>
        </div>
        <div className="hero-grid">
          <div className="hero-copy">
            <h1>
              Building <em>intelligent,</em> secure, and scalable software for
              the future.
            </h1>
            <p className="intro">Hi, I’m Walid Anael Ekouma Lema.</p>
            <p>
              I’m a Software Developer passionate about Artificial Intelligence,
              Cybersecurity, Cloud Computing, Automation, and large-scale data
              systems. I enjoy building modern software while exploring how
              intelligent technologies can create secure, scalable, and
              human-centered digital experiences.
            </p>
            <p>
              Every project is an opportunity to solve meaningful problems,
              expand my knowledge, and grow across the constantly evolving world
              of technology.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#projects">
                Explore My Work{" "}
                <span>
                  <Arrow />
                </span>
              </a>
              <ResourceLink className="text-link" href="/resume.pdf">
                Download Resume <Arrow direction="down" />
              </ResourceLink>
              <ResourceLink className="text-link" href="#contact">
                Let&apos;s Connect <Arrow />
              </ResourceLink>
            </div>
          </div>
          <div className="hero-visual">
            <div className="system-diagram" aria-hidden="true">
              <div className="diagram-top mono">
                SYSTEM ARCHITECTURE <span>v.01</span>
              </div>
              <div className="orbit orbit-one" />
              <div className="orbit orbit-two" />
              <div className="core">
                <span>W</span>
                <small>IDEA / IMPACT</small>
              </div>
              <span className="node node-one">01 / INTELLIGENCE</span>
              <span className="node node-two">02 / SECURITY</span>
              <span className="node node-three">03 / SCALE</span>
              <div className="diagram-bottom mono">
                <span className="status-dot" /> CONNECTING DISCIPLINES
              </div>
            </div>
            <aside className="assistant">
              <div className="assistant-label">
                <span className="assistant-icon">AI</span>
                <span>
                  AI Portfolio Assistant<small>Coming soon</small>
                </span>
              </div>
              <p>
                Ask about my projects, technical skills, internships,
                experience, or résumé.
              </p>
              <button disabled>
                Ask the assistant{" "}
                <span>
                  <Arrow />
                </span>
              </button>
            </aside>
          </div>
        </div>
        <div className="focus-strip">
          <span className="mono">AREAS OF EXPLORATION</span>
          <div>
            {focusAreas.map((area) => (
              <span key={area}>{area}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
