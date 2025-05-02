import type {
  FastifyTRPCPluginOptions,
} from '@trpc/server/adapters/fastify'
import {
  fastifyTRPCPlugin,
} from '@trpc/server/adapters/fastify'
import consola from 'consola'
import * as dotenv from 'dotenv'
import fastify from 'fastify'

import { createContext } from './context'
import type { AppRouter } from './router'
import { appRouter } from './router'

dotenv.config()

const server = fastify({
  maxParamLength: 5000,
})
server.register(fastifyTRPCPlugin, {
  prefix: '/trpc',
  trpcOptions: {
    router: appRouter,
    createContext,
    onError({ path, error }) {
      // report to error monitoring
      consola.error(`Error in tRPC handler on path '${path}':`, error)
    },
  } satisfies FastifyTRPCPluginOptions<AppRouter>['trpcOptions'],
});
(async () => {
  try {
    await server.listen({ port: 8978 })
    consola.success('Server is running on port http://localhost:8978')
  }
  catch (err) {
    consola.error(err)
    throw err
  }
})()
