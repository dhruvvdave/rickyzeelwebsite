import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const PLACEHOLDERS = [
  { id: 1, gradient: 'from-rose-200 to-pink-300', label: 'Photo 1' },
  { id: 2, gradient: 'from-amber-200 to-yellow-300', label: 'Photo 2' },
  { id: 3, gradient: 'from-teal-200 to-cyan-300', label: 'Photo 3' },
  { id: 4, gradient: 'from-purple-200 to-violet-300', label: 'Photo 4' },
  { id: 5, gradient: 'from-green-200 to-emerald-300', label: 'Photo 5' },
  { id: 6, gradient: 'from-orange-200 to-amber-300', label: 'Photo 6' },
]

export default function ImageGallery() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return
    const timer = setInterval(() => {
      setActive(a => (a + 1) % PLACEHOLDERS.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [paused])

  function handleSelect(i) {
    setActive(i)
    setPaused(true)
  }

  return (
    <div className="relative overflow-hidden rounded-2xl">
      <div className="flex gap-3 overflow-x-auto pb-2 snap-x snap-mandatory scroll-smooth">
        {PLACEHOLDERS.map((ph, i) => (
          <motion.div
            key={ph.id}
            animate={{ opacity: i === active ? 1 : 0.6, scale: i === active ? 1.02 : 1 }}
            transition={{ duration: 0.4 }}
            className={`flex-none w-64 h-48 rounded-xl bg-gradient-to-br ${ph.gradient} flex items-center justify-center text-white/80 font-sans font-medium snap-start cursor-pointer`}
            onClick={() => handleSelect(i)}
          >
            {ph.label}
          </motion.div>
        ))}
      </div>
      <div className="flex justify-center gap-2 mt-4">
        {PLACEHOLDERS.map((_, i) => (
          <button
            key={i}
            onClick={() => handleSelect(i)}
            aria-label={`Go to photo ${i + 1}`}
            className={`w-2 h-2 rounded-full transition-colors ${i === active ? 'bg-accent' : 'bg-taupe'}`}
          />
        ))}
      </div>
    </div>
  )
}
