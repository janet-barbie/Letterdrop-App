import { pgTable, varchar, serial, text, timestamp, integer ,boolean} from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";



export const user = pgTable("user", {
          id: text('id').primaryKey(),
          name: text('name').notNull(),
 email: text('email').notNull().unique(),
 emailVerified: boolean('email_verified').$defaultFn(() => false).notNull(),
 image: text('image'),
 createdAt: timestamp('created_at').$defaultFn(() => /* @__PURE__ */ new Date()).notNull(),
 updatedAt: timestamp('updated_at').$defaultFn(() => /* @__PURE__ */ new Date()).notNull()
        });

export const session = pgTable("session", {
          id: text('id').primaryKey(),
          expiresAt: timestamp('expires_at').notNull(),
 token: text('token').notNull().unique(),
 createdAt: timestamp('created_at').notNull(),
 updatedAt: timestamp('updated_at').notNull(),
 ipAddress: text('ip_address'),
 userAgent: text('user_agent'),
 userId: text('user_id').notNull().references(()=> user.id, { onDelete: 'cascade' })
        });

export const account = pgTable("account", {
          id: text('id').primaryKey(),
          accountId: text('account_id').notNull(),
 providerId: text('provider_id').notNull(),
 userId: text('user_id').notNull().references(()=> user.id, { onDelete: 'cascade' }),
 accessToken: text('access_token'),
 refreshToken: text('refresh_token'),
 idToken: text('id_token'),
 accessTokenExpiresAt: timestamp('access_token_expires_at'),
 refreshTokenExpiresAt: timestamp('refresh_token_expires_at'),
 scope: text('scope'),
 password: text('password'),
 createdAt: timestamp('created_at').notNull(),
 updatedAt: timestamp('updated_at').notNull()
        });

export const verification = pgTable("verification", {
          id: text('id').primaryKey(),
          identifier: text('identifier').notNull(),
 value: text('value').notNull(),
 expiresAt: timestamp('expires_at').notNull(),
 createdAt: timestamp('created_at').$defaultFn(() => /* @__PURE__ */ new Date()),
 updatedAt: timestamp('updated_at').$defaultFn(() => /* @__PURE__ */ new Date())
        });

export const blogCategory = pgTable("blog_category", {
  id: serial("id").primaryKey(),
  categoryName: varchar("category_name", { length: 255 }).notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow().$onUpdate(() => new Date()),
});

export const blogs = pgTable("blogs", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 500 }).notNull(),
  content: text("content").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow().$onUpdate(() => new Date()),
  // userId: text("user_id").notNull().references(() => user.id, { onDelete: "cascade" }),
  categoryId: integer("category_id").references(() => blogCategory.id, { onDelete: "set null" }),
});

export const schema = {user,session,account,verification}
// // Relations
export const usersRelations = relations(user, ({ many }) => ({
  blogs: many(blogs),
}));

// Blog Category ↔ Blogs
export const blogCategoryRelations = relations(blogCategory, ({ many }) => ({
  blogs: many(blogs),
}));

// Blog ↔ User & Category
export const blogsRelations = relations(blogs, ({ one }) => ({
  // user: one(user, {
  //   fields: [blogs.userId],
  //   references: [user.id],
  // }),
  category: one(blogCategory, {
    fields: [blogs.categoryId],
    references: [blogCategory.id],
  }),
}));