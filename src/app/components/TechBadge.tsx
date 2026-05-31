interface TechBadgeProps {
  label: string;
}

export default function TechBadge({ label }: TechBadgeProps) {
  return (
    <li className="tech-badge">
      {label}
    </li>
  );
}
