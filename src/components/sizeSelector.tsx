interface Props {
  sizes: number[]
  selectedSize: number
  onSelect: (size: number) => void
}

export default function SizeSelector({ sizes, selectedSize, onSelect }: Props) {
  return (
    <div className="w-full max-w-xs mx-auto mb-6">
      <label
        htmlFor="size-selector"
        className="block text-center mb-2 font-medium text-gray-700"
      >
        Select skip size
      </label>
      <select
        id="size-selector"
        onChange={(e) => onSelect(Number(e.target.value))}
        value={selectedSize ?? ""}
        className="block w-full px-4 py-2 text-gray-600 bg-black rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
      >
        {sizes.map((s) => (
          <option key={s} value={s}>
            {s} yards
          </option>
        ))}
      </select>
    </div>
  )
}
