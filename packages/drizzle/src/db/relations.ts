import { relations } from 'drizzle-orm/relations'

import { post, user } from './schema'

export const postRelations = relations(post, ({ one }) => ({
  user: one(user, {
    fields: [post.authorId],
    references: [user.id],
  }),
}))

export const userRelations = relations(user, ({ many }) => ({
  posts: many(post),
}))
