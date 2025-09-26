import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/posts/$postId')({
  component: RouteComponent,
})

function RouteComponent() {
  const { postId } = Route.useParams()
  return (
    <div>
      <h2>Post Details</h2>
      <p>Post ID: {postId}</p>
      <p>This page inherits the posts layout!</p>
    </div>
  )
}
