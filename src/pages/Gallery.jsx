import { motion } from 'framer-motion'

const BASE = '/rickyzeelwebsite'
const GALLERY_IMAGES = [1, 2, 3, 4, 5, 6]

export default function Gallery() {
  return (
    <div>
      <div className="page-hero">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="eyebrow mb-3">Ricky &amp; Zeel</p>
          <h1>Gallery</h1>
          <p>A collection of our favourite moments.</p>
        </motion.div>
      </div>

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '4rem 1.5rem 6rem' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '1rem',
          }}
        >
          {GALLERY_IMAGES.map((n) => (
            <motion.div
              key={n}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: n * 0.07 }}
              style={{
                aspectRatio: '3 / 4',
                overflow: 'hidden',
                background: 'var(--color-beige)',
                borderRadius: 2,
              }}
            >
              <img
                src={`${BASE}/photos/gallery-${n}.jpg`}
                alt={`Gallery photo ${n}`}
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
