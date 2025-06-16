// components/EditCategoryModal.tsx
"use client";

import { useState } from "react";

type Props = {
  id: number;
  initialName: string;
  action: (formData: FormData) => void | Promise<void>; // passed server action
};

export default function EditCategoryModal({ id, initialName, action }: Props) {
  const [open, setOpen] = useState(false);
  const [categoryName, setCategoryName] = useState(initialName);

  const handleSubmit = async (formData: FormData) => {
    formData.set("id", id.toString());
    formData.set("categoryName", categoryName);
    await action(formData);
    setOpen(false);
    window.location.reload();
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="bg-yellow-500 text-white px-3 py-1 rounded"
      >
        Edit
      </button>

      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-lg w-96">
            <h2 className="text-xl font-semibold mb-4">Edit Category</h2>
            <form action={handleSubmit} className="flex flex-col gap-4">
              <input
                name="categoryName"
                value={categoryName}
                onChange={(e) => setCategoryName(e.target.value)}
                className="border px-3 py-2 rounded"
                required
              />
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="bg-gray-300 text-black px-4 py-2 rounded"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
