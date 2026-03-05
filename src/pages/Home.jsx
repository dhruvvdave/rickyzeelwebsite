import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const BASE = '/rickyzeelwebsite'

const NAV_BUTTONS = [
  { to: '/our-story', label: 'Our Story' },
  { to: '/schedule', label: 'See the Schedule' },
  { to: '/travel', label: 'Travel Tips' },
  { to: '/rsvp', label: 'RSVP' },
  { to: '/faq', label: 'FAQs' },
]

const GALLERY_IMAGES = [1, 2, 3, 4, 5, 6]

function CouplePhoto() {
  const [imgError, setImgError] = useState(false)

  if (imgError) {
    return (
      <div className="welcome-photo-placeholder">
        <span className="font-sans text-xs tracking-widest uppercase" style={{ color: 'var(--color-taupe)' }}>
          Photo coming soon
        </span>
      </div>
    )
  }

  return (
    <img
      src={`${BASE}/photos/couple-vertical.jpg`}
      alt="Ricky and Zeel"
      className="welcome-photo"
      onError={() => setImgError(true)}
    />
  )
}

export default function Home() {
  // Duplicate images for seamless infinite scroll
  const galleryItems = [...GALLERY_IMAGES, ...GALLERY_IMAGES]

  return (
    <div>
      {/* ── Hero ─────────────────────────────── */}
      <section className="hero-section">
        <div className="hero-overlay" />
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="flex flex-col items-center"
          >
            <div className="hero-logo-placeholder">R &amp; Z</div>

            <h1 className="hero-title">Ricky &amp; Zeel</h1>
            <p className="hero-subtitle">We&apos;re Getting Married</p>

            <div className="hero-divider" />

            <p className="hero-tagline">
              Come for the vows. Stay for the food, dancing, and chaos (the good kind)
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Welcome ──────────────────────────── */}
      <section className="welcome-section">
        <div className="welcome-grid">
          {/* Left: text */}
          <motion.div
            className="welcome-text"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="eyebrow mb-3">Welcome</p>
            <h2>Welcome,</h2>
            <p>
              We&apos;re so excited to share this moment with you. Thank you for being part of our
              story — it wouldn&apos;t be the same without the people we love most.
            </p>
            <p>
              Join us as we celebrate our marriage on August 17th! This website has everything
              you&apos;ll need: the schedule, venue details, travel tips, and RSVP.
            </p>
            <div className="welcome-btns">
              {NAV_BUTTONS.map(({ to, label }) => (
                <Link key={to} to={to} className="welcome-btn">
                  {label}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Right: photo */}
          <motion.div
            className="welcome-photo-col"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <CouplePhoto />
          </motion.div>
        </div>
      </section>

      {/* ── Gallery ──────────────────────────── */}
      <section className="gallery-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="eyebrow text-center mb-3">Gallery</p>
          <h2 className="gallery-section-title">A Few of Our Favourites</h2>
        </motion.div>

        <div className="gallery-track-wrapper">
          <div className="gallery-track">
            {galleryItems.map((n, i) => (
              <div key={i} className="gallery-item">
                <img
                  src={`${BASE}/photos/gallery-${n}.jpg`}
                  alt={`Gallery photo ${n}`}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}


