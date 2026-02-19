import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const FAQS = [
  {
    id: 'attire',
    q: 'What should I wear?',
    a: 'Each event has its own dress code. For the Mehndi, colorful Indian attire is encouraged. For the Sangeet, festive Indian attire. For the Wedding, formal Indian attire.',
  },
  {
    id: 'parking',
    q: 'Is there parking available?',
    a: 'Parking information for each venue will be posted closer to the date. Please check back here or contact us directly.',
  },
  {
    id: 'plusone',
    q: 'Can I bring a plus-one?',
    a: 'Due to venue capacity, we can only accommodate guests listed on your invitation. If you have any questions, please reach out to us directly.',
  },
  {
    id: 'arrival',
    q: 'What time should I arrive?',
    a: 'Please plan to arrive 15–20 minutes before the listed start time so we can begin on schedule.',
  },
]

function FAQItem({ item }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-taupe/50 rounded-xl overflow-hidden">
      <button
        className="w-full text-left px-6 py-4 font-sans font-semibold text-charcoal flex justify-between items-center hover:bg-sand/50 transition-colors"
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
      >
        {item.q}
        <span className="ml-4 text-accent text-xl">{open ? '−' : '+'}</span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="px-6 py-4 font-sans text-charcoal/70 text-sm leading-relaxed border-t border-taupe/30">
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="font-serif text-4xl md:text-5xl text-charcoal mb-10 text-center">FAQs</h1>
        <div className="flex flex-col gap-3">
          {FAQS.map((item) => (
            <FAQItem key={item.id} item={item} />
          ))}
        </div>
      </motion.div>
    </div>
  )
}
