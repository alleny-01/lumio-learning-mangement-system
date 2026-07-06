interface AuthHeaderProps {
  title: string;
  subtitle: string;
}

function AuthenticationHeader({ title, subtitle }: AuthHeaderProps) {
  return (
    <header className="mb-8">
      <h1 className="font-headline text-md text-on-surface mb-2 text-center">
        {title}
      </h1>
      <p className="text-muted-foreground sm:text-[12px] text-[11px] mt-3 text-center tracking-wide">{subtitle}</p>
    </header>
  );
}

export default AuthenticationHeader;
