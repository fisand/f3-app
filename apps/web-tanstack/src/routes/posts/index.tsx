import { useQuery } from '@tanstack/react-query'
import { createFileRoute } from '@tanstack/react-router'

import { orpc } from '../../orpc'

export const Route = createFileRoute('/posts/')({
  component: RouteComponent,
  loader: async () => {
    try {
      const data = await orpc.pong.call()
      console.info('orpc.pong loader', data)
      return { data }
    }
    catch {
      return { data: null }
    }
  },
})

function RouteComponent() {
  const { data } = useQuery(orpc.pong.queryOptions())

  console.info('orpc.pong', Route.useLoaderData(), data)

  return (
    <div>
      <h2>All Posts</h2>
      <p>This is the posts index page</p>
    </div>
  )
}
