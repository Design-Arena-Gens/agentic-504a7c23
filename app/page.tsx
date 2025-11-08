'use client';

import { useMemo, useState } from "react";
import { characters } from "@/data/characters";
import { FilterBar } from "@/components/FilterBar";
import { CharacterCard } from "@/components/CharacterCard";

const difficulties = Array.from(new Set(characters.map((character) => character.difficulty)));

export default function HomePage() {
  const [search, setSearch] = useState("");
  const [selectedRole, setSelectedRole] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState("");

  const filteredCharacters = useMemo(() => {
    return characters.filter((character) => {
      const matchesSearch =
        search.trim().length === 0 ||
        character.name.includes(search) ||
        character.tagline.includes(search) ||
        character.role.includes(search) ||
        character.summary.includes(search);

      const matchesRole = selectedRole ? character.role === selectedRole : true;
      const matchesDifficulty = selectedDifficulty ? character.difficulty === selectedDifficulty : true;

      return matchesSearch && matchesRole && matchesDifficulty;
    });
  }, [search, selectedRole, selectedDifficulty]);

  return (
    <>
      <section className="intro">
        <div className="intro__card">
          <h2>كيف تستخدم هذا الدليل؟</h2>
          <p>
            اختر الشخصية المناسبة لتشكيلتك، ثم اعرف متى تستخدم مهاراتها لتحسم المعركة. ستجد هنا
            ملخصًا واضحًا لكل دور، كيفية فتح الشخصية، وأفضل الأوضاع المتوافقة معها.
          </p>
          <ul>
            <li>ابدأ بتحديد الدور الذي ينقص تشكيلتك الحالية (مهاجم، دعم، تحكم).</li>
            <li>اقرأ المهارات بعناية ولاحظ التوقيت المثالي للتفعيل.</li>
            <li>استخدم النصائح السريعة لتجنب الأخطاء الشائعة للمبتدئين.</li>
          </ul>
        </div>
        <div className="intro__card intro__card--highlight">
          <h2>تحديثات مستمرة</h2>
          <p>
            تم تصميم قاعدة البيانات لتسهيل إضافة أبطال جدد بمجرد نزولهم في اللعبة، مع إمكانية تعديل
            الأدوار أو الإحصائيات بدون كسر التصميم.
          </p>
          <p>
            ضع الموقع في المفضلة لتظل على اطلاع على أحدث التغييرات والتوازنات باللعبة.
          </p>
        </div>
      </section>
      <FilterBar
        search={search}
        onSearchChange={setSearch}
        selectedRole={selectedRole}
        onRoleChange={setSelectedRole}
        selectedDifficulty={selectedDifficulty}
        onDifficultyChange={setSelectedDifficulty}
        roles={Array.from(new Set(characters.map((character) => character.role)))}
        difficulties={difficulties}
      />
      <section className="character-grid" aria-live="polite">
        {filteredCharacters.length === 0 ? (
          <p className="character-grid__empty">
            لم يتم العثور على شخصيات مطابقة لبحثك. جرّب تعديل الفلاتر أو كتابة اسم مختلف.
          </p>
        ) : (
          filteredCharacters.map((character) => <CharacterCard key={character.slug} character={character} />)
        )}
      </section>
    </>
  );
}
