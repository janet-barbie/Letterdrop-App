import Link from "next/link";
import { deleteBlog, getBlogs } from "../../actions/blogsController";

export default async function BlogsPage() {
  const allBlogs = await getBlogs();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">All Blogs</h1>

      <Link
        href="/dashboard/blogs/create"
        className="inline-block bg-slate-700 text-white px-4 py-2 rounded hover:bg-slate-700 mb-4"
      >
        New Blog
      </Link>

      {allBlogs.map((blog) => (
        <form
          key={blog.id}
          action={async () => {
            "use server";
            await deleteBlog(blog.id);
          }}
          className="mb-4 border p-4 rounded shadow"
        >
          <h2 className="font-bold text-lg mb-1">{blog.title}</h2>
          <p className="mb-2">{blog.content}</p>
          <div className="flex gap-2">
            <Link
              href={`/dashboard/blogs/edit/${blog.id}`}
              className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
            >
              Edit
            </Link>
            <button
              type="submit"
              className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
            >
              Delete
            </button>
          </div>
        </form>
      ))}
    </div>
  );
}
