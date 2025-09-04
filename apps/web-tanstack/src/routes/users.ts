import { createServerFileRoute } from '@tanstack/react-start/server'
import { db, user } from 'drizzle'

export const ServerRoute = createServerFileRoute('/users').methods({
  GET: async () => {
    const users = await db.select().from(user)
    return new Response(JSON.stringify(users), {
      headers: {
        'Content-Type': 'application/json',
      },
    })
  },
})
