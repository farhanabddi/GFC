function LocationCard({ location }) {
  return (
    <div className="bg-card border border-border rounded-2xl p-6">

      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <span className="text-gray-500 text-xs uppercase tracking-widest">01</span>
        {location.isOpen ? (
          <span className="flex items-center gap-1.5 bg-green-500/10 text-green-400 text-xs font-medium px-3 py-1 rounded-full border border-green-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
            Open now
          </span>
        ) : (
          <span className="flex items-center gap-1.5 bg-red-500/10 text-red-400 text-xs font-medium px-3 py-1 rounded-full border border-red-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
            Closed
          </span>
        )}
      </div>

      {/* Name */}
      <h3 className="text-white font-bold text-2xl mb-5">{location.name}</h3>

      {/* Details */}
      <div className="flex flex-col gap-3">
        <div className="flex items-start gap-3">
          <span className="text-base mt-0.5">📍</span>
          <span className="text-gray-400 text-sm">{location.address}</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-base">📞</span>
          <span className="text-gray-400 text-sm">{location.phone}</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-base">🕐</span>
          <span className="text-gray-400 text-sm">{location.hours}</span>
        </div>
      </div>
    </div>
  )
}

export default LocationCard