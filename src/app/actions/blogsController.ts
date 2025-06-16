"use server";

import { eq, desc } from "drizzle-orm";
import { blogs } from "../../../db/schema";
import { db } from "../../../db";

export async function createBlog(formData: FormData) {
  const title = formData.get("title") as string;
  const content = formData.get("content") as string;
  const categoryId = formData.get("categoryId")
  
  if (!title || !content ) {
    throw new Error("Title, content, and userId are required");
  }

  await db.insert(blogs).values({ 
    title, 
    content, 
    // userId: (userId) ,
    categoryId: categoryId ? Number(categoryId) : null,
  });
}

export async function getBlogs() {
  return db.select().from(blogs).orderBy(desc(blogs.createdAt));
}

export async function getBlogById(id: number) {
  const result = await db.select().from(blogs).where(eq(blogs.id, id));
  return result[0] || null;
}

export async function updateBlog(id: number, formData: FormData) {
  const title = formData.get("title") as string;
  const content = formData.get("content") as string;

  if (!title || !content) {
    throw new Error("Title and content are required");
  }

  await db.update(blogs).set({ 
    title, 
    content,
    updatedAt: new Date()
  }).where(eq(blogs.id, id));
}

export async function deleteBlog(id: number) {
  await db.delete(blogs).where(eq(blogs.id, id));
}