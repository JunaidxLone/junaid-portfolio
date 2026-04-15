import { ExperienceRole } from "@/types/portfolio";

interface ExperienceTimelineProps {
  roles: ExperienceRole[];
}

function renderPoint(point: string) {
  const parts = point.split("**");
  return parts.map((part, index) =>
    index % 2 === 1 ? (
      <strong key={`${part}-${index}`} className="font-semibold text-text">
        {part}
      </strong>
    ) : (
      <span key={`${part}-${index}`}>{part}</span>
    )
  );
}

export default function ExperienceTimeline({ roles }: ExperienceTimelineProps) {
  return (
    <div className="space-y-4">
      {roles.map((role) => (
        <article key={`${role.company}-${role.period}`} className="rounded-xl border border-line/70 bg-surface/55 p-4 md:p-5">
          <header className="mb-3 space-y-1.5">
            <h3 className="text-lg font-semibold text-text">
              {role.company}{" "}
              <span className="font-medium text-accent/95" aria-label={`Role: ${role.title}`}>
                - {role.title}
              </span>
            </h3>
            <p className="font-mono text-[0.67rem] uppercase tracking-[0.2em] text-muted">
              {role.location} | {role.period}
            </p>
          </header>

          <ul className="space-y-1.5 text-[0.84rem] leading-[1.45rem] text-muted">
            {role.points.map((point) => (
              <li key={point} className="flex items-start gap-2.5">
                <span aria-hidden className="mt-[0.62rem] h-1 w-1 rounded-full bg-accent/85" />
                <span>{renderPoint(point)}</span>
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}
