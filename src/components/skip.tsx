import type { SkipType } from "../types/skip"

export default function Skip({ skip }: { skip: SkipType }) {
  return (
    <div>
      <strong>Size:</strong> {skip.size} yards
      <strong> Hire Days:</strong> {skip.hire_period_days}
      <strong> Price :</strong> £{skip.price_before_vat}
      <strong> allowed on road :</strong>
      {skip.allowed_on_road.toString()}
      <strong> allows heavy waste :</strong>
      {skip.allows_heavy_waste.toString()}
    </div>
  )
}
