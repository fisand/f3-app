import { Button } from '@repo/ui/src/components/ui/button'
import { Input } from '@repo/ui/src/components/ui/input'
import { ShimmerButton } from '@repo/ui/src/components/ui/shimmer-button'
import { createFileRoute, useRouter } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/react-start'
import { db, user } from 'drizzle'
import { eq } from 'drizzle-orm'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { toast } from 'sonner'

const getCount = createServerFn({
  method: 'GET',
}).handler(async () => {
  const users = await db.select().from(user)
  return { users }
})

const updateCount = createServerFn({ method: 'POST' })
  .inputValidator((data: { email: string, name: string }) => data)
  .handler(async ({ data }) => {
    await db.insert(user).values(data)
  })

const deleteCount = createServerFn({ method: 'POST' })
  .inputValidator((data: { id: number }) => data)
  .handler(async ({ data }) => {
    await db.delete(user).where(eq(user.id, data.id))
  })

export const Route = createFileRoute('/')({
  component: Home,
  loader: async () => await getCount(),
})

function Home() {
  const router = useRouter()
  const { users } = Route.useLoaderData()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  return (
    <div className="h-screen w-screen flex flex-col gap-5">
      <motion.div
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        className="h-14 border-b border-b-1 border-border"
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
            >
              <span className="whitespace-pre-wrap text-center text-sm text-white font-medium leading-none tracking-tight lowercase dark:from-white dark:to-slate-900/10 lg:text-lg">
                DIRZZLE + TANSTACK + REACT
              </span>
            </ShimmerButton>
          </div>

          <AnimatePresence>
            {users?.map((user, index) => (
              <motion.span
                layout
                key={user.id}
                custom={index}
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={{
                  visible: (i: number) => ({
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: (i + 0.05) * 0.05,
                    },
                  }),
                  hidden: { opacity: 0, y: 10 },
                }}
                className="flex-center justify-between"
              >
                <Button className="relative w-30">
                  {user.name}
                </Button>

                <button
                  type="button"
                  className="ml-auto flex-col-center rounded bg-primary"
                  disabled={false}
                  onClick={async () => {
                    await router.invalidate()
                  }}
                >
                  <span className="i-lucide:square-check h-5 w-5 text-primary-foreground" />
                </button>

                <button
                  type="button"
                  className="ml-2 flex-col-center rounded bg-primary"
                  disabled={false}
                  onClick={async () => {
                    await deleteCount({ data: { id: user.id } })
                    await router.invalidate()
                  }}
                >
                  <span className="i-lucide:x h-5 w-5 text-primary-foreground" />
                </button>
              </motion.span>
            ))}

            <motion.div
              layout
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2"
            >
              <Input
                type="text"
                maxLength={50}
                value={name}
                onInput={(e) => {
                  setName((e.target as HTMLInputElement).value)
                }}
                placeholder="Name"
                className="flex-1 bg-accent"
              />
              <Input
                type="email"
                maxLength={50}
                value={email}
                onInput={(e) => {
                  setEmail((e.target as HTMLInputElement).value)
                }}
                placeholder="Email"
                className="flex-1 bg-accent"
              />
              <Button
                onClick={async () => {
                  if (!name) {
                    toast.error('Name is required')
                    return
                  }
                  if (users && users?.length >= 6) {
                    toast.error('You have reached the maximum number of users')
                    return
                  }

                  await updateCount({ data: { email, name } })
                  await router.invalidate()

                  setName('')
                  setEmail('')
                }}
                disabled={false}
              >
                New
              </Button>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        className="grid grid-cols-3 h-14 border-t border-t-1 border-border"
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
