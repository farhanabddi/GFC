const stats = [
  { value: "★★★★★", label: "5 Star rating"    },
  
]

function Hero() {
  const handleScroll = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0d0000 0%, #3B0000 35%, #8B1A00 65%, #1a0d00 100%)",
      }}
    >
      {/* Background food image overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=1400&q=80')",
        }}
      />

      {/* Dark gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, #0d0000 0%, rgba(13,0,0,0.85) 50%, rgba(26,13,0,0.2) 100%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-16 w-full">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12">

          {/* Left — headline */}
          <div className="max-w-xl">
            {/* Open badge */}
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-green-400 text-sm">Open now · Delivery </span>
            </div>

            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              Enjoy Your<br />
              Delicious{" "}
              <span className="text-gold italic">Food.</span>
            </h1>

            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Crispy, golden and made fresh for every order.<br />
              GFC — where great taste meets real quality.
            </p>

            <div className="flex items-center gap-4 flex-wrap">
              <button
                onClick={() => handleScroll("#menu")}
                className="px-7 py-3 bg-red-600 text-white font-semibold rounded-full hover:bg-black transition-colors"
              >
                Order Now ↗
              </button>
              <button
                onClick={() => handleScroll("#menu")}
                className="px-7 py-3 border border-yellow-400 text-white rounded-full hover:bg-black transition-colors"
              >
                View Menu
              </button>
            </div>

            {/* Stats row */}
            <div className="flex items-center gap-8 mt-12 pt-8 border-t border-border">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="text-white font-bold text-xl">{s.value}</div>
                  <div className="text-gray-500 text-xs mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Today's Special card */}
          <div
            className="w-full lg:w-72 rounded-2xl p-5 flex-shrink-0"
            style={{
              background: "rgba(10, 3, 0, 0.80)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <p className="text-gray-500 text-xs uppercase tracking-widest mb-4"></p>
            <div className="text-5xl mb-4"></div>
            <h3 className="text-white font-bold text-xl mb-1"></h3>
            <p className="text-gray-500 text-sm mb-4"></p>
            <div className="flex items-center justify-between">
              <button
                onClick={() => handleScroll("#menu")}
                className="w-1 h-1 rounded-full bg-black flex items-center justify-center hover:bg-yellow-400 transition-colors"
              >
                <span className="text-dark font-bold text-lg"></span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero