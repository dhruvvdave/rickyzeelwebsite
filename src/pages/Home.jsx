import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import ImageGallery from '../components/ui/ImageGallery.jsx'

const NAV_BUTTONS = [
  { to: '/our-story', label: 'Our Story' },
  { to: '/schedule', label: 'See the Schedule' },
  { to: '/travel', label: 'Travel Tips' },
  { to: '/rsvp', label: 'RSVP' },
  { to: '/faq', label: 'FAQs' },
]

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section
        className="relative h-screen min-h-[500px] flex items-center justify-center"
        style={{ background: 'linear-gradient(135deg, #2C2C2C 0%, #4a3728 50%, #2C2C2C 100%)' }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4"
        >
          <div className="w-16 h-16 rounded-full bg-accent/80 flex items-center justify-center text-white font-serif text-xl mx-auto mb-6">
            RZ
          </div>
          <h1 className="font-serif text-5xl md:text-7xl text-white mb-4">Ricky & Zeel</h1>
          <p className="font-sans text-lg md:text-xl text-white/80 mb-3">We're Getting Married</p>
          <p className="font-sans text-sm md:text-base text-white/60 max-w-lg mx-auto">
            Come for the vows. Stay for the food, dancing, and chaos (the good kind)
          </p>
        </motion.div>
      </section>

      {/* Welcome */}
      <section className="max-w-6xl mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-6">Welcome,</h2>
            <p className="font-sans text-charcoal/80 leading-relaxed mb-4">
              We're so excited to share this moment with you. Thank you for being part of our story —
              it wouldn't be the same without the people we love most.
            </p>
            <p className="font-sans text-charcoal/80 leading-relaxed mb-8">
              Join us as we celebrate our marriage on August 17th! This website has everything you'll
              need: the schedule, venue details, travel tips, and RSVP.
            </p>
            <div className="flex flex-wrap gap-3">
              {NAV_BUTTONS.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  className="font-sans font-medium text-sm border border-accent text-accent px-5 py-2 rounded-lg hover:bg-accent hover:text-white transition-colors"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
          <div className="aspect-[2/3] bg-gradient-to-br from-sand to-taupe rounded-2xl flex items-center justify-center text-charcoal/40 font-sans text-sm">
            Portrait photo coming soon
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-sand py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-serif text-2xl md:text-3xl text-charcoal text-center mb-10">
            Moments we'll always remember
          </h2>
          <ImageGallery />
        </div>
      </section>
    </div>
  )
}
