import { initTRPC } from '@trpc/server'
import { prisma } from 'db'
import * as v from 'valibot'

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
  getUserById: t.procedure.input(input => v.parse(v.string(), input)).query((opts) => {
    return users[opts.input] // input type is string
  }),
  createUser: t.procedure
    .input(input => v.parse(v.object({
      name: v.pipe(v.string(), v.minLength(3)),
      bio: v.pipe(v.string(), v.maxLength(142)),
    }), input))
    .mutation((opts) => {
      const id = Date.now().toString()
      const user: User = { id, ...opts.input }
      users[user.id] = user
      return user
    }),
})
// export type definition of API
export type AppRouter = typeof appRouter
