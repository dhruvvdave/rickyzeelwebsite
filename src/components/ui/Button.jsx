export default function Button({ children, variant = 'primary', className = '', ...props }) {
  const base = 'font-sans font-semibold px-6 py-3 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-accent'
  const variants = {
    primary: 'bg-accent text-white hover:bg-accent/90',
    outline: 'border border-accent text-accent hover:bg-accent hover:text-white',
    ghost: 'text-charcoal hover:text-accent',
  }
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  )
}
