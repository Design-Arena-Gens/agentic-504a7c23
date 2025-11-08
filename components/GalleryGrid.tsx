import Image from "next/image";
import { CharacterGalleryItem } from "@/data/characters";

interface GalleryGridProps {
  items: CharacterGalleryItem[];
}

export function GalleryGrid({ items }: GalleryGridProps) {
  if (items.length === 0) {
    return null;
  }

  return (
    <section className="gallery-grid" aria-label="معرض الصور">
      {items.map((item) => (
        <figure key={item.src} className="gallery-grid__item">
          <Image src={item.src} alt={item.alt} width={480} height={360} />
          <figcaption>{item.alt}</figcaption>
        </figure>
      ))}
    </section>
  );
}
