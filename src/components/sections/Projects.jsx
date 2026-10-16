import projects from "../../data/projects";
import ProjectCard from "../ui/ProjectCard";

function Projects() {
  return (
    <section
      id="projects"
      className="bg-slate-950 px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-blue-400">
          Selected work
        </p>

        <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
          Things I’ve built
        </h2>

        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-400">
          A collection of my work across web development, mobile
          applications, automation, and secure software.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;