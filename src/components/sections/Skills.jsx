import skillCategories from "../../data/skills"
import SkillCategory from "../ui/SkillCategory"

function Skills() {
  return (
    <section
      id="skills"
      className="bg-slate-950 px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-blue-400">
          Technical Skills
        </p>

        <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
          Technologies I work with
        </h2>

        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-400">
          My toolkit continues to evolve as I explore software engineering,
          automation, cloud technologies, AI, and secure application
          development.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <SkillCategory
              key={category.title}
              title={category.title}
              skills={category.skills}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills


''