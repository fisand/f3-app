import '@unocss/reset/tailwind.css'
import 'virtual:uno.css'
import './assets/styles/index.css'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { httpBatchLink } from '@trpc/client'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { App } from './App.tsx'
import { trpc } from './trpc/index.ts'

const trpcClient = trpc.createClient({
  links: [
    httpBatchLink({
      url: '/api',
    }),
  ],
})

const queryClient = new QueryClient()

ReactDOM.createRoot(document.querySelector('#root')!).render(
  // eslint-disable-next-line @eslint-react/no-context-provider
  <trpc.Provider client={trpcClient} queryClient={queryClient}>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </QueryClientProvider>
  </trpc.Provider>,
)
