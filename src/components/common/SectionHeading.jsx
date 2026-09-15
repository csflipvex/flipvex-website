export const SectionHeading = ({ 
  badge, 
  title, 
  subtitle, 
  align = 'left',
  className = '' 
}) => {
  const alignmentStyles = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto'
  };

  return (
    <div className={`flex flex-col mb-12 lg:mb-16 max-w-3xl ${alignmentStyles[align]} ${className}`}>
      {badge && (
        <span className="inline-block text-[11px] font-mono uppercase tracking-widest text-brand-accent font-bold mb-3 px-3 py-1 bg-brand-accent/10 rounded-full">
          {badge}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-dark tracking-tight leading-[1.1]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-brand-muted leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};