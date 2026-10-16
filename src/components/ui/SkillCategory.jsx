import Arrow from "./Arrow";
export default function SkillCategory({ title, skills, index }) {
  return (
    <article className="skill-category">
      <div className="category-title">
        <span className="mono">{String(index + 1).padStart(2, "0")}</span>
        <h3>{title}</h3>
        <span aria-hidden="true">
          <Arrow />
        </span>
      </div>
      <ul>
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </article>
  );
}
