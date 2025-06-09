import { TriangleAlert } from "lucide-react"

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
      className={`rounded-xl px-4 py-3 font-medium ${typeStyles[type]} flex gap-2 items-center`}
      role="alert"
    >
      <TriangleAlert className="w-6 h-6" />
      {text}
    </div>
  )
}
