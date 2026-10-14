function SkillCategory({ title, skills }) {
  return (
    <article className="rounded-2xl border border-white/10 bg-slate-950/70 p-6">
      <h3 className="text-xl font-semibold text-white">
        {title}
      </h3>

      <div className="mt-4 flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-blue-400/20 bg-blue-400/10 px-3 py-2 text-sm text-blue-200"
          >
            {skill}
          </span>
        ))}
      </div>
    </article>
  )
}

export default SkillCategory