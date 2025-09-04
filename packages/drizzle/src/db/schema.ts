import { int, numeric, sqliteTable, text, uniqueIndex } from 'drizzle-orm/sqlite-core'

export const user = sqliteTable('User', {
  id: int().primaryKey({ autoIncrement: true }).notNull(),
  email: text().notNull(),
  name: text(),
}, table => [
  uniqueIndex('User_email_key').on(table.email),
])

export const post = sqliteTable('Post', {
  id: int().primaryKey({ autoIncrement: true }).notNull(),
  title: text().notNull(),
  content: text(),
  published: numeric().notNull(),
  authorId: int().notNull().references(() => user.id, { onDelete: 'restrict', onUpdate: 'cascade' }),
})
