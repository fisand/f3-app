import { createFileRoute } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/react-start'
import { renderServerComponent } from '@tanstack/react-start/rsc'

// Create a server function
// const getGreeting = createServerFn().handler(async () => {
//   // Create an RSC readable stream
//   return renderToReadableStream(
//     // Return JSX
//     <h1>Hello from the server</h1>,
//   )
// })

function Greeting() {
  return <h1>Hello from RSC</h1>
}

const getGreeting = createServerFn().handler(async () => {
  const Renderable = await renderServerComponent(<Greeting />)
  return { Renderable }
})

export const Route = createFileRoute('/posts/$postId')({
  component: RouteComponent,
  loader: async () => {
    const { Renderable } = await getGreeting()
    return { Greeting: Renderable }
  },
})

function RouteComponent() {
  const { postId } = Route.useParams()
  const { Greeting } = Route.useLoaderData()

  return (
    <div>
      <h2>Post Details</h2>
      <p>
        Post ID:
        {postId}
      </p>
      <p>This page inherits the posts layout!</p>
      {Greeting}
    </div>
  )
}
