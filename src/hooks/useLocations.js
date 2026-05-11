import { useEffect, useState } from "react"
import { supabase } from "../lib/supabase"

export function useLocations() {
  const [locations, setLocations] = useState([])
  const [loading, setLoading]     = useState(true)
  const [error, setError]         = useState(null)

  useEffect(() => {
    const fetchLocations = async () => {
      const { data, error } = await supabase
        .from("locations")
        .select("*")
        .order("id")
      if (error) setError(error.message)
      else setLocations(data)
      setLoading(false)
    }
    fetchLocations()
  }, [])

  return { locations, loading, error }
}