import { motion } from 'framer-motion'

export default function OurStory() {
  return (
    <div>
      <div className="page-hero">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="eyebrow mb-3">Ricky &amp; Zeel</p>
          <h1>Our Story</h1>
          <p>We&apos;re still writing it… but we promise it&apos;s a good one.</p>
        </motion.div>
      </div>

      <div className="our-story-page">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center max-w-xl mx-auto"
        >
          <div className="mb-8" style={{ width: 48, height: 1, background: 'var(--color-taupe)', margin: '0 auto 2rem' }} />
          <p className="font-sans leading-relaxed" style={{ color: 'var(--color-text-light)', fontSize: '0.925rem' }}>
            Come back soon — this page is under construction. We&apos;ll have photos, stories,
            and all the embarrassing details of how we got here.
          </p>
        </motion.div>
      </div>
    </div>
  )
}

