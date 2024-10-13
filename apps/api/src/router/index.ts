import { initTRPC } from '@trpc/server'
import { z } from 'zod'

import { prisma } from '../utils/prisma'

type User = {
  id: string
  name: string
  bio?: string
}
const users: Record<string, User> = {}
export const t = initTRPC.create()
export const appRouter = t.router({
  hello: t.procedure.query(() => {
    return 'Hello, world!'
  }),
  getUsers: t.procedure.query(async () => {
    return await prisma.user.findMany()
  }),
  getUserById: t.procedure.input(z.string()).query((opts) => {
    return users[opts.input] // input type is string
  }),
  createUser: t.procedure
    .input(
      z.object({
        name: z.string().min(3),
        bio: z.string().max(142).optional(),
      }),
    )
    .mutation((opts) => {
      const id = Date.now().toString()
      const user: User = { id, ...opts.input }
      users[user.id] = user
      return user
    }),
})
// export type definition of API
export type AppRouter = typeof appRouter
