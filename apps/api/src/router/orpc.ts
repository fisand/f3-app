import { createRouterClient, os } from '@orpc/server'

const ping = os.handler(() => 'ping')
const pong = os.handler(() => 'pong')

export const router = {
  ping,
  pong,
  nested: { ping, pong },
}

export const serverClient = createRouterClient(router, {
  context: {},
})
