import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer
      className="py-12 text-center"
      style={{ backgroundColor: 'var(--charcoal)', color: 'var(--cream)' }}
    >
      <p className="font-display text-2xl mb-2" style={{ letterSpacing: '0.05em' }}>Ricky &amp; Zeel</p>
      <p className="text-xs uppercase tracking-widest opacity-60 mb-6">August 17, 2026</p>
      <nav className="flex flex-wrap justify-center gap-6 text-xs uppercase tracking-widest opacity-70 mb-8">
        <Link to="/our-story" className="hover:opacity-100 transition-opacity">Our Story</Link>
        <Link to="/schedule" className="hover:opacity-100 transition-opacity">Schedule</Link>
        <Link to="/travel" className="hover:opacity-100 transition-opacity">Travel</Link>
        <Link to="/faq" className="hover:opacity-100 transition-opacity">FAQ</Link>
        <Link to="/rsvp" className="hover:opacity-100 transition-opacity">RSVP</Link>
      </nav>
      <p className="text-xs opacity-40">
        Made with love ♥
      </p>
    </footer>
  )
}