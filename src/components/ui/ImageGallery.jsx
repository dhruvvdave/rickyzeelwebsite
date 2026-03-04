import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const PLACEHOLDERS = [
  { id: 1, gradient: 'from-stone-200 to-stone-400', label: 'Photo 1' },
  { id: 2, gradient: 'from-amber-100 to-amber-300', label: 'Photo 2' },
  { id: 3, gradient: 'from-rose-100 to-rose-300', label: 'Photo 3' },
  { id: 4, gradient: 'from-stone-300 to-amber-200', label: 'Photo 4' },
  { id: 5, gradient: 'from-amber-200 to-stone-300', label: 'Photo 5' },
  { id: 6, gradient: 'from-rose-200 to-stone-200', label: 'Photo 6' },
]

export default function ImageGallery() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return
    const timer = setInterval(() => {
      setActive(a => (a + 1) % PLACEHOLDERS.length)
    }, 3500)
    return () => clearInterval(timer)
  }, [paused])

  function handleSelect(i) {
    setActive(i)
    setPaused(true)
  }

  function prev() {
    handleSelect((active - 1 + PLACEHOLDERS.length) % PLACEHOLDERS.length)
  }

  function next() {
    handleSelect((active + 1) % PLACEHOLDERS.length)
  }

  return (
    <div className="relative">
      {/* Cards row */}
      <div className="flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory scroll-smooth justify-center">
        {PLACEHOLDERS.map((ph, i) => (
          <motion.div
            key={ph.id}
            animate={{
              opacity: i === active ? 1 : 0.7,
              scale: i === active ? 1.04 : 1,
            }}
            transition={{ duration: 0.4 }}
            className={`flex-none w-72 h-96 md:w-80 md:h-[28rem] rounded-none bg-gradient-to-b ${ph.gradient} flex items-end justify-center pb-6 cursor-pointer snap-start`}
            onClick={() => handleSelect(i)}
          >
            <span className="font-sans text-xs tracking-widest uppercase text-charcoal/40">{ph.label}</span>
          </motion.div>
        ))}
      </div>

      {/* Arrow navigation */}
      <div className="flex items-center justify-center gap-8 mt-6">
        <button
          onClick={prev}
          aria-label="Previous photo"
          className="font-serif text-2xl text-charcoal/50 hover:text-charcoal transition-colors w-8 text-center"
        >
          &#8249;
        </button>

        {/* Dot indicators */}
        <div className="flex gap-2">
          {PLACEHOLDERS.map((_, i) => (
            <button
              key={i}
              onClick={() => handleSelect(i)}
              aria-label={`Go to photo ${i + 1}`}
              className={`transition-all duration-300 rounded-none ${i === active ? 'w-6 h-1.5 bg-charcoal' : 'w-1.5 h-1.5 bg-taupe'}`}
            />
          ))}
        </div>

        <button
          onClick={next}
          aria-label="Next photo"
          className="font-serif text-2xl text-charcoal/50 hover:text-charcoal transition-colors w-8 text-center"
        >
          &#8250;
        </button>
      </div>
    </div>
  )
}
