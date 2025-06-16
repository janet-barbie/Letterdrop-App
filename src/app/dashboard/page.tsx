import DashboardCard from "@/components/dashboardCard";


export default function DashboardHome() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <DashboardCard title="Total Blogs" value="24" />
      <DashboardCard title="Users" value="102" />
      <DashboardCard title="Categories" value="8" />
    </div>
  );
}
