function MenuCard({ item }) {
  return (
    <div className="bg-card border border-border rounded-2xl overflow-hidden hover:border-white/20 transition-all group">

      {/* Emoji area */}
      <div className="h-36 flex items-center justify-center bg-white/5 text-6xl relative">
        {item.emoji}
        {item.isNew && (
          <span className="absolute top-3 left-3 bg-gold text-dark text-xs font-bold px-2 py-0.5 rounded-full">
            NEW
          </span>
        )}
      </div>

      {/* Info */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-1">
          <h3 className="text-white font-semibold text-sm">{item.name}</h3>
          <span className="text-gold font-bold text-sm">{item.price}</span>
        </div>
        <p className="text-gray-500 text-xs leading-relaxed mb-4">{item.description}</p>

        <button className="w-full py-2 border border-white/20 text-white text-xs font-medium rounded-full hover:bg-white/10 transition-colors flex items-center justify-center gap-1">
          + Order in store
        </button>
      </div>
    </div>
  )
}

export default MenuCard