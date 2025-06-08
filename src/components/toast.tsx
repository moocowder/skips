type Props = {
  type: "error" | "warning"
  text: string
}

const typeStyles = {
  error: "bg-red-500/10 text-red-700",
  warning: "bg-yellow-500/10 text-yellow-700",
}

export default function Toast({ type, text }: Props) {
  return (
    <div
      className={`rounded-xl px-4 py-3 font-medium ${typeStyles[type]}`}
      role="alert"
    >
      {text}
    </div>
  )
}
