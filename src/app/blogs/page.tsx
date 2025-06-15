
import Link from "next/link";
import { deleteBlog, getBlogs } from "../actions/blogsController";

export default async function BlogsPage() {
  const allBlogs = await getBlogs();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">All Blogs</h1>
      <Link href="/blogs/create" className="btn btn-primary mb-4">New Blog</Link>

      {allBlogs.map((blog) => (
        <form
          key={blog.id}
          action={() => deleteBlog(blog.id)}
          className="mb-4 border p-4"
        >
          <h2 className="font-bold">{blog.title}</h2>
          <p>{blog.content}</p>
          <button type="submit" className="btn btn-error mt-2">Delete</button>
        </form>
      ))}
    </div>
  );
}
