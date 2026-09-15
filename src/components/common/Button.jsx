import { Link } from 'react-router-dom';

export const Button = ({ 
  children, 
  to, 
  variant = 'primary', 
  className = '', 
  type = 'button', 
  disabled = false, 
  onClick 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-semibold text-xs uppercase tracking-wider transition-all duration-200 rounded-full px-6 py-3.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-brand-accent text-white hover:bg-[#E04B00] focus-visible:ring-brand-accent shadow-sm",
    dark: "bg-brand-dark text-white hover:bg-zinc-800 focus-visible:ring-brand-dark shadow-sm",
    outline: "border border-zinc-300 text-brand-dark hover:border-brand-dark hover:bg-zinc-50 focus-visible:ring-zinc-400",
    sand: "bg-brand-sand text-brand-dark hover:bg-brand-sand-dark focus-visible:ring-zinc-400"
  };

  const combinedStyles = `${baseStyles} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedStyles}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} disabled={disabled} onClick={onClick} className={combinedStyles}>
      {children}
    </button>
  );
};