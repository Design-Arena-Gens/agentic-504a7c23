import Link from "next/link";

interface BackLinkProps {
  href?: string;
  label?: string;
}

export function BackLink({ href = "/", label = "العودة إلى الدليل" }: BackLinkProps) {
  return (
    <p className="back-link">
      <Link href={href}>↩ {label}</Link>
    </p>
  );
}
