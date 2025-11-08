import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { BackLink } from "@/components/BackLink";
import { CharacterStats } from "@/components/CharacterStats";
import { GalleryGrid } from "@/components/GalleryGrid";
import { QuickTips } from "@/components/QuickTips";
import { SkillList } from "@/components/SkillList";
import { characters } from "@/data/characters";

interface CharacterPageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return characters.map((character) => ({ slug: character.slug }));
}

export function generateMetadata({ params }: CharacterPageProps): Metadata {
  const character = characters.find((item) => item.slug === params.slug);
  if (!character) {
    return {};
  }

  return {
    title: `${character.name} | دليل سكواد باسترز`,
    description: character.summary
  };
}

export default function CharacterPage({ params }: CharacterPageProps) {
  const character = characters.find((item) => item.slug === params.slug);

  if (!character) {
    notFound();
  }

  const primaryImage = character.gallery[0];
  const galleryItems = character.gallery;

  return (
    <article className="character-page">
      <BackLink />
      <header
        className="character-page__hero"
        style={{ background: character.background }}
        aria-labelledby="character-heading"
      >
        <div className="character-page__heroContent">
          <span className="character-page__badge">{character.badge}</span>
          <h1 id="character-heading">{character.name}</h1>
          <p className="character-page__tagline">{character.tagline}</p>
          <p className="character-page__summary">{character.summary}</p>
          <ul className="character-page__meta">
            <li>
              <strong>الدور:</strong> {character.role}
            </li>
            <li>
              <strong>الندرة:</strong> {character.rarity}
            </li>
            <li>
              <strong>الصعوبة:</strong> {character.difficulty}
            </li>
            <li>
              <strong>أفضل الأوضاع:</strong> {character.bestModes.join("، ")}
            </li>
          </ul>
        </div>
        {primaryImage ? (
          <div className="character-page__heroMedia">
            <Image src={primaryImage.src} alt={primaryImage.alt} width={420} height={360} priority />
          </div>
        ) : null}
      </header>
      <section className="character-page__content">
        <section className="character-page__section">
          <h2>لمحة تكتيكية</h2>
          <p>{character.description}</p>
        </section>

        <section className="character-page__section">
          <h2>كيفية فتح الشخصية</h2>
          <p>{character.unlock}</p>
        </section>

        <section className="character-page__section">
          <h2>التناغم مع التشكيلة</h2>
          <p>{character.squadSynergy}</p>
        </section>

        <CharacterStats stats={character.stats} />
        <SkillList skills={character.skills} />
        <QuickTips tips={character.quickTips} />
        <GalleryGrid items={galleryItems} />
      </section>
    </article>
  );
}
