import { AlertTriangle } from "lucide-react"

export default function Footer() {
  return (
    <div className="mx-4 my-8">
      <div className="flex justify-end gap-4 mb-4">
        <button
          className={`font-francois px-5 py-3 text-lg font-semibold text-white rounded-lg transition-all duration-300 
         border-2 border-green-400 hover:bg-cyan-400 hover:border-cyan-400 hover:text-black cursor-pointer
         flex gap-2 items-center justify-between
         `}
        >
          BACK
        </button>
        <button
          className={`font-francois px-5 py-3 text-lg font-semibold text-black rounded-md transition-all duration-300 
         bg-green-400 hover:bg-cyan-400 cursor-pointer
         flex gap-2 items-center justify-between
         `}
        >
          CONTINUE
        </button>
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
