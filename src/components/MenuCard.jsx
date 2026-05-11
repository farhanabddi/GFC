import { orderOnWhatsApp } from "../lib/whatsapp"

function MenuCard({ item }) {
  return (
    <div className="bg-card border border-border rounded-2xl overflow-hidden hover:border-white/20 transition-all group">

      {/* Image */}
      <div className="relative h-44 overflow-hidden bg-white/5">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            e.target.style.display = "none"
          }}
        />
        {/* Number badge */}
        <div className="absolute top-3 left-3 w-7 h-7 rounded-full bg-gold flex items-center justify-center">
          <span className="text-dark font-bold text-xs">{item.id}</span>
        </div>
        {/* NEW badge */}
        {item.isNew && (
          <span className="absolute top-3 right-3 bg-white text-dark text-xs font-bold px-2 py-0.5 rounded-full">
            NEW
          </span>
        )}
      </div>

      {/* Info */}
      <div className="p-4">
        <h3 className="text-white font-semibold text-sm leading-tight mb-1">
          {item.name}
        </h3>
        <p className="text-gray-500 text-xs leading-relaxed mb-4">
          {item.description}
        </p>

        {/* WhatsApp button */}
        <button
          onClick={() => orderOnWhatsApp(item.name, item.description)}
          className="w-full py-2.5 bg-[#25D366] hover:bg-[#1ebe5d] text-white text-xs font-semibold rounded-full transition-colors flex items-center justify-center gap-2"
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.089.537 4.049 1.475 5.757L0 24l6.418-1.452A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.787 9.787 0 01-5.042-1.396l-.361-.214-3.743.847.878-3.64-.235-.374A9.786 9.786 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182c5.43 0 9.818 4.388 9.818 9.818 0 5.43-4.388 9.818-9.818 9.818z"/>
          </svg>
          Order on WhatsApp
        </button>
      </div>

    </div>
  )
}

export default MenuCard