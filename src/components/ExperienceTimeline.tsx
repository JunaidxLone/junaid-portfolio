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
    <div className="space-y-7">
      {roles.map((role) => (
        <article key={`${role.company}-${role.period}`} className="grid gap-3 border-t border-line/70 pt-5 first:border-t-0 first:pt-0 md:grid-cols-[minmax(0,205px)_1fr] md:gap-5">
          <div>
            <p className="font-mono text-[0.67rem] uppercase tracking-[0.18em] text-muted">{role.period}</p>
            <p className="mt-1 text-xs text-muted">{role.location}</p>
          </div>

          <div>
            <header className="mb-2.5">
              <h3 className="text-[1.02rem] font-semibold text-text">
                {role.company}
                <span className="font-medium text-accent/95" aria-label={`Role: ${role.title}`}>
                  {" "}
                  - {role.title}
                </span>
              </h3>
            </header>

            <ul className="space-y-1.5 text-[0.83rem] leading-[1.42rem] text-muted">
              {role.points.map((point) => (
                <li key={point} className="flex items-start gap-2">
                  <span aria-hidden className="mt-[0.6rem] h-1 w-1 rounded-full bg-accent/80" />
                  <span>{renderPoint(point)}</span>
                </li>
              ))}
            </ul>
          </div>
        </article>
      ))}
    </div>
  );
}
