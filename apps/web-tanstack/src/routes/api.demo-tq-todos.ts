import { createServerFileRoute } from '@tanstack/react-start/server'

const todos = [
  {
    id: 1,
    name: 'Buy groceries',
  },
  {
    id: 2,
    name: 'Buy mobile phone',
  },
  {
    id: 3,
    name: 'Buy laptop',
  },
]

export const ServerRoute = createServerFileRoute('/api/demo-tq-todos').methods({
  GET: () => {
    return Response.json(todos)
  },
  POST: async ({ request }) => {
    const name = await request.json()
    const todo = {
      id: todos.length + 1,
      name,
    }
    todos.push(todo)
    return Response.json(todo)
  },
})
