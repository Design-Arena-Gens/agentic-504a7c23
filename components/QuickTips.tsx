interface QuickTipsProps {
  tips: string[];
}

export function QuickTips({ tips }: QuickTipsProps) {
  if (tips.length === 0) {
    return null;
  }

  return (
    <section className="quick-tips" aria-label="نصائح سريعة">
      <h3>نصائح سريعة</h3>
      <ul>
        {tips.map((tip) => (
          <li key={tip}>{tip}</li>
        ))}
      </ul>
    </section>
  );
}
