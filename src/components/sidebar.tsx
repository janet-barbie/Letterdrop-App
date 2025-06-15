'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Sidebar = () => {
  const pathname = usePathname()
  const isActive = (path: string) => pathname === path

  return (
    <aside className="w-64 bg-primary text-white h-screen p-6 sticky top-0">
      <h1 className="text-2xl font-bold mb-10">Admin Panel</h1>
      <nav className="flex flex-col space-y-4">
        <Link
          href="/"
          className={`px-3 py-2 rounded ${isActive('/') ? 'bg-white text-primary' : 'hover:bg-white hover:text-primary'}`}
        >
          Dashboard
        </Link>
        <Link
          href="/posts"
          className={`px-3 py-2 rounded ${isActive('/posts') ? 'bg-white text-primary' : 'hover:bg-white hover:text-primary'}`}
        >
          Posts
        </Link>
        <Link
          href="/categories"
          className={`px-3 py-2 rounded ${isActive('/categories') ? 'bg-white text-primary' : 'hover:bg-white hover:text-primary'}`}
        >
          Categories
        </Link>
      </nav>
    </aside>
  )
}

export default Sidebar
