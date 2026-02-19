import { motion } from 'framer-motion'

const SECTIONS = [
  {
    title: 'Hotels',
    content: 'We recommend staying near the venue. Hotel recommendations and room block information coming soon.',
  },
  {
    title: 'Getting There',
    content: 'Directions and parking information for all venues will be posted here closer to the wedding date.',
  },
  {
    title: 'Airport',
    content: 'Toronto Pearson International Airport (YYZ) is the closest major airport. Billy Bishop Airport (YTZ) is a convenient option for domestic travelers.',
  },
]

export default function Travel() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="font-serif text-4xl md:text-5xl text-charcoal mb-10 text-center">Travel</h1>
        <div className="flex flex-col gap-8">
          {SECTIONS.map(s => (
            <div key={s.title} className="bg-white rounded-2xl border border-taupe/50 p-6">
              <h2 className="font-serif text-2xl text-charcoal mb-3">{s.title}</h2>
              <p className="font-sans text-charcoal/70 leading-relaxed">{s.content}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
