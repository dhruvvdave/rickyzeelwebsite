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
    <div>
      <div className="page-hero">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="eyebrow mb-3">Kindly reply by July 1st, 2025</p>
          <h1>RSVP</h1>
          <p>Please confirm your attendance for each event below</p>
        </motion.div>
      </div>

      <div className="rsvp-page">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <p
            className="font-sans text-center text-xs tracking-widest uppercase mb-10"
            style={{ color: 'var(--color-text-light)' }}
          >
            {currentFamily.familyName}
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            {visibleEvents.map(event => (
              <div
                key={event.key}
                style={{
                  background: 'var(--color-warm-white)',
                  border: '1px solid var(--color-beige)',
                  borderRadius: 4,
                  padding: '1.75rem 2rem',
                }}
              >
                <h2 className="font-serif mb-1" style={{ fontSize: '1.5rem', fontWeight: 400, color: 'var(--color-text)' }}>
                  {event.name}
                </h2>
                <p className="font-sans mb-5" style={{ fontSize: '0.8rem', color: 'var(--color-text-light)' }}>
                  {event.date} · {event.time}
                </p>
                <div className="flex flex-col gap-4">
                  {currentFamily.guests.map(guest => {
                    if (!guest.events.includes(event.key)) return null
                    const key = `${guest.name}__${event.key}`
                    return (
                      <div key={key} className="flex items-center justify-between gap-4 flex-wrap">
                        <span className="font-sans font-medium" style={{ fontSize: '0.875rem', color: 'var(--color-text)' }}>
                          {guest.name}
                        </span>
                        <div className="flex gap-5">
                          {['yes', 'no'].map(v => (
                            <label
                              key={v}
                              className="flex items-center gap-2 font-sans cursor-pointer"
                              style={{ fontSize: '0.8rem', color: 'var(--color-text-light)' }}
                            >
                              <input
                                type="radio"
                                name={key}
                                value={v}
                                checked={responses[key] === v}
                                onChange={() => handleChange(guest.name, event.key, v)}
                                style={{ accentColor: 'var(--color-brown)' }}
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
              <p
                role="status"
                className="font-sans text-sm text-center font-medium"
                style={{ color: 'var(--color-brown)' }}
              >
                {status}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="btn-primary"
              style={{ textAlign: 'center', opacity: loading ? 0.6 : 1 }}
            >
              {loading ? 'Submitting…' : 'Submit RSVP'}
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  )
}

