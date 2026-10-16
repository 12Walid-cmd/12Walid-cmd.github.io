// Keep planned destinations without sending visitors to missing pages.
const resumeExists =
  Object.keys(import.meta.glob("/public/resume.pdf")).length > 0;
export default function ResourceLink({
  href,
  children,
  className = "",
  onClick,
}) {
  const available = href === "/resume.pdf" && resumeExists;
  return (
    <a
      href={href}
      className={className}
      aria-disabled={!available || undefined}
      title={
        available
          ? undefined
          : href === "/resume.pdf"
            ? "Resume is not available yet"
            : "This section is coming soon"
      }
      onClick={(event) => {
        if (!available) event.preventDefault();
        onClick?.(event);
      }}
    >
      {children}
      {!available && <span className="sr-only"> (not available yet)</span>}
    </a>
  );
}
