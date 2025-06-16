import { db } from "../../../../db";
import { blogCategory } from "../../../../db/schema";
import { revalidatePath } from "next/cache";
import {
  createCategory,
  deleteCategoryById,
  updateCategory,
} from "../../actions/categoriesController";
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
          revalidatePath("/dashboard/categories");
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
          className="bg-primary dark:bg-slate-700 text-white px-4 py-2 rounded"
        >
        
          Add
        </button>
      </form>

      {/* Table */}
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-4 py-2">Category</th>
            <th className="border px-4 py-2" colSpan={2}>
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {categories.map((cat) => (
            <tr key={cat.id} className="border-b">
              <td className="px-4 py-2">{cat.categoryName}</td>
              <td className="px-4 py-2" colSpan={2}>
                <div className="flex gap-2">
                  {/* Edit */}
                  <EditCategoryModal
                    id={cat.id}
                    initialName={cat.categoryName}
                    action={async (formData) => {
                      "use server";
                      await updateCategory(null, formData);
                      revalidatePath("/dashboard/categories");
                    }}
                  />
                  {/* Delete */}
                  <form
                    action={async () => {
                      "use server";
                      await deleteCategoryById(cat.id);
                      revalidatePath("/dashboard/categories");
                    }}
                  >
                    <button
                      type="submit"
                      className="bg-red-600 text-white px-3 py-1 rounded"
                    >
                      Delete
                    </button>
                  </form>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
