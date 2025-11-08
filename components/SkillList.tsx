import { CharacterSkill } from "@/data/characters";

interface SkillListProps {
  skills: CharacterSkill[];
}

export function SkillList({ skills }: SkillListProps) {
  return (
    <section className="skill-list" aria-label="مهارات الشخصية">
      {skills.map((skill) => (
        <article key={skill.name} className="skill-list__item">
          <header>
            <h3>{skill.name}</h3>
          </header>
          <p className="skill-list__description">{skill.description}</p>
          <p className="skill-list__tip">
            <span>نصيحة:</span> {skill.tip}
          </p>
        </article>
      ))}
    </section>
  );
}
