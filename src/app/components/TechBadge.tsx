interface TechBadgeProps {
  label: string;
}

export default function TechBadge({ label }: TechBadgeProps) {
  return (
    <li className="rounded-xl bg-cyan-950 px-2 py-1 text-teal-400 font-bold text-[10px]">
      {label}
    </li>
  );
}
