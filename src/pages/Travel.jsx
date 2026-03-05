import { motion } from 'framer-motion'

const VENUES = [
  { event: 'Mehndi', address: '42 Lisson Crescent' },
  { event: 'Sangeet', address: 'Chandni Gateway' },
  { event: 'Wedding', address: 'Terrace on the Green' },
]

export default function Travel() {
  return (
    <div>
      <div className="page-hero">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="eyebrow mb-3">Travel &amp; Accommodations</p>
          <h1>Getting Here</h1>
          <p>Everything you need to know about travel &amp; accommodations</p>
        </motion.div>
      </div>

      <div className="travel-page">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          {/* Venue Addresses */}
          <div className="travel-card">
            <span className="travel-card-icon">📍</span>
            <h2>Venue Addresses</h2>
            <ul className="venue-list">
              {VENUES.map(v => (
                <li key={v.event}>
                  <span className="venue-name">{v.event}</span>
                  <span className="venue-address">{v.address}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Getting Here */}
          <div className="travel-card">
            <span className="travel-card-icon">✈️</span>
            <h2>Getting Here</h2>
            <p>
              More travel details coming soon — check back shortly! We&apos;ll share information
              about flights, driving directions, and transportation options for each venue.
            </p>
          </div>

          {/* Where to Stay */}
          <div className="travel-card">
            <span className="travel-card-icon">🏨</span>
            <h2>Where to Stay</h2>
            <p>
              Hotel recommendations and room blocks are coming soon. We&apos;ll update this section
              with our favourite nearby options and any special group rates we can arrange.
            </p>
          </div>

          {/* Need Help? */}
          <div className="travel-card">
            <span className="travel-card-icon">💬</span>
            <h2>Need Help?</h2>
            <p>
              Feel free to reach out to us with any questions about getting here or finding
              accommodations. We&apos;re happy to help make your travel as smooth as possible.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

