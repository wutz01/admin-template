type StatsCardProps = {
  item: {
    name: string;
    stat: string;
  }
}
export default function StatsCard({ item }: StatsCardProps) {
  return (
    <div className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
      <dt className="truncate text-sm font-medium text-gray-500">{item.name}</dt>
      <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">{item.stat}</dd>
    </div>
  )
}
