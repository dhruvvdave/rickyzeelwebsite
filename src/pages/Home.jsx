import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const BASE = '/rickyzeelwebsite'

const GALLERY_IMAGES = [1, 2, 3, 4, 5, 6]

function CouplePhoto({ className, style }) {
  const [imgError, setImgError] = useState(false)

  if (imgError) {
    return (
      <div className={className || 'welcome-photo-placeholder'} style={style}>
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
      className={className || 'welcome-photo'}
      style={style}
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
            <p className="hero-subtitle">August 17, 2026 · Toronto</p>
            <div className="hero-divider" />
            <p className="hero-tagline">
              Come for the vows. Stay for the food, dancing, and chaos (the good kind)
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Welcome Intro (centered header) ──── */}
      <section className="welcome-intro">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="welcome-monogram">R &amp; Z</span>
          <h2>Celebrating Ricky &amp; Zeel</h2>
          <p className="eyebrow">August 15–17, 2026</p>
        </motion.div>
        <div className="welcome-intro-divider" />

        {/* Two-column: photo | text */}
        <div className="welcome-section">
          <div className="welcome-grid">
            {/* Left: photo */}
            <motion.div
              className="welcome-photo-col"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <CouplePhoto />
            </motion.div>

            {/* Right: text */}
            <motion.div
              className="welcome-text"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="pull-quote">
                &ldquo;Two people, one beautiful beginning.&rdquo;
              </p>
              <p className="eyebrow mb-3">Welcome</p>
              <p>
                We&apos;re so excited to share this moment with you. Thank you for being part of our
                story — it wouldn&apos;t be the same without the people we love most.
              </p>
              <p>
                Join us as we celebrate our marriage on August 17th! This website has everything
                you&apos;ll need: the schedule, venue details, travel tips, and RSVP.
              </p>
              <div className="welcome-btns">
                <Link to="/schedule" className="welcome-btn">View Schedule</Link>
                <Link to="/rsvp" className="welcome-btn">RSVP Now</Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Gallery Strip ─────────────────────── */}
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

      {/* ── About / Our Story preview ─────────── */}
      <section className="about-section">
        <div className="about-grid">
          {/* Left: text */}
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="eyebrow">Our Story</p>
            <h2>How It All Began</h2>
            <p>
              What started as a chance meeting turned into a lifetime of adventure, laughter,
              and love. From the first hello to this beautiful moment, every step has led us here.
            </p>
            <p>
              We can&apos;t wait to celebrate with all the people who have shaped our journey.
            </p>
            <Link to="/our-story" className="welcome-btn" style={{ marginTop: '0.5rem', display: 'inline-block' }}>
              Read Our Story
            </Link>
          </motion.div>

          {/* Right: photo */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <CouplePhoto className="about-photo" />
          </motion.div>
        </div>
      </section>
    </div>
  )
}
