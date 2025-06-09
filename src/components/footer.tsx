import { AlertTriangle } from "lucide-react"
import { Bouton } from "./bouton"

export default function Footer() {
  return (
    <div className="mx-4 my-8">
      <div className="flex justify-end gap-4 mb-4">
        <Bouton className="flex-1 sm:flex-initial" variant="secondary">
          BACK
        </Bouton>
        <Bouton className="flex-1 sm:flex-initial">CONTINUE</Bouton>
      </div>
      <div className="text-gray-600 text-sm text-center">
        <AlertTriangle className="inline w-4 h-4 mr-1 align-text-top" />
        Imagery and information shown throughout this website may not reflect
        the exact shape or size specification, colours may vary, options and/or
        accessories may be featured at additional cost.
      </div>
    </div>
  )
}
