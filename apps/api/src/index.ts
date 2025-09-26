import { createServer } from 'node:http'

import { RPCHandler } from '@orpc/server/node'
import { CORSPlugin } from '@orpc/server/plugins'
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
import { router } from './router/orpc'

dotenv.config()

const handler = new RPCHandler(router, {
  plugins: [
    new CORSPlugin(),
  ],
})

const server = fastify({
  maxParamLength: 5000,
  logger: true,
  serverFactory: (fastifyHandler) => {
    const server = createServer(async (req, res) => {
      const { matched } = await handler.handle(req, res, {
        context: {},
        prefix: '/orpc',
      })

      if (matched) {
        return
      }

      fastifyHandler(req, res)
    })

    return server
  },
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
})

;(async () => {
  try {
    await server.listen({ port: 5000 })
    consola.success('Server is running on port http://localhost:5000')
  }
  catch (err) {
    consola.error(err)
    throw err
  }
})()
