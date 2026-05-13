interface AuthHeaderProps {
  title: string;
  subtitle: string;
}

function AuthHeader({ title, subtitle }: AuthHeaderProps) {
  return (
    <header className="mb-8 text-center">
      <h1 className="font-headline text-xl font-normal text-on-surface mb-2">
        {title}
      </h1>
      <p className="text-on-surface-variant text-[12px] mt-3">{subtitle}</p>
    </header>
  );
}

export default AuthHeader;
