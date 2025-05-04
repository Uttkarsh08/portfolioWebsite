type SectionHeaderProps = {
  title: string;
  subtitle?: string;
};

export function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <div className="mb-8">
      <h1 className="text-3xl md:text-4xl font-bold text-orange-500">
        {title}
      </h1>
      {subtitle && (
        <p className="mt-2 text-muted-foreground text-lg">{subtitle}</p>
      )}
    </div>
  );
}
