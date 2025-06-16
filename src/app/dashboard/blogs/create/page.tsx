

import { createBlog } from "@/app/actions/blogsController";
import { db } from "@/db";
import { blogCategory } from "@/db/schema";
import { revalidatePath } from "next/cache";

export default async function CreateBlogPage() {
  const categories = await db.select().from(blogCategory); // Fetch categories

  async function handleCreateBlog(formData: FormData) {
    "use server";
    await createBlog(formData);
    revalidatePath("/dashboard/blogs");
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Create Blog Post</h1>

      <form
        action={handleCreateBlog}
        className="flex flex-col gap-4 bg-white p-6 rounded shadow-md"
      >
        <input
          type="text"
          name="title"
          placeholder="Title"
          required
          className="border px-3 py-2 rounded"
        />

        <textarea
          name="content"
          placeholder="Write your blog content here..."
          required
          rows={6}
          className="border px-3 py-2 rounded resize-y"
        />

        {/* Category dropdown */}
        <select
          name="categoryId"
          required
          className="border px-3 py-2 rounded"
          defaultValue=""
        >
          <option value="" disabled>
            Select a category
          </option>
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
          Publish
        </button>
      </form>
    </div>
  );
}
