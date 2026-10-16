import projects from "../../data/projects";
import ProjectCard from "../ui/ProjectCard";

export default function Projects() {
  return (
    <div>
      <div className="panel-heading">
        <div>
          <p className="eyebrow">Selected work</p>
          <h3>Things I’ve built</h3>
        </div>
        <p>
          A collection of my work across web development, mobile applications,
          automation, and secure software.
        </p>
      </div>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </div>
  );
}
