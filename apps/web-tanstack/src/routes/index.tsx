import { Button } from '@repo/ui/src/components/ui/button'
import { Input } from '@repo/ui/src/components/ui/input'
import { ShimmerButton } from '@repo/ui/src/components/ui/shimmer-button'
import { createFileRoute, Link, useRouter } from '@tanstack/react-router'
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
    <div className="flex flex-col gap-5 h-screen w-screen">
      <motion.div
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        className="border-b border-b-1 border-border h-14"
      >
        <div className="mx-auto flex h-full items-center justify-between lt-sm:px-4 container">
          <span className="text-lg font-500 flex gap-1.5 items-center">
            <span className="p-1 rounded-lg bg-white flex-col-center h-5.5 w-5.5">
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
      <div className="mx-auto flex-1 w-100 lt-sm:(px-4 w-full)">
        <div className="pb-5 pt-10 flex flex-col gap-3">
          <div className="flex min-h-64 items-center justify-center z-10">
            <ShimmerButton
              className="shadow-2xl"
            >
              <span className="text-sm text-white leading-none tracking-tight font-medium text-center whitespace-pre-wrap lowercase lg:text-lg dark:from-white dark:to-slate-900/10">
                DRIZZLE + TANSTACK + REACT
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
                <Button className="w-30 relative">
                  {user.name}
                </Button>

                <button
                  type="button"
                  className="ml-auto rounded bg-primary flex-col-center"
                  disabled={false}
                  onClick={async () => {
                    await router.invalidate()
                  }}
                >
                  <span className="i-lucide:square-check text-primary-foreground h-5 w-5" />
                </button>

                <button
                  type="button"
                  className="ml-2 rounded bg-primary flex-col-center"
                  disabled={false}
                  onClick={async () => {
                    await deleteCount({ data: { id: user.id } })
                    await router.invalidate()
                  }}
                >
                  <span className="i-lucide:x text-primary-foreground h-5 w-5" />
                </button>
              </motion.span>
            ))}

            <motion.div
              layout
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex gap-2 items-center"
            >
              <Input
                type="text"
                maxLength={50}
                value={name}
                onInput={(e) => {
                  setName((e.target as HTMLInputElement).value)
                }}
                placeholder="Name"
                className="bg-accent flex-1"
              />
              <Input
                type="email"
                maxLength={50}
                value={email}
                onInput={(e) => {
                  setEmail((e.target as HTMLInputElement).value)
                }}
                placeholder="Email"
                className="bg-accent flex-1"
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

          <Link to="/posts/$postId" params={{ postId: '1' }}>
            <Button>
              Go to Post 1
            </Button>
          </Link>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        className="border-t border-t-1 border-border grid grid-cols-3 h-14"
      >
        <span />
        <div className="mx-auto flex-center gap-2 h-full lt-sm:px-4">
          <a href="https://fastify.io/" target="_blank" rel="noreferrer noopener">
            <span className="p-1 rounded-lg bg-white flex-col-center h-5.5 w-5.5">
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
