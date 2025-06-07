import { useEffect, useState } from "react"
import type { SkipType } from "./types/skip"

function App() {
  const [skips, setSkips] = useState<SkipType[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchSkips = async () => {
      try {
        const response = await fetch(import.meta.env.VITE_API_URL)
        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`)
        }
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

  if (loading) return <p>Loading skips...</p>
  if (error) return <p>Error: {error}</p>

  return (
    <div>
      <h2>Available Skips</h2>
      <ul>
        {skips.map((skip) => (
          <li key={skip.id}>
            <strong>Size:</strong> {skip.size} yards
            <strong> Hire Days:</strong> {skip.hire_period_days}
            <strong> Price :</strong> £{skip.price_before_vat}
            <strong> allowed on road :</strong>
            {skip.allowed_on_road.toString()}
            <strong> allows heavy waste :</strong>
            {skip.allows_heavy_waste.toString()}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
