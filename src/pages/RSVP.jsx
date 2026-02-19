import { useState } from 'react'
import { motion } from 'framer-motion'
import { useGuest } from '../context/GuestContext.jsx'
import { EVENTS } from '../utils/events.js'
import { saveRSVP } from '../utils/api.js'

export default function RSVP() {
  const { currentFamily } = useGuest()
  const [responses, setResponses] = useState({})
  const [status, setStatus] = useState('')
  const [loading, setLoading] = useState(false)

  if (!currentFamily) return null

  const invitedKeys = [...new Set(currentFamily.guests.flatMap(g => g.events))]
  const visibleEvents = EVENTS.filter(e => invitedKeys.includes(e.key))

  function handleChange(guestName, eventKey, value) {
    setResponses(r => ({
      ...r,
      [`${guestName}__${eventKey}`]: value,
    }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setStatus('')
    try {
      await saveRSVP(currentFamily.familyId, responses)
      setStatus('Your RSVP has been saved! Thank you.')
    } catch {
      setStatus('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="font-serif text-4xl md:text-5xl text-charcoal mb-2 text-center">RSVP</h1>
        <p className="font-sans text-center text-charcoal/60 text-sm mb-10">
          {currentFamily.familyName}
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-8">
          {visibleEvents.map(event => (
            <div key={event.key} className="bg-white rounded-2xl border border-taupe/50 p-6">
              <h2 className="font-serif text-2xl text-charcoal mb-1">{event.name}</h2>
              <p className="font-sans text-sm text-charcoal/60 mb-4">{event.date} · {event.time}</p>
              <div className="flex flex-col gap-4">
                {currentFamily.guests.map(guest => {
                  if (!guest.events.includes(event.key)) return null
                  const key = `${guest.name}__${event.key}`
                  return (
                    <div key={key} className="flex items-center justify-between gap-4">
                      <span className="font-sans text-sm font-medium text-charcoal">{guest.name}</span>
                      <div className="flex gap-4">
                        {['yes', 'no'].map(v => (
                          <label key={v} className="flex items-center gap-1.5 font-sans text-sm cursor-pointer">
                            <input
                              type="radio"
                              name={key}
                              value={v}
                              checked={responses[key] === v}
                              onChange={() => handleChange(guest.name, event.key, v)}
                              className="accent-accent"
                            />
                            {v === 'yes' ? 'Attending' : 'Not Attending'}
                          </label>
                        ))}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}

          {status && (
            <p role="status" className="font-sans text-sm text-center text-green-700 font-medium">
              {status}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="bg-accent text-white font-sans font-semibold py-3 rounded-lg hover:bg-accent/90 transition-colors disabled:opacity-50"
          >
            {loading ? 'Submitting…' : 'Submit RSVP'}
          </button>
        </form>
      </motion.div>
    </div>
  )
}
