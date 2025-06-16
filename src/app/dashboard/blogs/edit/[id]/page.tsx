
// @ts-nocheck
import { getBlogById, updateBlog } from "@/app/actions/blogsController";
import { db } from "@/db";
import { blogCategory } from "@/db/schema";
import { revalidatePath } from "next/cache";
import { notFound } from "next/navigation";


interface EditBlogPageProps {
  params: {
    id: string;
  };
}
export default async function EditBlogPage({ params }: EditBlogPageProps){
  const blogId = parseInt(params.id);
  const blog = await getBlogById(blogId);
  const categories = await db.select().from(blogCategory);

  if (!blog) return notFound();

  async function handleUpdateBlog(formData: FormData) {
    "use server";
    await updateBlog(blogId, formData);
    revalidatePath("/dashboard/blogs");
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Edit Blog Post</h1>

      <form
        action={handleUpdateBlog}
        className="flex flex-col gap-4 bg-white p-6 rounded shadow-md"
      >
        <input
          type="text"
          name="title"
          defaultValue={blog.title}
          required
          className="border px-3 py-2 rounded"
        />

        <textarea
          name="content"
          defaultValue={blog.content}
          required
          rows={6}
          className="border px-3 py-2 rounded resize-y"
        />

        <select
          name="categoryId"
          defaultValue={blog.categoryId ?? ""}
          className="border px-3 py-2 rounded"
        >
          <option value="">Select a category</option>
          {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.categoryName}
            </option>
          ))}
        </select>

        <button
          type="submit"
          className="bg-gradient-to-r from-slate-700 to-slate-900 text-white font-semibold px-6 py-2 rounded-xl shadow-md hover:from-slate-800 hover:to-slate-950 transition-all duration-200 ease-in-out"
        >
          Update
        </button>
      </form>
    </div>
  );
}
