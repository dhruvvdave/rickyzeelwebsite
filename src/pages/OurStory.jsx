import { motion } from 'framer-motion'

export default function OurStory() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-lg"
      >
        <p className="eyebrow mb-4">Our Story</p>
        <h1 className="font-serif text-5xl md:text-6xl text-charcoal mb-6">Coming Soon</h1>
        <div className="w-16 h-px bg-taupe mx-auto mb-8" />
        <p className="font-sans text-charcoal/60 leading-relaxed">
          We're still writing our story…
        </p>
      </motion.div>
    </div>
  )
}
