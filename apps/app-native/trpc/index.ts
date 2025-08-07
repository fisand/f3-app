import type { inferReactQueryProcedureOptions } from '@trpc/react-query'
import { createTRPCReact } from '@trpc/react-query'
import type { inferRouterInputs, inferRouterOutputs } from '@trpc/server'

import type { AppRouter } from '../../api/src/router'

export const trpc = createTRPCReact<AppRouter>()

export type ReactQueryOptions = inferReactQueryProcedureOptions<AppRouter>
export type RouterInputs = inferRouterInputs<AppRouter>
export type RouterOutputs = inferRouterOutputs<AppRouter>

export { type AppRouter } from '../../api/src/router'
