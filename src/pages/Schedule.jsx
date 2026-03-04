import { motion } from 'framer-motion'
import { useGuest } from '../context/GuestContext.jsx'
import EventCard from '../components/ui/EventCard.jsx'
import { EVENTS } from '../utils/events.js'

export default function Schedule() {
  const { currentFamily } = useGuest()

  // Collect all event keys this family is invited to
  const invitedKeys = currentFamily
    ? [...new Set(currentFamily.guests.flatMap(g => g.events))]
    : []

  // Show invited events, or all events if none found
  const visibleEvents = invitedKeys.length > 0
    ? EVENTS.filter(e => invitedKeys.includes(e.key))
    : EVENTS

  return (
    <div className="max-w-4xl mx-auto px-4 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-16">
          <p className="eyebrow mb-3">August 2026</p>
          <h1 className="font-serif text-5xl md:text-6xl text-charcoal">Schedule</h1>
        </div>

        {currentFamily && (
          <p className="font-sans text-center text-charcoal/50 text-xs tracking-widest uppercase mb-12">
            Welcome, {currentFamily.familyName}
          </p>
        )}

        <div className="flex flex-col gap-0">
          {visibleEvents.map((event, i) => (
            <div key={event.key}>
              <EventCard event={event} />
              {i < visibleEvents.length - 1 && (
                <div className="h-px bg-taupe" />
              )}
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
