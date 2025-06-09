import {
  MapPin,
  Recycle,
  Package,
  ShieldCheck,
  Calendar,
  CreditCard,
} from "lucide-react"

const steps = [
  { label: "Postcode", icon: MapPin },
  { label: "Waste Type", icon: Recycle },
  { label: "Select Skip", icon: Package },
  { label: "Permit Check", icon: ShieldCheck },
  { label: "Choose Date", icon: Calendar },
  { label: "Payment", icon: CreditCard },
]

const currentStep = 2

export default function Stepper() {
  return (
    <div className="w-full overflow-x-auto">
      <div className="flex justify-center items-center gap-6 min-w-[700px] px-4 py-4">
        {steps.map((step, index) => {
          const Icon = step.icon
          const isCompleted = index < currentStep
          const isCurrent = index === currentStep

          const colorClass = isCompleted
            ? "text-green-400"
            : isCurrent
            ? "text-cyan-400"
            : "text-white/40"

          return (
            <div key={index} className="flex items-center gap-2">
              <Icon className={`w-5 h-5 ${colorClass}`} />
              <span className={`text-sm font-medium ${colorClass}`}>
                {step.label}
              </span>
              {index < steps.length - 1 && (
                <div className="w-6 h-0.5 bg-white/20 mx-3 hidden sm:block"></div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
