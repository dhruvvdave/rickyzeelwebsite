import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useGuest } from '../context/GuestContext.jsx'

const NAV_LINKS = [
  { to: '/our-story', label: 'Our Story' },
  { to: '/schedule', label: 'Schedule' },
  { to: '/travel', label: 'Travel' },
  { to: '/rsvp', label: 'RSVP' },
  { to: '/faq', label: 'FAQs' },
]

export default function Header() {
  const { isAuthenticated, logout } = useGuest()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 60)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const solidClass = scrolled ? 'navbar--solid' : 'navbar--transparent'

  return (
    <header className={`navbar ${solidClass}`}>
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="navbar-brand">
          R &amp; Z
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          {NAV_LINKS.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `navbar-link${isActive ? ' active' : ''}`
              }
              style={{ color: 'var(--charcoal)' }}
            >
              {label}
            </NavLink>
          ))}
          {isAuthenticated && (
            <button
              onClick={logout}
              className="navbar-link"
            >
              Log out
            </button>
          )}
        </nav>

        {/* Mobile hamburger */}
        <button
          className={`md:hidden p-2 transition-colors ${scrolled ? 'text-charcoal' : 'text-white'}`}
          aria-label="Toggle menu"
          style={{ color: 'var(--charcoal)' }}
          onClick={() => setMenuOpen(o => !o)}
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="md:hidden bg-cream border-t border-beige px-4 py-4 flex flex-col gap-4" aria-label="Mobile navigation">
          {NAV_LINKS.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `font-sans text-xs tracking-widest uppercase py-1 transition-colors ${isActive ? 'text-brown' : 'text-charcoal'}`
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

