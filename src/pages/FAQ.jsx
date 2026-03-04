import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const FAQS = [
  {
    id: 'attire',
    q: 'What should I wear to each event?',
    a: 'Each event has its own dress code. For the Mehndi, colourful Indian attire is encouraged. For the Pithi & Grah Shanti, traditional Indian attire. For the Sangeet, festive Indian attire. For the Wedding, formal Indian attire.',
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
  {
    id: 'dietary',
    q: 'Will there be vegetarian / dietary options?',
    a: 'Yes! We will have vegetarian options at all events. If you have specific dietary requirements or severe allergies, please let us know when you RSVP.',
  },
  {
    id: 'children',
    q: 'Are children welcome?',
    a: 'Children are welcome at our celebrations. Please include them in your RSVP so we can plan accordingly.',
  },
  {
    id: 'photos',
    q: 'Can I take photos during the ceremony?',
    a: 'We will have a professional photographer capturing the day. Details about our photo policy during the ceremony will be shared closer to the date.',
  },
  {
    id: 'rsvp',
    q: 'What is the RSVP deadline?',
    a: 'RSVP details and deadline will be communicated directly. Please use the RSVP page on this website to confirm your attendance.',
  },
]

function FAQItem({ item }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-taupe">
      <button
        className="w-full text-left px-0 py-5 font-sans text-charcoal flex justify-between items-center hover:text-accent transition-colors"
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
      >
        <span className="text-sm tracking-wide pr-4">{item.q}</span>
        <span className="font-serif text-xl text-accent flex-none">{open ? '−' : '+'}</span>
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
            <p className="pb-5 font-sans text-charcoal/60 text-sm leading-relaxed">
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
    <div className="max-w-2xl mx-auto px-4 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-16">
          <p className="eyebrow mb-3">Need to Know</p>
          <h1 className="font-serif text-5xl md:text-6xl text-charcoal">Frequently Asked Questions</h1>
        </div>
        <div className="border-t border-taupe">
          {FAQS.map((item) => (
            <FAQItem key={item.id} item={item} />
          ))}
        </div>
      </motion.div>
    </div>
  )
}
