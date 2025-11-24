import '@unocss/reset/tailwind.css'
import 'virtual:uno.css'

import { ProgressProvider, useProgress } from '@bprogress/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import {
  createRootRoute,
  HeadContent,
  Outlet,
  Scripts,
  useRouter,
} from '@tanstack/react-router'
import type { ReactNode } from 'react'
import { Toaster } from 'sonner'

const queryClient = new QueryClient()

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'TanStack Start Starter',
      },
    ],
  }),
  component: RootComponent,
})

function RootComponent() {
  return (
    <RootDocument>
      <QueryClientProvider client={queryClient}>
        <App />
        <Toaster position="top-center" />
      </QueryClientProvider>
    </RootDocument>
  )
}

function App() {
  const router = useRouter()
  const { start, stop } = useProgress()

  router.subscribe('onBeforeLoad', ({ pathChanged }) => {
    if (pathChanged) {
      start()
    }
  })
  router.subscribe('onLoad', () => {
    stop()
  })

  return (
    <Outlet />
  )
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html className="dark">
      <head>
        <HeadContent />
      </head>
      <body>
        <ProgressProvider color="linear-gradient(to right, #34d399, #67e8f9)" options={{ showSpinner: false }}>
          {children}
        </ProgressProvider>
        <Scripts />
      </body>
    </html>
  )
}
