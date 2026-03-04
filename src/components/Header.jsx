import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useGuest } from '../context/GuestContext.jsx'

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/our-story', label: 'Our Story' },
  { to: '/schedule', label: 'Schedule' },
  { to: '/travel', label: 'Travel' },
  { to: '/faq', label: 'FAQ' },
  { to: '/rsvp', label: 'RSVP' }
]

export default function Header() {
  const { isAuthenticated, logout } = useGuest()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header style={{ backgroundColor: 'rgba(247,243,238,0.96)', backdropFilter: 'blur(8px)', borderBottom: '1px solid var(--taupe)' }} className="sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="font-display text-xl tracking-elegant" style={{ color: 'var(--charcoal)' }}>
          Ricky &amp; Zeel
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          {NAV_LINKS.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `nav-link text-xs font-medium uppercase tracking-widest transition-colors ${isActive ? 'active' : ''}`
              }
              style={{ color: 'var(--charcoal)' }}
            >
              {label}
            </NavLink>
          ))}
          {isAuthenticated && (
            <button
              onClick={logout}
              className="nav-link text-xs font-medium uppercase tracking-widest transition-colors"
              style={{ color: 'var(--charcoal)' }}
            >
              Log out
            </button>
          )}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2"
          aria-label="Toggle menu"
          style={{ color: 'var(--charcoal)' }}
          onClick={() => setMenuOpen(o => !o)}
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav
          className="md:hidden border-t px-6 py-4 flex flex-col gap-4"
          style={{ backgroundColor: 'var(--cream)', borderColor: 'var(--taupe)' }}
          aria-label="Mobile navigation"
        >
          {NAV_LINKS.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `text-xs font-medium uppercase tracking-widest py-1 transition-colors ${isActive ? 'active' : ''}`
              }
              style={{ color: 'var(--charcoal)' }}
            >
              {label}
            </NavLink>
          ))}
          {isAuthenticated && (
            <button
              onClick={() => { logout(); setMenuOpen(false) }}
              className="text-xs font-medium uppercase tracking-widest text-left py-1"
              style={{ color: 'var(--charcoal)' }}
            >
              Log out
            </button>
          )}
        </nav>
      )}
    </header>
  )
}