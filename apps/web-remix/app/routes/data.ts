import { prisma } from 'db'

export async function loader() {
  const users = await prisma.user.findMany()

  return new Response(JSON.stringify({
    name: 'fisand',
    message: 'success',
    users,
  }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  })
}
