import { useState } from "react"

// ── Edit your real social links here ─────────────────────────
const socials = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/share/1BBGL1ToR6/?mibextid=wwXIfr",
    bg: "#1877F2",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.268h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/252637780005",
    bg: "#25D366",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.089.537 4.049 1.475 5.757L0 24l6.418-1.452A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.787 9.787 0 01-5.042-1.396l-.361-.214-3.743.847.878-3.64-.235-.374A9.786 9.786 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182c5.43 0 9.818 4.388 9.818 9.818 0 5.43-4.388 9.818-9.818 9.818z"/>
      </svg>
    ),
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@goljannofriedchicken",
    bg: "#010101",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.31 6.31 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.79 1.53V6.77a4.85 4.85 0 01-1.02-.08z"/>
      </svg>
    ),
  },
]

function Contact() {
  const [form, setForm]   = useState({ name: "", email: "", message: "" })
  const [sent, setSent]   = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return
    setLoading(true)
    setTimeout(() => {
      setSent(true)
      setLoading(false)
      setForm({ name: "", email: "", message: "" })
      setTimeout(() => setSent(false), 4000)
    }, 800)
  }

  return (
    <section id="contact" className="py-24 bg-[#111111]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Left */}
          <div>
            <p className="text-gold text-sm font-medium uppercase tracking-widest mb-3">
              — Get in touch
            </p>
            <h2 className="font-display text-5xl font-bold text-white mb-6">
              Let's <span className="text-gold italic">talk.</span>
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-8">
              Questions, feedback, or just want to share your love for
              our chicken? We'd love to hear from you.
            </p>

            {/* Contact details */}
            <div className="mb-8">
              <p className="text-gray-600 text-xs uppercase tracking-widest mb-3">
                Reach us directly
              </p>
              <p className="text-white font-medium mb-1">goljannofriedchicken@gmail.com</p>
              <p className="text-white font-medium">+252 63 778 0005</p>
            </div>

            {/* Social icons */}
            <div>
              <p className="text-gray-600 text-xs uppercase tracking-widest mb-4">
                Follow us on social media
              </p>
              <div className="flex items-center gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={s.label}
                    className="w-11 h-11 rounded-full flex items-center justify-center text-white transition-all hover:scale-110 hover:opacity-90"
                    style={{ background: s.bg }}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
              <p className="text-gray-600 text-xs mt-3">
                Facebook · WhatsApp · TikTok
              </p>
            </div>
          </div>

          {/* Right — form */}
          <div className="bg-card border border-border rounded-2xl p-8">
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full gap-4 py-12">
                <span className="text-4xl">✅</span>
                <p className="text-white font-semibold text-lg">Message sent!</p>
                <p className="text-gray-500 text-sm">We'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <label className="text-gray-500 text-xs uppercase tracking-widest block mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full bg-transparent border-b border-border text-white text-sm py-2 placeholder-gray-600 focus:outline-none focus:border-white/40 transition-colors"
                  />
                </div>
                <div>
                  <label className="text-gray-500 text-xs uppercase tracking-widest block mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Your email"
                    className="w-full bg-transparent border-b border-border text-white text-sm py-2 placeholder-gray-600 focus:outline-none focus:border-white/40 transition-colors"
                  />
                </div>
                <div>
                  <label className="text-gray-500 text-xs uppercase tracking-widest block mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="What's on your mind?"
                    rows={4}
                    className="w-full bg-transparent border-b border-border text-white text-sm py-2 placeholder-gray-600 focus:outline-none focus:border-white/40 transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="mt-2 w-full py-3 bg-white text-dark font-semibold rounded-full hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {loading ? "Sending..." : "Send message ↗"}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  )
}

export default Contact