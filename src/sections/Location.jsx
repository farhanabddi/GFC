import LocationCard from "../components/LocationCard"
import locations from "../data/locations"

function Location() {
  return (
    <section id="location" className="py-24 bg-dark">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <div>
            <p className="text-gold text-sm font-medium uppercase tracking-widest mb-3">
              — Find us
            </p>
            <h2 className="font-display text-5xl font-bold text-white">
              Visit <span className="text-gold italic">us.</span>
            </h2>
          </div>
          <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
            Stop by our restaurant or order delivery — we bring fresh,
            delicious food right to your door.
          </p>
        </div>

        {/* Two column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* Left — delivery image card */}
          <div className="relative rounded-2xl overflow-hidden min-h-64">
            <img
              src="https://images.unsplash.com/photo-1526367790999-0150786686a2?w=800&q=80"
              alt="Delivery rider"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent" />
            <div className="absolute bottom-5 left-5">
              <span className="flex items-center gap-2 bg-green-500/20 text-green-400 text-xs font-medium px-3 py-1.5 rounded-full border border-green-500/30 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                Delivery available
              </span>
              <p className="text-white font-bold text-xl">Fast delivery to your door</p>
            </div>
          </div>

          {/* Right — location cards */}
          <div className="flex flex-col gap-4">
            {locations.map((loc) => (
              <LocationCard key={loc.id} location={loc} />
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}



export default Location