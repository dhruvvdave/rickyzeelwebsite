import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const FAQS = [
  {
    id: 'attire',
    q: 'What should I wear? (Dress code)',
    a: 'More info coming soon! Each event has its own dress code. Please check back for details on what to wear to each celebration.',
  },
  {
    id: 'children',
    q: 'Are kids welcome?',
    a: 'More info coming soon! We\'ll have details about children at our celebrations shortly.',
  },
  {
    id: 'dietary',
    q: 'Will there be vegetarian / dietary options?',
    a: 'More info coming soon! We\'ll share details about our menu and dietary accommodations.',
  },
  {
    id: 'parking',
    q: 'Is there parking at the venues?',
    a: 'More info coming soon! Parking information for each venue will be posted closer to the date.',
  },
  {
    id: 'photos',
    q: 'Can I take photos during the ceremony?',
    a: 'More info coming soon! We\'ll share our photo policy and details about our professional photographer.',
  },
  {
    id: 'rsvp',
    q: 'How do I RSVP?',
    a: 'More info coming soon! Please use the RSVP page on this website to confirm your attendance.',
  },
  {
    id: 'timeline',
    q: 'What is the timeline for the weekend?',
    a: 'More info coming soon! The full weekend schedule will be posted here as details are finalised.',
  },
]

function FAQItem({ item }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="faq-item">
      <button
        className="faq-question"
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
      >
        <span>{item.q}</span>
        <span className="faq-icon">{open ? '−' : '+'}</span>
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
            <div className="faq-answer-inner">{item.a}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  return (
    <div>
      <div className="page-hero">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="eyebrow mb-3">Need to Know</p>
          <h1>Frequently Asked Questions</h1>
          <p>We&apos;ll keep this updated as details are confirmed</p>
        </motion.div>
      </div>

      <div className="faq-page">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{ borderTop: '1px solid var(--color-beige)' }}
        >
          {FAQS.map(item => (
            <FAQItem key={item.id} item={item} />
          ))}
        </motion.div>
      </div>
    </div>
  )
}

