import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'

const NAV_LINKS = [
  { to: '/', label: 'Home', end: true },
  { to: '/our-story', label: 'Our Story' },
  { to: '/schedule', label: 'Schedule' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/travel', label: 'Travel' },
  { to: '/rsvp', label: 'RSVP' },
  { to: '/faq', label: 'FAQs' },
]

export default function Header() {
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
      {/* Top bar: studio label | brand | date */}
      <div
        className="max-w-6xl mx-auto px-6 flex items-center justify-between"
        style={{ height: '2.75rem' }}
      >
        <span
          className="font-sans"
          style={{
            fontSize: '0.6rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            opacity: 0.6,
          }}
        >
          A wedding celebration
        </span>

        <Link to="/" className="navbar-brand" style={{ fontSize: '1.3rem' }}>
          Ricky &amp; Zeel
        </Link>

        <span
          className="font-sans hidden sm:block"
          style={{
            fontSize: '0.6rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            opacity: 0.6,
          }}
        >
          Aug 17, 2026
        </span>
        {/* Spacer on tiny screens so brand stays centered */}
        <span className="sm:hidden" style={{ width: '6rem' }} />
      </div>

      {/* Thin rule */}
      <div
        style={{
          height: 1,
          background: scrolled ? 'var(--color-beige)' : 'rgba(255,255,255,0.2)',
          transition: 'background 0.35s',
        }}
      />

      {/* Desktop nav row */}
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between" style={{ height: '2.75rem' }}>
        <nav className="hidden md:flex items-center gap-7 mx-auto" aria-label="Main navigation">
          {NAV_LINKS.map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) =>
                `navbar-link${isActive ? ' active' : ''}`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* Mobile hamburger (right-aligned) */}
        <button
          className="md:hidden ml-auto p-2 transition-colors"
          aria-label="Toggle menu"
          style={{ color: scrolled ? 'var(--color-text)' : 'white' }}
          onClick={() => setMenuOpen(o => !o)}
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav
          className="md:hidden px-6 py-4 flex flex-col gap-4"
          style={{ background: 'var(--color-warm-white)', borderTop: '1px solid var(--color-beige)' }}
          aria-label="Mobile navigation"
        >
          {NAV_LINKS.map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `font-sans py-1 transition-colors ${isActive ? 'text-brown' : ''}`
              }
              style={{ fontSize: '0.7rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--color-text)' }}
            >
              {label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  )
}

