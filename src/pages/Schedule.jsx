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

  const visibleEvents = EVENTS.filter(e => invitedKeys.includes(e.key))

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="font-serif text-4xl md:text-5xl text-charcoal mb-2 text-center">Schedule</h1>
        {currentFamily && (
          <p className="font-sans text-center text-charcoal/60 text-sm mb-10">
            Welcome, {currentFamily.familyName}! Here are your events.
          </p>
        )}
        {visibleEvents.length === 0 ? (
          <p className="text-center font-sans text-charcoal/70">No events found for your invitation.</p>
        ) : (
          <div className="flex flex-col gap-6">
            {visibleEvents.map(event => (
              <EventCard key={event.key} event={event} />
            ))}
          </div>
        )}
      </motion.div>
    </div>
  )
}
