export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`font-display leading-none tracking-tight ${className}`}>
      <span className="block text-[0.55em] uppercase tracking-[0.42em] font-body font-medium opacity-70 mb-1">
        Ofelia
      </span>
      <span className="block italic">Nail Lounge</span>
    </span>
  );
}
