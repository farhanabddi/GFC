const stats = [
  { value: "70+",  label: "Years of taste" },
  { value: "25K+", label: "Stores worldwide" },
  { value: "4.9★", label: "Customer rating" },
]

function Hero() {
  const handleScroll = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-dark overflow-hidden"
    >
      {/* Background food image overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=1400&q=80')",
        }}
      />
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/90 to-dark/40" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-16 w-full">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12">

          {/* Left — headline */}
          <div className="max-w-xl">
            {/* Open badge */}
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-green-400 text-sm">Open now · Delivery in 25 min</span>
            </div>

            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              Enjoy Your<br />
              Delicious{" "}
              <span className="text-gold italic">Food.</span>
            </h1>

            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Eleven secret herbs and spices. Hand-breaded fresh every day.<br />
              The chicken legend, reimagined for the modern table.
            </p>

            <div className="flex items-center gap-4 flex-wrap">
              <button
                onClick={() => handleScroll("#menu")}
                className="px-7 py-3 bg-white text-dark font-semibold rounded-full hover:bg-gray-100 transition-colors"
              >
                Order Now ↗
              </button>
              <button
                onClick={() => handleScroll("#menu")}
                className="px-7 py-3 border border-white/30 text-white rounded-full hover:bg-white/10 transition-colors"
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
          <div className="w-full lg:w-72 bg-card border border-border rounded-2xl p-5 flex-shrink-0">
            <p className="text-gray-500 text-xs uppercase tracking-widest mb-4">Today's Special</p>
            <div className="text-5xl mb-4">🍗</div>
            <h3 className="text-white font-bold text-xl mb-1">Bucket of 8</h3>
            <p className="text-gray-500 text-sm mb-4">Original recipe pieces with two sides</p>
            <div className="flex items-center justify-between">
              <div>
                <span className="text-gray-500 line-through text-sm mr-2">$29.99</span>
                <span className="text-gold font-bold text-2xl">$24.99</span>
              </div>
              <button
                onClick={() => handleScroll("#menu")}
                className="w-10 h-10 rounded-full bg-gold flex items-center justify-center hover:bg-yellow-400 transition-colors"
              >
                <span className="text-dark font-bold text-lg">→</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero