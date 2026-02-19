import { useState } from 'react'
import { motion } from 'framer-motion'
import { useGuest } from '../context/GuestContext.jsx'
import { lookupFamily } from '../utils/api.js'

function normalizeIdentifier(input) {
  const trimmed = input.trim()
  const digitsOnly = trimmed.replace(/\D/g, '')
  if (digitsOnly.length >= 7) {
    return digitsOnly
  }
  return trimmed.toLowerCase()
}

export default function LoginGate() {
  const { setCurrentFamily } = useGuest()
  const [identifier, setIdentifier] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    if (!identifier.trim()) {
      setError('Please enter your email or phone number.')
      return
    }
    setLoading(true)
    setError('')
    try {
      const normalized = normalizeIdentifier(identifier)
      const family = await lookupFamily(normalized)
      if (family) {
        setCurrentFamily(family)
      } else {
        setError("We couldn't find you on the guest list. Please check your email or phone number.")
      }
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 z-50 bg-charcoal/80 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="bg-cream rounded-2xl shadow-2xl p-8 w-full max-w-md"
      >
        <div className="text-center mb-8">
          <h1 className="font-serif text-3xl text-charcoal mb-2">Ricky & Zeel</h1>
          <p className="text-accent font-sans text-sm tracking-widest uppercase">August 17, 2026</p>
        </div>
        <p className="font-sans text-charcoal/80 text-sm text-center mb-6">
          Please enter the email address or phone number you used when you received your invitation.
        </p>
        <form onSubmit={handleSubmit} noValidate>
          <input
            type="text"
            value={identifier}
            onChange={e => setIdentifier(e.target.value)}
            placeholder="Email or phone number"
            aria-label="Email or phone number"
            className="w-full border border-taupe rounded-lg px-4 py-3 font-sans text-charcoal bg-white focus:outline-none focus:ring-2 focus:ring-accent mb-4"
            disabled={loading}
          />
          {error && (
            <p role="alert" className="text-red-600 text-sm font-sans mb-4">
              {error}
            </p>
          )}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-accent text-white font-sans font-semibold py-3 rounded-lg hover:bg-accent/90 transition-colors disabled:opacity-50"
          >
            {loading ? 'Looking you up…' : 'Continue'}
          </button>
        </form>
      </motion.div>
    </div>
  )
}
