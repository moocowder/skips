import type { SkipType } from "../types/skip"
import Toast from "./toast"

export default function Skip({ skip }: { skip: SkipType }) {
  return (
    <div className="w-full max-w-2xl mx-auto p-4">
      <h2 className="text-3xl font-semibold mb-4">{skip.size} Yard Skip</h2>
      <div className="mb-4 flex gap-4 justify-between flex-wrap">
        <p className="text-xl font-bold text-yellow-400">
          £{skip.price_before_vat}
        </p>
        <p className="text-gray-400">
          Hire Period:{" "}
          <span className="font-medium">{skip.hire_period_days} days</span>
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
      <img
        src={`${import.meta.env.VITE_STORAGE_URL}/${skip.size}-yarder-skip.jpg`}
        alt={`${skip.size} yard skip`}
        className="w-full h-auto rounded-md object-contain"
      />
    </div>
  )
}
