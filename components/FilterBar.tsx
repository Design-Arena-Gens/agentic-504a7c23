'use client';

import { ChangeEvent } from "react";

interface FilterBarProps {
  search: string;
  onSearchChange: (value: string) => void;
  selectedRole: string;
  onRoleChange: (value: string) => void;
  selectedDifficulty: string;
  onDifficultyChange: (value: string) => void;
  roles: string[];
  difficulties: string[];
}

export function FilterBar({
  search,
  onSearchChange,
  selectedRole,
  onRoleChange,
  selectedDifficulty,
  onDifficultyChange,
  roles,
  difficulties
}: FilterBarProps) {
  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    onSearchChange(event.target.value);
  };

  const handleRole = (event: ChangeEvent<HTMLSelectElement>) => {
    onRoleChange(event.target.value);
  };

  const handleDifficulty = (event: ChangeEvent<HTMLSelectElement>) => {
    onDifficultyChange(event.target.value);
  };

  return (
    <section className="filter-bar" aria-label="أدوات البحث">
      <div className="filter-bar__field">
        <label htmlFor="search-input">ابحث عن شخصية</label>
        <input
          id="search-input"
          type="search"
          placeholder="اكتب اسم الشخصية أو دورها..."
          value={search}
          onChange={handleSearch}
          autoComplete="off"
        />
      </div>
      <div className="filter-bar__row">
        <div className="filter-bar__field">
          <label htmlFor="role-select">دور التشكيلة</label>
          <select id="role-select" value={selectedRole} onChange={handleRole}>
            <option value="">كل الأدوار</option>
            {roles.map((role) => (
              <option key={role} value={role}>
                {role}
              </option>
            ))}
          </select>
        </div>
        <div className="filter-bar__field">
          <label htmlFor="difficulty-select">مستوى الصعوبة</label>
          <select id="difficulty-select" value={selectedDifficulty} onChange={handleDifficulty}>
            <option value="">جميع المستويات</option>
            {difficulties.map((difficulty) => (
              <option key={difficulty} value={difficulty}>
                {difficulty}
              </option>
            ))}
          </select>
        </div>
      </div>
    </section>
  );
}
