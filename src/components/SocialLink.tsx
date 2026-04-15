import { ContactLink } from "@/types/portfolio";

interface SocialLinkProps {
  link: ContactLink;
  className?: string;
}

function SocialIcon({ icon }: Pick<ContactLink, "icon">) {
  if (icon === "email") {
    return (
      <svg aria-hidden viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-[1.8]">
        <rect x="2.75" y="4.75" width="18.5" height="14.5" rx="2.4" />
        <path d="M3.5 6.5 12 13l8.5-6.5" />
      </svg>
    );
  }

  if (icon === "linkedin") {
    return (
      <svg aria-hidden viewBox="0 0 24 24" className="h-4 w-4 fill-current">
        <path d="M5.2 8.1H1.5V21h3.7V8.1ZM3.3 2.9a2.2 2.2 0 1 0 0 4.4 2.2 2.2 0 0 0 0-4.4ZM22.5 13.6c0-3.9-2.1-5.8-4.9-5.8-2.2 0-3.2 1.2-3.8 2V8.1h-3.7V21h3.7v-6.4c0-1.7.3-3.3 2.3-3.3 2 0 2 1.8 2 3.4V21h3.7v-7.4Z" />
      </svg>
    );
  }

  return (
    <svg aria-hidden viewBox="0 0 24 24" className="h-4 w-4 fill-current">
      <path
        fillRule="evenodd"
        d="M12 .5A11.5 11.5 0 0 0 .5 12a11.5 11.5 0 0 0 7.9 10.9c.6.1.8-.2.8-.5v-2c-3.2.7-3.8-1.4-3.8-1.4-.6-1.4-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 1.8 2.7 1.3 3.3 1 .1-.8.4-1.2.7-1.5-2.6-.3-5.2-1.3-5.2-5.7 0-1.2.4-2.3 1.2-3.1-.1-.3-.5-1.5.1-3 0 0 1-.3 3.1 1.2a10.6 10.6 0 0 1 5.8 0c2.1-1.5 3.1-1.2 3.1-1.2.6 1.5.2 2.7.1 3 .8.8 1.2 1.9 1.2 3.1 0 4.4-2.7 5.4-5.2 5.7.4.3.8 1.1.8 2.2v3.2c0 .3.2.6.8.5A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function SocialLink({ link, className }: SocialLinkProps) {
  const isExternal = link.href.startsWith("http");
  return (
    <a
      href={link.href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      aria-label={link.label}
      className={`focus-ring inline-flex items-center gap-2 rounded-md border border-line px-4 py-2 text-sm text-text transition hover:border-accent/70 hover:text-accent ${className ?? ""}`}
    >
      <SocialIcon icon={link.icon} />
      <span>{link.label}</span>
    </a>
  );
}
