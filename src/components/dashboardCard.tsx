
export default function DashboardCard({ title, value }: { title: string; value: string }) {
    return (
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-sm text-gray-500">{title}</h2>
        <p className="text-2xl font-bold">{value}</p>
      </div>
    );
  }
  