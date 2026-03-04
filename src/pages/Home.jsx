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
        className="relative h-screen min-h-[500px] flex flex-col items-center justify-center"
        style={{ background: 'linear-gradient(to bottom, #e8e0d5 0%, #d4c4b0 100%)' }}
      >
        {/* Horizontal band overlay */}
        <div className="w-full bg-white/20 backdrop-blur-sm py-16 px-4 flex flex-col items-center text-center">
          {/* Monogram */}
          <div className="w-12 h-12 rounded-full border border-white/60 flex items-center justify-center font-serif text-sm text-white/90 mb-8">
            R & Z
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-serif text-6xl md:text-8xl text-white tracking-wide">
              Ricky & Zeel
            </h1>
            <p className="font-sans text-base md:text-lg text-white/80 tracking-[0.3em] uppercase mt-2">
              We're Getting Married
            </p>
          </motion.div>
        </div>

        {/* Tagline below band */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-serif italic text-xl md:text-2xl text-white/90 text-center max-w-xl px-4 mt-12"
        >
          Come for the vows. Stay for the food, dancing, and chaos (the good kind)
        </motion.p>
      </section>

      {/* Welcome / About */}
      <section className="max-w-6xl mx-auto px-4 py-24 md:py-32">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: Portrait photo placeholder */}
          <div className="aspect-[2/3] bg-gradient-to-b from-stone-200 to-stone-400 rounded-none border border-taupe flex items-end justify-center pb-6">
            <span className="font-sans text-xs tracking-widest uppercase text-charcoal/40">Your photo here</span>
          </div>

          {/* Right: Text */}
          <div>
            <p className="eyebrow mb-4">Welcome</p>
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-6 leading-snug">
              We're so excited to share this moment with you.
            </h2>
            <p className="font-sans text-charcoal/70 leading-relaxed mb-4">
              Thank you for being part of our story — it wouldn't be the same without the people we love most.
            </p>
            <p className="font-sans text-charcoal/70 leading-relaxed mb-10">
              Join us as we celebrate our marriage on August 17th! This website has everything you'll need: the schedule, venue details, travel tips, and RSVP.
            </p>

            {/* Navigation buttons */}
            <div className="flex flex-wrap gap-3">
              {NAV_BUTTONS.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  className="border border-charcoal text-charcoal hover:bg-charcoal hover:text-cream font-sans text-xs tracking-widest uppercase px-5 py-2.5 rounded-none transition-colors"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-taupe max-w-6xl mx-auto" />

      {/* Gallery */}
      <section className="bg-sand py-24">
        <div className="max-w-6xl mx-auto px-4">
          <p className="eyebrow text-center mb-3">Gallery</p>
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal text-center mb-12">
            Moments we'll always remember
          </h2>
          <ImageGallery />
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-taupe" />

      {/* Navigation section */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="eyebrow mb-3">Explore</p>
          <h2 className="font-serif text-2xl md:text-3xl text-charcoal mb-10">Everything you need to know</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {NAV_BUTTONS.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className="border border-charcoal text-charcoal hover:bg-charcoal hover:text-cream font-sans text-xs tracking-widest uppercase px-5 py-2.5 rounded-none transition-colors"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
