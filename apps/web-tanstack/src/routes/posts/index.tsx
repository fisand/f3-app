import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/posts/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>
    <h2>All Posts</h2>
    <p>This is the posts index page</p>
  </div>
}
