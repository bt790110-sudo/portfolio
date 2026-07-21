const base =
  "inline-flex items-center gap-2 rounded-full px-6 py-3 font-medium text-sm transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-2 focus-visible:outline-signal-teal";

const variants = {
  primary: "bg-signal-amber text-ink-950 hover:brightness-105 shadow-lg shadow-signal-amber/20",
  outline:
    "border border-ink-600 text-ink-900 dark:text-mist-100 hover:border-signal-teal hover:text-signal-teal",
  ghost: "text-ink-900 dark:text-mist-100 hover:text-signal-teal",
};

export default function Button({
  as = "a",
  href,
  onClick,
  type = "button",
  variant = "primary",
  icon: Icon,
  children,
  className = "",
  ...rest
}) {
  const classes = `${base} ${variants[variant]} ${className}`;

  if (as === "button") {
    return (
      <button type={type} onClick={onClick} className={`${classes} disabled:opacity-60 disabled:pointer-events-none`} {...rest}>
        {Icon && <Icon aria-hidden="true" />}
        {children}
      </button>
    );
  }

  return (
    <a href={href} onClick={onClick} className={classes} {...rest}>
      {Icon && <Icon aria-hidden="true" />}
      {children}
    </a>
  );
}
