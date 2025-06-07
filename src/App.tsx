import { useEffect, useState } from "react"
import type { SkipType } from "./types/skip"
import Skip from "./components/skip"

function App() {
  const [skips, setSkips] = useState<SkipType[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  const [selectedSkip, setSelectedSkip] = useState<SkipType | null>(null)

  useEffect(() => {
    const fetchSkips = async () => {
      try {
        const response = await fetch(import.meta.env.VITE_API_URL)
        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`)
        }
        const data: SkipType[] = await response.json()
        setSkips(data)
        setSelectedSkip(data[0] ?? null)
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
      <h3>select skip size :</h3>
      {selectedSkip && <Skip skip={selectedSkip} />}
    </div>
  )
}

export default App
