import { createORPCClient, onError } from '@orpc/client'
import { RPCLink } from '@orpc/client/fetch'
import type { RouterClient } from '@orpc/server'
import { createTanstackQueryUtils } from '@orpc/tanstack-query'
import type { router } from 'api/src/router/orpc'

const link = new RPCLink({
  url: 'http://localhost:5000/orpc',
  headers: () => ({
    authorization: 'Bearer token',
  }),
  // fetch: <-- provide fetch polyfill fetch if needed
  interceptors: [
    onError((error) => {
      console.error(error)
    }),
  ],
})

// Create a client for your router
export const client: RouterClient<typeof router> = createORPCClient(link)
export const orpc = createTanstackQueryUtils(client)
