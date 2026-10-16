import Arrow from "../ui/Arrow";
import ResourceLink from "../ui/ResourceLink";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <nav className="shell nav" aria-label="Main navigation">
        <a className="wordmark" href="#home" onClick={() => setOpen(false)}>
          Walid<span> / </span>
          <small>SOFTWARE DEVELOPER</small>
        </a>
        <button
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="nav-links"
          onClick={() => setOpen(!open)}
        >
          {open ? "Close −" : "Menu +"}
        </button>
        <div id="nav-links" className={`nav-links ${open ? "is-open" : ""}`}>
          {["About", "Skills", "Projects"].map((label, i) => (
            <a
              key={label}
              href={`#${label.toLowerCase()}`}
              onClick={() => setOpen(false)}
            >
              <small>0{i + 1}</small> {label}
            </a>
          ))}
          <ResourceLink href="#experience" onClick={() => setOpen(false)}>
            Experience
          </ResourceLink>
          <ResourceLink href="#contact" onClick={() => setOpen(false)}>
            Contact
          </ResourceLink>
          <ResourceLink className="resume-link" href="/resume.pdf">
            Resume <Arrow />
          </ResourceLink>
        </div>
      </nav>
    </header>
  );
}
