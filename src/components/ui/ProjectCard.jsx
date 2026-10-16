import Arrow from "./Arrow";
import { useState } from "react";
export default function ProjectCard({ project, index }) {
  const [failed, setFailed] = useState(false);
  return (
    <article className="project-card">
      <div
        className={`project-media ${project.images?.includes("mobSave") ? "portrait" : ""}`}
      >
        {project.images && !failed ? (
          <img
            src={project.images}
            alt={`${project.title} application screenshot`}
            loading="lazy"
            onError={() => setFailed(true)}
          />
        ) : (
          <div className="project-placeholder">
            <span aria-hidden="true">
              {String(index + 1).padStart(2, "0")} /
            </span>
            <span>{project.title}</span>
            <small>{project.status}</small>
          </div>
        )}
      </div>
      <div className="project-meta">
        <span className="mono">
          PROJECT / {String(index + 1).padStart(2, "0")}
        </span>
        <span className="project-status">{project.status}</span>
      </div>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <ul className="technologies">
        {project.technologies.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
      {project.github ? (
        <a
          className="text-link"
          href={project.github}
          target="_blank"
          rel="noreferrer"
        >
          View repository{" "}
          <span>
            <Arrow />
          </span>
        </a>
      ) : (
        <span className="unavailable">Repository not yet available</span>
      )}
    </article>
  );
}
