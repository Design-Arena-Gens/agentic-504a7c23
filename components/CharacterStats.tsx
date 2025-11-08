import { CharacterStat } from "@/data/characters";

interface CharacterStatsProps {
  stats: CharacterStat[];
}

export function CharacterStats({ stats }: CharacterStatsProps) {
  return (
    <section className="character-stats" aria-label="إحصائيات الشخصية">
      {stats.map((stat) => (
        <div key={stat.label} className="character-stats__item">
          <span className="character-stats__label">{stat.label}</span>
          <span className="character-stats__value">{stat.value}</span>
        </div>
      ))}
    </section>
  );
}
