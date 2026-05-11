import { useState } from "react"
import { supabase } from "../lib/supabase"

export function useContactForm() {
  const [form, setForm]       = useState({ name: "", email: "", message: "" })
  const [sent, setSent]       = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError]     = useState(null)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return
    setLoading(true)
    setError(null)
    const { error } = await supabase
      .from("contact_messages")
      .insert([{ name: form.name, email: form.email, message: form.message }])
    if (error) {
      setError("Something went wrong. Please try again.")
    } else {
      setSent(true)
      setForm({ name: "", email: "", message: "" })
      setTimeout(() => setSent(false), 4000)
    }
    setLoading(false)
  }

  return { form, sent, loading, error, handleChange, handleSubmit }
}