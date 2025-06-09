interface Props {
  sizes: number[]
  selectedSize: number
  onSelect: (size: number) => void
}

export default function SizeSelector({ sizes, selectedSize, onSelect }: Props) {
  return (
    <div className="w-full max-w-xs mx-auto mb-16">
      <label
        htmlFor="size-selector"
        className="block text-center mb-2 text-sm font-medium text-white tracking-wide"
      >
        Select Skip Size
      </label>

      <div className="relative">
        <select
          id="size-selector"
          onChange={(e) => onSelect(Number(e.target.value))}
          value={selectedSize ?? ""}
          className="cursor-pointer block w-full appearance-none bg-neutral-950 text-green-400 text-sm font-semibold px-4 py-3 pr-10 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all"
        >
          {sizes.map((s) => (
            <option key={s} value={s}>
              {s} yards
            </option>
          ))}
        </select>

        {/* Custom down arrow */}
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4">
          <svg
            className="h-4 w-4 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 12a1 1 0 01-.7-.29l-4-4a1 1 0 111.4-1.42L10 9.58l3.3-3.29a1 1 0 011.4 1.42l-4 4A1 1 0 0110 12z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
  )
}
