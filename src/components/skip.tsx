import { CalendarClock } from "lucide-react"
import type { SkipType } from "../types/skip"
import Toast from "./toast"

export default function Skip({ skip }: { skip: SkipType }) {
  return (
    <div className="w-full">
      <h2 className="font-francois text-4xl font-semibold mb-4">
        {skip.size} Yard Skip
      </h2>
      <div className="mb-4 flex gap-4 justify-between flex-wrap items-center">
        <p className="text-3xl font-bold text-green-400">
          £{skip.price_before_vat}
        </p>
        <p className="text-gray-300 flex gap-2">
          <CalendarClock className="w-6 h-6" />
          <div>
            Hire Period: <strong>{skip.hire_period_days} days</strong>
          </div>
        </p>
      </div>
      <div className="my-2 mb-4 flex flex-col gap-2">
        {!skip.allowed_on_road && (
          <Toast type="warning" text="Not Allowed On The Road" />
        )}
        {!skip.allows_heavy_waste && (
          <Toast type="error" text="Not Suitable For Heavy Waste" />
        )}
      </div>
      <div className="w-full aspect-[4/3] relative rounded-md overflow-hidden bg-gray-900/10">
        <img
          src={`${import.meta.env.VITE_STORAGE_URL}/${
            skip.size
          }-yarder-skip.jpg`}
          alt={`${skip.size} yard skip`}
          className="w-full h-full object-cover absolute top-0 left-0"
        />
      </div>
    </div>
  )
}
