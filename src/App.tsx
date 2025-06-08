import { useEffect, useState } from "react"
import type { SkipType } from "./types/skip"
import Skip from "./components/skip"
import SizeSelector from "./components/sizeSelector"
import Footer from "./components/footer"
import { motion, AnimatePresence } from "framer-motion"

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

  const onSelect = (size: number) => {
    const selectedSkip = skips.find((skip) => skip.size === size)
    setSelectedSkip(selectedSkip ?? null)
  }

  if (loading) return <p>Loading skips...</p>
  if (error) return <p>Error: {error}</p>
  if (!selectedSkip) return <p> no selected skips</p>

  return (
    <div className="m-4">
      <h3 className="text-3xl font-medium text-center">
        Choose Your Skip Size
      </h3>
      <SizeSelector
        sizes={skips.map((skip) => skip.size)}
        selectedSize={selectedSkip?.size}
        onSelect={onSelect}
      />

      <AnimatePresence mode="wait">
        <motion.div
          key={selectedSkip.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
        >
          <Skip skip={selectedSkip} />
        </motion.div>
      </AnimatePresence>

      <Footer />
    </div>
  )
}

export default App
