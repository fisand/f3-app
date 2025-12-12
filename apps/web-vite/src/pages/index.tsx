import { AnimatePresence, motion } from 'framer-motion'
import { toast } from 'sonner'

import { trpc } from '../trpc'

function HomePage() {
  const userList = trpc.getUsers.useQuery()

  const [name, setName] = useState('')

  return (
    <div className="flex flex-col gap-5 h-screen w-screen">
      <motion.div
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        className="border-b border-b-1 border-border h-14"
      >
        <div className="mx-auto container flex h-full items-center justify-between lt-sm:px-4">
          <span className="text-lg font-500 flex gap-1.5 items-center">
            <span className="p-1 rounded-lg bg-white flex-col-center h-5.5 w-5.5">
              <span className="i-logos:fastify-icon h-4 w-4" />
            </span>
            <span className="i-devicon-plain:trpc h-5.5 w-5.5" />

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
            <ShimmerButton className="shadow-2xl">
              <span className="text-sm text-white leading-none tracking-tight font-medium text-center whitespace-pre-wrap lg:text-lg dark:from-white dark:to-slate-900/10">
                f3-appppp?+
              </span>
            </ShimmerButton>
          </div>
          <AnimatePresence>
            {userList.data?.map((user, index) => (
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
                    await userList.refetch()
                  }}
                >
                  <span className="i-lucide:square-check text-primary-foreground h-5 w-5" />
                </button>

                <button
                  type="button"
                  className="ml-2 rounded bg-primary flex-col-center"
                  disabled={false}
                  onClick={async () => {
                    await userList.refetch()
                  }}
                >
                  <span className="i-lucide:x text-primary-foreground h-5 w-5" />
                </button>
              </motion.span>
            ))}
          </AnimatePresence>
        </div>

        <motion.div
          layout
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex gap-2 items-center"
        >
          <Input
            type="text"
            maxLength={5}
            value={name}
            onInput={(e) => {
              setName((e.target as HTMLInputElement).value)
            }}
            placeholder="Name"
            className="w-40"
          />
          <Button
            onClick={async () => {
              if (!name) {
                toast.error('Name is required')
                return
              }
              if (userList.data && userList.data?.length >= 6) {
                toast.error('You have reached the maximum number of users')
                return
              }

              // await createUser.mutateAsync({ name })
              setName('')
              await userList.refetch()
            }}
            disabled={false}
          >
            {/* {createUser.isPending ? (
                <span className="i-lucide:loader-circle mr-1 h-4 w-4 animate-spin" />
              ) : (
                <span className="i-lucide:plus mr-1 h-4 w-4 text-primary-foreground" />
              )} */}
            New
          </Button>
        </motion.div>
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
          <a href="https://trpc.io/" target="_blank" rel="noreferrer noopener" className="flex-col-center">
            <span className="i-devicon-plain:trpc h-5 w-5" />
          </a>
        </div>
        <span />
      </motion.div>
    </div>
  )
}

export default HomePage
