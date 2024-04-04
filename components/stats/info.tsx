import { TRANSACTION_TYPES } from "@/lib/types";
import StatsCard from "./card";


export default function InfoStat() {
  return (
    <div className="mt-3">
      <h3 className="text-base font-semibold leading-6 text-gray-900">Last 30 days</h3>
      <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
        {TRANSACTION_TYPES.map((item) => (
          <StatsCard item={item} key={item.name} />
        ))}
      </dl>
    </div>
  )
}
