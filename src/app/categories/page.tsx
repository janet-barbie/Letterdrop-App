import { db } from "../../../drizzle";
import { blogCategory } from "../../../drizzle/schema";
import { revalidatePath } from "next/cache";
import {
  createCategory,
  deleteCategoryById,
  updateCategory,
} from "../actions/categoriesController";
import EditCategoryModal from "@/components/editCategory";

export default async function CategoryPage() {
  const categories = await db.select().from(blogCategory);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Categories</h1>

      <form
        action={async (formData) => {
          "use server";
          await createCategory(null, formData);
          revalidatePath("/dashboard/category");
        }}
        className="flex gap-2 mb-6"
      >
        <input
          name="categoryName"
          placeholder="New category"
          className="border px-3 py-2 rounded w-full"
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Add
        </button>
      </form>

      {/* Table */}
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-4 py-2">#</th>
            <th className="border px-4 py-2">Category</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((cat) => (
            <tr key={cat.id} className="border-b">
              <td className="px-4 py-2">{cat.id}</td>

              <td className="px-4 py-2">
                <EditCategoryModal id={cat.id} initialName={cat.categoryName} />
              </td>

              {/* Delete button */}
              <td className="px-4 py-2">
                <form
                  action={async () => {
                    "use server";
                    await deleteCategoryById(cat.id);
                    revalidatePath("/dashboard/category");
                  }}
                >
                  <button
                    type="submit"
                    className="bg-red-600 text-white px-3 py-1 rounded"
                  >
                    Delete
                  </button>
                </form>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
