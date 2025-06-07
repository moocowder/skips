interface Props {
  sizes: number[]
  selectedSize: number
  onSelect: (size: number) => void
}

export default function SizeSelector({ sizes, selectedSize, onSelect }: Props) {
  return (
    <div>
      <select
        onChange={(e) => onSelect(Number(e.target.value))}
        value={selectedSize ?? ""}
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
