import skillCategories from "../../data/skills";
import SkillCategory from "../ui/SkillCategory";
export default function Skills() {
  return (
    <div className="skills-content">
      <div className="panel-heading">
        <h3>Technologies I work with</h3>
        <p>
          My toolkit continues to evolve as I explore software engineering,
          automation, cloud technologies, AI, and secure application
          development.
        </p>
      </div>
      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <SkillCategory key={category.title} {...category} index={index} />
        ))}
      </div>
    </div>
  );
}
