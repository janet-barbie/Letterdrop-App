
"use server";
import { eq } from "drizzle-orm";
import { blogCategory } from "../../../drizzle/schema";
import { db } from "../../../drizzle";

// CREATE
export async function createCategory(_: any, formData: FormData) {
  const categoryName = formData.get("categoryName") as string;
  if (!categoryName) return { error: "Name required" };

  await db.insert(blogCategory).values({ categoryName });
  return { success: true };
}

// DELETE
export async function deleteCategoryById(id: number) {
  await db.delete(blogCategory).where(eq(blogCategory.id, id));
}

// UPDATE
export async function updateCategory(id: number, formData: FormData) {
  const name = formData.get("categoryName") as string;
  if (!name) return { error: "Name required" };

  await db.update(blogCategory).set({ categoryName: name }).where(eq(blogCategory.id, id));
  return { success: true };
}
