import * as fs from 'node:fs'

import { ShimmerButton } from '@repo/ui/src/components/ui/shimmer-button'
import { createFileRoute, useRouter } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/react-start'
import { motion } from 'framer-motion'

const filePath = 'count.txt'

async function readCount() {
  return Number.parseInt(
    await fs.promises.readFile(filePath, 'utf8').catch(() => '0'),
    10,
  )
}

const getCount = createServerFn({
  method: 'GET',
}).handler(() => {
  return readCount()
})

const updateCount = createServerFn({ method: 'POST' })
  .inputValidator((d: number) => d)
  .handler(async ({ data }) => {
    const count = await readCount()
    await fs.promises.writeFile(filePath, `${count + data}`)
  })

export const Route = createFileRoute('/')({
  component: Home,
  loader: async () => await getCount(),
})

function Home() {
  const router = useRouter()
  const state = Route.useLoaderData()

  return (
    <div className="h-screen w-screen flex flex-col gap-5">
      <motion.div
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        className="border-border h-14 border-b border-b-1"
      >
        <div className="mx-auto h-full flex items-center justify-between container lt-sm:px-4">
          <span className="flex items-center gap-1.5 text-lg font-500">
            <span className="h-5.5 w-5.5 flex-col-center rounded-lg bg-white p-1">
              <span className="i-logos:fastify-icon h-4 w-4" />
            </span>
            <img
              className="h-5.5"
              src="https://orpc.unnoq.com/logo.webp"
            />

            f3-app
          </span>

          <a
            rel="noreferrer noopener"
            href="https://github.com/fisand/f3-app"
            target="_blank"
            className="flex-col-center"
          >
            <span className="i-simple-icons:github h-5.5 w-5.5 cursor-pointer transition-all hover:scale-105" />
          </a>
        </div>
      </motion.div>
      <div className="mx-auto w-100 flex-1 lt-sm:(w-full px-4)">
        <div className="flex flex-col gap-3 pb-5 pt-10">
          <div className="z-10 min-h-64 flex items-center justify-center">
            <ShimmerButton
              className="shadow-2xl"
              onClick={() => {
                updateCount({ data: 1 }).then(() => {
                  router.invalidate()
                })
              }}
            >
              <span className="whitespace-pre-wrap text-center text-sm text-white font-medium leading-none tracking-tight dark:from-white dark:to-slate-900/10 lg:text-lg">
                Add 1 to {state}?
              </span>
            </ShimmerButton>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        className="border-border grid grid-cols-3 h-14 border-t border-t-1"
      >
        <span />
        <div className="mx-auto h-full flex-center gap-2 lt-sm:px-4">
          <a href="https://fastify.io/" target="_blank" rel="noreferrer noopener">
            <span className="h-5.5 w-5.5 flex-col-center rounded-lg bg-white p-1">
              <span className="i-logos:fastify-icon h-4 w-4" />
            </span>
          </a>
          <a href="https://orpc.unnoq.com/" target="_blank" rel="noreferrer noopener" className="flex-col-center">
            <img
              className="h-5.5"
              src="https://orpc.unnoq.com/logo.webp"
              style={{
                backgroundSize: 'cover',
              }}
            />
          </a>
        </div>
        <span />
      </motion.div>
    </div>
  )
}
