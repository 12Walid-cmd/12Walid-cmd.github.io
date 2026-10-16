function ProjectCard({ project }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 transition duration-300 hover:-translate-y-1 hover:border-blue-400/50">

      {/* Project screenshot */}
      {project.images ? (
        <div className="flex h-56 items-center justify-center bg-slate-800 p-4">
          <img
            src={project.images}
            alt={`${project.title} screenshot`}
            loading="lazy"
            className="h-full w-full object-contain"
          />
        </div>
      ) : (
        <div className="flex h-56 items-center justify-center bg-slate-800">
          <span className="text-sm text-slate-400">
            Preview coming soon
          </span>
        </div>
      )}

      <div className="flex flex-1 flex-col p-6">
        {/* Status and title */}
        <span className="self-start rounded-full border border-blue-400/20 bg-blue-400/10 px-3 py-1 text-xs font-medium text-blue-300">
          {project.status}
        </span>

        <h3 className="mt-4 text-xl font-bold">
          {project.title}
        </h3>

        {/* Description */}
        <p className="mt-3 text-sm leading-7 text-slate-400">
          {project.description}
        </p>

        {/* Technology tags */}
        <ul className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <li
              key={technology}
              className="rounded-md bg-slate-800 px-3 py-1 text-xs text-slate-300"
            >
              {technology}
            </li>
          ))}
        </ul>

        {/* GitHub link appears only when one exists */}
        {project.github && (
          <div className="mt-auto pt-6">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-medium text-blue-400 transition hover:text-blue-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400"
            >
              View on GitHub
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        )}
      </div>
    </article>
  );
}

export default ProjectCard;