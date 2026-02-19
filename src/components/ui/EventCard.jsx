export default function EventCard({ event }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-taupe/50 p-6 flex flex-col gap-3">
      <h3 className="font-serif text-2xl text-charcoal">{event.name}</h3>
      <div className="flex flex-col gap-1 text-sm font-sans text-charcoal/70">
        <p>📅 {event.date} · {event.time}</p>
        <p>📍 {event.location}</p>
        {event.dressCode && <p>👗 {event.dressCode}</p>}
      </div>
      {event.description && (
        <p className="font-sans text-sm text-charcoal/80">{event.description}</p>
      )}
      <button
        className="mt-2 self-start text-sm font-sans font-medium text-accent border border-accent px-4 py-2 rounded-lg hover:bg-accent hover:text-white transition-colors"
        onClick={() => alert('Add to Calendar coming soon!')}
      >
        Add to Calendar
      </button>
    </div>
  )
}
