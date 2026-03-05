import { motion } from 'framer-motion'
import { useGuest } from '../context/GuestContext.jsx'
import { EVENTS } from '../utils/events.js'

const EVENT_NUMBERS = ['01', '02', '03', '04']

export default function Schedule() {
  const { currentFamily } = useGuest()

  const invitedKeys = currentFamily
    ? [...new Set(currentFamily.guests.flatMap(g => g.events))]
    : []

  const visibleEvents = invitedKeys.length > 0
    ? EVENTS.filter(e => invitedKeys.includes(e.key))
    : EVENTS

  return (
    <div>
      <div className="page-hero">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="eyebrow mb-3">August 15–17, 2025</p>
          <h1>Schedule of Events</h1>
          <p>Everything happening across the weekend</p>
        </motion.div>
      </div>

      <div className="schedule-page">
        {currentFamily && (
          <p className="font-sans text-center text-xs tracking-widest uppercase mb-10" style={{ color: 'var(--color-text-light)' }}>
            Welcome, {currentFamily.familyName}
          </p>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {visibleEvents.map((event, i) => {
            const globalIndex = EVENTS.findIndex(e => e.key === event.key)
            const num = EVENT_NUMBERS[globalIndex] ?? String(i + 1).padStart(2, '0')
            return (
              <div key={event.key} className="event-card">
                <p className="event-number">{num}</p>
                <h2 className="event-title">{event.name}</h2>
                <div className="event-meta">
                  <div className="event-meta-item">
                    <span className="event-meta-label">Date</span>
                    <span className="event-meta-value">{event.date}</span>
                  </div>
                  <div className="event-meta-item">
                    <span className="event-meta-label">Time</span>
                    <span className="event-meta-value">{event.time}</span>
                  </div>
                  <div className="event-meta-item">
                    <span className="event-meta-label">Venue</span>
                    <span className="event-meta-value">{event.location}</span>
                  </div>
                  {event.dressCode && (
                    <div className="event-meta-item">
                      <span className="event-meta-label">Attire</span>
                      <span className="event-meta-value">{event.dressCode}</span>
                    </div>
                  )}
                </div>
                <div className="event-placeholder">
                  Schedule details coming soon
                </div>
              </div>
            )
          })}
        </motion.div>
      </div>
    </div>
  )
}

