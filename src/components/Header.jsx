import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useGuest } from '../context/GuestContext.jsx'

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/our-story', label: 'Our Story' },
  { to: '/schedule', label: 'Schedule' },
  { to: '/travel', label: 'Travel' },
  { to: '/faq', label: 'FAQ' },
  { to: '/rsvp', label: 'RSVP' },
]

export default function Header() {
  const { isAuthenticated, logout } = useGuest()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 bg-cream/95 backdrop-blur border-b border-taupe">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="font-serif text-xl text-charcoal hover:text-accent transition-colors">
          Ricky & Zeel
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
          {NAV_LINKS.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `font-sans text-sm font-medium transition-colors ${isActive ? 'text-accent' : 'text-charcoal hover:text-accent'}`
              }
            >
              {label}
            </NavLink>
          ))}
          {isAuthenticated && (
            <button
              onClick={logout}
              className="font-sans text-sm font-medium text-charcoal hover:text-accent transition-colors"
            >
              Log out
            </button>
          )}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-charcoal p-2"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(o => !o)}
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="md:hidden bg-cream border-t border-taupe px-4 py-4 flex flex-col gap-3" aria-label="Mobile navigation">
          {NAV_LINKS.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `font-sans text-sm font-medium py-1 transition-colors ${isActive ? 'text-accent' : 'text-charcoal'}`
              }
            >
              {label}
            </NavLink>
          ))}
          {isAuthenticated && (
            <button
              onClick={() => { logout(); setMenuOpen(false) }}
              className="font-sans text-sm font-medium text-charcoal text-left py-1"
            >
              Log out
            </button>
          )}
        </nav>
      )}
    </header>
  )
}
