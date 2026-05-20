import { useState } from "react"

const links = [
  { label: "Home",     href: "#home" },
  { label: "Menu",     href: "#menu" },
  { label: "Location", href: "#location" },
  { label: "Contact",  href: "#contact" },
]

function Navbar() {
  const [open, setOpen] = useState(false)

  const handleScroll = (e, href) => {
    e.preventDefault()
    setOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <nav
      className="fixed top-0 w-full z-50 border-b border-white/10"
      style={{
        background: "linear-gradient(90deg, #2A0E00 0%, #4A1E00 60%, #7B3800 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-2">
          
    
          <img src="src/assets/images/GFC L.png" alt="GFC" />
        </div>

        {/* Desktop links — pill container matching image */}
        <ul
          className="hidden md:flex items-center gap-1 px-3 py-1.5 rounded-full"
          style={{ background: "rgba(0,0,0,0.35)" }}
        >
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/15 rounded-full transition-all"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setOpen(!open)}
        >
          <div className={`w-5 h-0.5 bg-white mb-1 transition-all ${open ? "rotate-45 translate-y-1.5" : ""}`} />
          <div className={`w-5 h-0.5 bg-white mb-1 transition-all ${open ? "opacity-0" : ""}`} />
          <div className={`w-5 h-0.5 bg-white transition-all ${open ? "-rotate-45 -translate-y-1.5" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden border-t border-white/10 px-6 py-4 flex flex-col gap-2"
          style={{ background: "#2A0E00" }}
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)}
              className="text-gray-300 hover:text-white py-2 text-sm transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}

export default Navbar