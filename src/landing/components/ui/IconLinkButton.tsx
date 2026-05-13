interface IconLinkButtonProps {
  href: string;
  icon: string;
  label: string;
}

function IconLinkButton({ href, icon, label }: IconLinkButtonProps) {
  return (
    <a
      className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center hover:bg-primary-fixed transition-colors"
      href={href}
      aria-label={label}
    >
      <span className="material-symbols-outlined text-sm">{icon}</span>
    </a>
  );
}
export default IconLinkButton;
