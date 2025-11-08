import Image from "next/image";
import Link from "next/link";
import { CharacterGuide } from "@/data/characters";

interface CharacterCardProps {
  character: CharacterGuide;
}

export function CharacterCard({ character }: CharacterCardProps) {
  const [primaryImage] = character.gallery;

  return (
    <Link href={`/characters/${character.slug}`} className="character-card" style={{ background: character.background }}>
      <div className="character-card__header">
        <span className="character-card__badge">{character.badge}</span>
        <span className="character-card__difficulty">{character.difficulty}</span>
      </div>
      <div className="character-card__media">
        {primaryImage ? (
          <Image
            src={primaryImage.src}
            alt={primaryImage.alt}
            width={320}
            height={240}
            className="character-card__image"
            priority
          />
        ) : null}
      </div>
      <div className="character-card__body">
        <h3>{character.name}</h3>
        <p className="character-card__tagline">{character.tagline}</p>
        <p className="character-card__summary">{character.summary}</p>
      </div>
      <div className="character-card__footer">
        <span>{character.role}</span>
        <span className="character-card__mode">{character.bestModes[0]}</span>
      </div>
    </Link>
  );
}
