import { useEffect, useState } from "react"
import { supabase } from "../lib/supabase"

export function useMenu(category = "all") {
  const [items, setItems]     = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError]     = useState(null)

  useEffect(() => {
    const fetchItems = async () => {
      setLoading(true)
      let query = supabase.from("menu_items").select("*")
      if (category !== "all") {
        query = query.eq("category", category)
      }
      const { data, error } = await query.order("id")
      if (error) setError(error.message)
      else setItems(data)
      setLoading(false)
    }
    fetchItems()
  }, [category])

  return { items, loading, error }
}