import { motion } from 'framer-motion'

export default function OurStory() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-lg"
      >
        <h1 className="font-serif text-4xl md:text-5xl text-charcoal mb-6">Our Story</h1>
        <p className="font-sans text-charcoal/70 text-lg leading-relaxed">
          Coming soon! We're still writing our story…
        </p>
      </motion.div>
    </div>
  )
}
