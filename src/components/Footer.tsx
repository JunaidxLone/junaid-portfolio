export default function Footer() {
  return (
    <footer className="border-t border-line/70 pb-3 pt-6 text-sm text-muted">
      <p>Designed and built by Junaid Lone.</p>
      <p className="mt-1">Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.</p>
      <p className="mt-2 text-xs text-muted/90">
        Design inspired by{" "}
        <a
          href="https://brittanychiang.com"
          target="_blank"
          rel="noopener noreferrer"
          className="focus-ring rounded-sm underline decoration-line underline-offset-4 hover:text-accent"
        >
          Brittany Chiang
        </a>
        .
      </p>
    </footer>
  );
}
