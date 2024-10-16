import { AnimatePresence, motion } from 'framer-motion'
import { toast } from 'sonner'

import { trpc } from '../trpc'

function HomePage() {
  const userList = trpc.getUsers.useQuery()

  const [name, setName] = useState('')

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
      <div className="mx-auto w-100 flex-1 lt-sm:(w-full px-4)">
        <div className="flex flex-col gap-3 pb-5 pt-10">
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
                <Button className="relative w-30">
                  {user.name}
                </Button>

                <button
                  type="button"
                  className="ml-auto flex-col-center rounded bg-primary"
                  disabled={false}
                  onClick={async () => {
                    await userList.refetch()
                  }}
                >
                  <span className="i-lucide:square-check h-5 w-5 text-primary-foreground" />
                </button>

                <button
                  type="button"
                  className="ml-2 flex-col-center rounded bg-primary"
                  disabled={false}
                  onClick={async () => {
                    await userList.refetch()
                  }}
                >
                  <span className="i-lucide:x h-5 w-5 text-primary-foreground" />
                </button>
              </motion.span>
            ))}
          </AnimatePresence>
        </div>

        <motion.div
          layout
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2"
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
        className="grid grid-cols-3 h-14 border-t border-t-1 border-border"
      >
        <span />
        <div className="mx-auto h-full flex-center gap-2 lt-sm:px-4">
          <a href="https://fastify.io/" target="_blank" rel="noreferrer noopener">
            <span className="h-5.5 w-5.5 flex-col-center rounded-lg bg-white p-1">
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
