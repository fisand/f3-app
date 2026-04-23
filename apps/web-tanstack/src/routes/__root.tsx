import '../styles.css'

import { cn } from '@repo/ui/src/lib/utils'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createRootRoute, HeadContent, Outlet, Scripts, useRouter } from '@tanstack/react-router'
import { type ReactNode, useEffect, useState } from 'react'
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
        title: 'bhq | 自律成就我们的美',
      },
      {
        name: 'description',
        content:
          'bhq 是面向都市女性的精品运动生活方式品牌，围绕瑜伽、普拉提与塑形课程，陪你在日常节奏里建立身体秩序与线条感。',
      },
      {
        name: 'theme-color',
        content: '#fffdfa',
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
        <Toaster position='top-center' />
      </QueryClientProvider>
    </RootDocument>
  )
}

function App() {
  const router = useRouter()
  const [isNavigating, setIsNavigating] = useState(false)

  useEffect(() => {
    const unsubscribeBeforeLoad = router.subscribe('onBeforeLoad', ({ pathChanged }) => {
      if (pathChanged) {
        setIsNavigating(true)
      }
    })
    const unsubscribeLoad = router.subscribe('onLoad', () => {
      setIsNavigating(false)
    })

    return () => {
      unsubscribeBeforeLoad()
      unsubscribeLoad()
    }
  }, [router])

  return (
    <>
      <div
        aria-hidden='true'
        className={cn(
          'fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-[linear-gradient(90deg,#f6e8b4,#d9c372,#5a4538)] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]',
          isNavigating ? 'scale-x-[0.7] opacity-100' : 'scale-x-0 opacity-0',
        )}
      />
      <Outlet />
    </>
  )
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang='zh-CN' className='scroll-smooth bg-[#fffdfa] motion-reduce:scroll-auto'>
      <head>
        <HeadContent />
      </head>
      <body className='min-h-screen bg-[#fffdfa] font-sans text-[#5a4538] [text-rendering:geometricPrecision] selection:bg-[#f6e8b4]/70 selection:text-[#5a4538]'>
        {children}
        <Scripts />
      </body>
    </html>
  )
}
