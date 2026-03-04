import { motion } from 'framer-motion'
import { EVENTS } from '../utils/events.js'

export default function Travel() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Header */}
        <div className="text-center mb-16">
          <p className="eyebrow mb-3">Getting Here</p>
          <h1 className="font-serif text-5xl md:text-6xl text-charcoal">Travel & Accommodation</h1>
        </div>

        {/* Info cards */}
        <div className="flex flex-col gap-0 border border-taupe mb-16">
          {/* Airports */}
          <div className="p-8 border-b border-taupe">
            <p className="eyebrow mb-3">Airports</p>
            <h2 className="font-serif text-2xl text-charcoal mb-4">Flying In</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="font-sans text-xs tracking-widest uppercase text-charcoal/40 mb-1">Primary</p>
                <p className="font-sans text-charcoal font-medium">YYZ — Toronto Pearson</p>
                <p className="font-sans text-sm text-charcoal/60 mt-1">Toronto Pearson International Airport is the closest major airport serving Toronto.</p>
              </div>
              <div>
                <p className="font-sans text-xs tracking-widest uppercase text-charcoal/40 mb-1">Domestic</p>
                <p className="font-sans text-charcoal font-medium">YTZ — Billy Bishop</p>
                <p className="font-sans text-sm text-charcoal/60 mt-1">A convenient option for domestic travellers, located on the Toronto Island.</p>
              </div>
            </div>
          </div>

          {/* Hotels */}
          <div className="p-8 border-b border-taupe">
            <p className="eyebrow mb-3">Accommodation</p>
            <h2 className="font-serif text-2xl text-charcoal mb-4">Hotels</h2>
            <p className="font-sans text-charcoal/60 leading-relaxed">
              We'll share recommended hotels and room blocks closer to the date. Check back here soon.
            </p>
          </div>

          {/* Getting Around */}
          <div className="p-8">
            <p className="eyebrow mb-3">Transportation</p>
            <h2 className="font-serif text-2xl text-charcoal mb-4">Getting Around</h2>
            <p className="font-sans text-charcoal/60 leading-relaxed">
              Directions, parking, and transportation details for each venue will be shared closer to the wedding date.
            </p>
          </div>
        </div>

        {/* Venues section */}
        <div>
          <p className="eyebrow mb-3 text-center">Venues</p>
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal text-center mb-10">Where We'll Be</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {EVENTS.map(event => (
              <div key={event.key} className="border border-taupe p-6 rounded-none">
                <p className="eyebrow mb-2">{event.name} — {event.date}</p>
                <h3 className="font-serif text-xl text-charcoal mb-3">{event.name}</h3>
                <div className="bg-sand h-28 flex items-center justify-center text-2xl mb-3 rounded-none">
                  🗺️
                </div>
                <p className="font-sans text-sm text-charcoal/60">{event.location}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  )
}
