
"use server";
import { eq } from "drizzle-orm";
import { blogCategory } from "../../../db/schema";
import { db } from "../../../db";

// CREATE
export async function createCategory(prevState:any,formData: FormData) {
  const categoryName = formData.get("categoryName") as string;
  console.log(categoryName)
  if (!categoryName) return { error: "Name required" };

  await db.insert(blogCategory).values({ categoryName });
   return { success: true };
}

// DELETE
export async function deleteCategoryById(id: number) {
  await db.delete(blogCategory).where(eq(blogCategory.id, id));
}


export async function updateCategory(prevState:any,formData: FormData) {
  const id = formData.get("id");
  const categoryName = formData.get("categoryName");

  if (!id || !categoryName) {
    return { error: "Missing data" };
  }

  await db.update(blogCategory).set({
    categoryName: categoryName.toString(),
  }).where(eq(blogCategory.id, Number(id)));

   return { success: true };
}
