import { useState } from "react"

const socials = [
  { label: "Instagram", icon: "📸", href: "#" },
  { label: "Facebook",  icon: "📘", href: "#" },
  { label: "Twitter",   icon: "🐦", href: "#" },
]

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return
    setSent(true)
    setForm({ name: "", email: "", message: "" })
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section id="contact" className="py-24 bg-[#111111]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Left — info */}
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

            <div className="mb-8">
              <p className="text-gray-600 text-xs uppercase tracking-widest mb-3">
                Reach us directly
              </p>
              <p className="text-white font-medium mb-1">hello@gfc.com</p>
              <p className="text-white font-medium">+252 63 778 0005</p>
            </div>

            <div>
              <p className="text-gray-600 text-xs uppercase tracking-widest mb-3">
                Follow the flock
              </p>
              <div className="flex items-center gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    className="w-9 h-9 rounded-full border border-border flex items-center justify-center hover:border-white/40 hover:bg-white/5 transition-all text-base"
                    title={s.label}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
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
                    placeholder="you@example.com"
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
                  className="mt-2 w-full py-3 bg-white text-dark font-semibold rounded-full hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
                >
                  Send message ↗
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