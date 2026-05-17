import { useState } from "react"
import MenuCard from "../components/MenuCard"
import menuItems from "../data/menuItems"

const categories = [
  { id: "all",      label: "All"      },
  { id: "chicken",  label: "Chicken"  },
  { id: "sandwich", label: "Sandwich" },
  { id: "pizza",    label: "Pizza"    },
  { id: "drinks",   label: "Drinks"   },
]

function Menu() {
  const [active, setActive] = useState("chicken")

  const filtered =
    active === "all"
      ? menuItems
      : menuItems.filter((item) => item.category === active)

  return (
    <section
      id="menu"
      className="py-24"
      style={{ background: "linear-gradient(160deg, #6B0000 0%, #8B0000 50%, #B22222 100%)" }}
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <div>
            <p className="text-gold text-sm font-medium uppercase tracking-widest mb-3">
              — Our Menu
            </p>
            <h2 className="font-display text-5xl font-bold text-white">
              Crafted to{" "}
              <span className="text-gold italic">crave.</span>
            </h2>
          </div>
          <p className="text-white/50 text-sm leading-relaxed max-w-xs">
            From crispy chicken to fresh pizza — every item is made
            fresh with the finest ingredients.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex items-center gap-2 mb-8 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                active === cat.id
                  ? "bg-gold text-dark"
                  : "border border-white/20 text-white/70 hover:border-white/50 hover:text-white"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        {filtered.length === 0 ? (
          <p className="text-white/40 text-sm text-center py-16">No items found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((item) => (
              <MenuCard key={item.id} item={item} />
            ))}
          </div>
        )}

      </div>
    </section>
  )
}

export default Menu