import { createRouter } from '@tanstack/react-router'

import { routeTree } from './routeTree.gen'

function NotFoundComponent() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-6xl text-gray-900 font-bold">404</h1>
        <h2 className="mt-4 text-2xl text-gray-700 font-semibold">Page Not Found</h2>
        <p className="mt-2 text-gray-600">
          The page you're looking for doesn't exist.
        </p>
        <a
          href="/"
          className="mt-6 inline-block rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
        >
          Go Home
        </a>
      </div>
    </div>
  )
}

export function getRouter() {
  const router = createRouter({
    routeTree,
    scrollRestoration: true,
    defaultNotFoundComponent: NotFoundComponent,
  })

  return router
}
