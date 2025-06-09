import { useEffect, useState } from "react"
import type { SkipType } from "../types/skip"

export function useSkips() {
  const [skips, setSkips] = useState<SkipType[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchSkips = async () => {
      try {
        const response = await fetch(import.meta.env.VITE_API_URL)
        if (!response.ok) throw new Error(`HTTP error: ${response.status}`)
        const data: SkipType[] = await response.json()
        setSkips(data)
      } catch (err: any) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchSkips()
  }, [])

  return { skips, loading, error }
}
