export default function EventCard({ event }) {
  // Extract day number and month from date string e.g. "Friday, August 15" → day "15", month "August"
  const dateStr = event.date || ''
  const tokens = dateStr.split(/[\s,]+/).filter(Boolean)
  // Last token is expected to be the day number, second-to-last is the month name
  const dayNum = tokens.length >= 2 ? tokens[tokens.length - 1] : ''
  const month = tokens.length >= 2 ? tokens[tokens.length - 2] : dateStr

  return (
    <div className="flex flex-col md:flex-row border border-taupe rounded-none overflow-hidden">
      {/* Date badge */}
      <div className="flex-none flex flex-col items-center justify-center bg-charcoal text-cream py-8 px-10 min-w-[120px]">
        <span className="font-serif text-5xl leading-none">{dayNum}</span>
        <span className="font-sans text-xs tracking-widest uppercase text-cream/60 mt-1">{month}</span>
      </div>

      {/* Event details */}
      <div className="flex-1 p-8 border-t md:border-t-0 md:border-l border-taupe">
        <p className="eyebrow mb-2">Schedule of {event.name}</p>
        <h3 className="font-serif text-3xl md:text-4xl text-charcoal mb-4">{event.name}</h3>
        <div className="flex flex-col gap-1.5 font-sans text-sm text-charcoal/70 mb-4">
          <p><span className="text-charcoal/40 tracking-widest uppercase text-xs">Date</span> · {event.date}</p>
          <p><span className="text-charcoal/40 tracking-widest uppercase text-xs">Time</span> · {event.time}</p>
          <p><span className="text-charcoal/40 tracking-widest uppercase text-xs">Venue</span> · {event.location}</p>
          {event.dressCode && (
            <p><span className="text-charcoal/40 tracking-widest uppercase text-xs">Attire</span> · {event.dressCode}</p>
          )}
        </div>
        {event.description && (
          <p className="font-sans text-sm text-charcoal/60 leading-relaxed border-t border-taupe pt-4">{event.description}</p>
        )}
      </div>
    </div>
  )
}
