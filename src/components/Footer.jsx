import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer style={{ background: 'var(--color-dark)', padding: '4rem 1.5rem', textAlign: 'center' }}>
      <p className="font-serif" style={{ fontSize: '2rem', color: 'var(--color-cream)', marginBottom: '0.5rem', fontStyle: 'italic' }}>
        Ricky &amp; Zeel
      </p>
      <p className="font-sans" style={{ fontSize: '0.65rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(249,245,240,0.45)', marginBottom: '2rem' }}>
        August 17, 2026 · Toronto
      </p>
      <div style={{ width: 48, height: 1, background: 'rgba(249,245,240,0.2)', margin: '0 auto 2rem' }} />
      <p className="font-sans" style={{ fontSize: '0.7rem', color: 'rgba(249,245,240,0.3)' }}>
        Made with love
      </p>
    </footer>
  )
}

