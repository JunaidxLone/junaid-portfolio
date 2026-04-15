interface BrandMarkProps {
  compact?: boolean;
}

export default function BrandMark({ compact = false }: BrandMarkProps) {
  return (
    <a
      href="#about"
      aria-label="Jump to About section"
      className={`focus-ring inline-flex items-center justify-center rounded-sm border border-line/80 bg-surface/55 text-accent transition hover:border-accent/70 hover:bg-surface ${
        compact ? "h-9 w-9" : "h-10 w-10"
      }`}
    >
      <span className="font-mono text-[0.62rem] font-medium uppercase tracking-[0.16em]">JL</span>
    </a>
  );
}
