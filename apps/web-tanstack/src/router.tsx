import { createRouter } from '@tanstack/react-router'

import { routeTree } from './routeTree.gen'

function NotFoundComponent() {
  return (
    <div className="bg-gray-50 flex flex-col min-h-screen items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl text-gray-900 font-bold">404</h1>
        <h2 className="text-2xl text-gray-700 font-semibold mt-4">Page Not Found</h2>
        <p className="text-gray-600 mt-2">
          The page you're looking for doesn't exist.
        </p>
        <a
          href="/"
          className="text-white mt-6 px-4 py-2 rounded-md bg-blue-600 inline-block hover:bg-blue-700"
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
