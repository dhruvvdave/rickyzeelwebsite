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
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: 'rgba(44, 36, 22, 0.75)' }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        style={{
          background: 'var(--color-warm-white)',
          borderRadius: 4,
          padding: '2.5rem',
          width: '100%',
          maxWidth: 420,
          boxShadow: '0 16px 48px rgba(44,36,22,0.18)',
        }}
      >
        <div className="text-center mb-8">
          <p className="font-serif" style={{ fontSize: '1.8rem', color: 'var(--color-text)', fontStyle: 'italic', marginBottom: '0.35rem' }}>
            Ricky &amp; Zeel
          </p>
          <p className="eyebrow">August 17, 2026</p>
        </div>
        <p className="font-sans text-center mb-6" style={{ fontSize: '0.85rem', color: 'var(--color-text-light)', lineHeight: 1.7 }}>
          Please enter the email address or phone number you used when you received your invitation.
        </p>
        <form onSubmit={handleSubmit} noValidate>
          <input
            type="text"
            value={identifier}
            onChange={e => setIdentifier(e.target.value)}
            placeholder="Email or phone number"
            aria-label="Email or phone number"
            className="w-full font-sans mb-4"
            style={{
              border: '1px solid var(--color-taupe)',
              borderRadius: 2,
              padding: '0.75rem 1rem',
              color: 'var(--color-text)',
              background: 'white',
              fontSize: '0.875rem',
              outline: 'none',
            }}
            disabled={loading}
          />
          {error && (
            <p role="alert" className="font-sans mb-4" style={{ color: '#b91c1c', fontSize: '0.8rem' }}>
              {error}
            </p>
          )}
          <button
            type="submit"
            disabled={loading}
            className="btn-primary w-full"
            style={{ opacity: loading ? 0.6 : 1, textAlign: 'center' }}
          >
            {loading ? 'Looking you up…' : 'Continue'}
          </button>
        </form>
      </motion.div>
    </div>
  )
}

