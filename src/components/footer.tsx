export default function Footer() {
  return (
    <div className="flex justify-end gap-4 mt-4">
      <button
        className={`px-6 py-3 text-lg font-semibold text-white rounded-xl transition-all duration-300 
         border border-purple-600 hover:bg-purple-600 cursor-pointer`}
      >
        Back
      </button>
      <button
        className={`px-6 py-3 text-lg font-semibold text-white rounded-xl transition-all duration-300 
         bg-purple-600 hover:bg-purple-700 cursor-pointer`}
      >
        Continue
      </button>
    </div>
  )
}
