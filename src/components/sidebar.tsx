
import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-900 text-white p-4">
      <h1 className="text-xl font-bold mb-6">Dashboard</h1>
      <nav className="flex flex-col gap-2">
        <Link href="/dashboard">Overview</Link>
        <Link href="/dashboard/blogs">Blogs</Link>
        <Link href="/dashboard/categories">Categories</Link>
      </nav>
    </aside>
  );
}
