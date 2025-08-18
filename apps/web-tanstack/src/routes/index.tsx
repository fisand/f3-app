import { ShimmerButton } from '@repo/ui/src/components/ui/shimmer-button'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] min-h-screen items-center justify-items-center gap-16 p-20 font-sans dark:bg-gray-900 lt-sm:p-8 lt-sm:pb-20">
      <main className="row-start-2 flex flex-col gap-8 lt-sm:items-center">
        <ol className="m-0 list-inside pl-0 text-sm leading-6 tracking-tighter font-mono lt-sm:text-center">
          <li className="mb-2 text-blue-700 lt-sm:text-red-700">
            TanStack 🩷 unocss
          </li>
          <li className="mb-2">
            Get started by editing <code className="rounded bg-gray-100/5 px-1 py-0.5 font-semibold font-inherit">app/page.tsx</code>.
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <div className="flex gap-4 lt-sm:flex-col">
          <ShimmerButton className="">
            Deploy now
          </ShimmerButton>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className="h-12 min-w-[180px] flex cursor-pointer appearance-none items-center justify-center border border-0 border-gray-200/8 rounded-full px-5 py-0 text-base font-medium leading-5 transition-all duration-200 lt-sm:h-10 lt-sm:min-w-0 hover:border-transparent hover:bg-gray-100 lt-sm:px-4 lt-sm:text-sm"
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 lt-sm:flex-wrap lt-sm:items-center lt-sm:justify-center">
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-green-500 font-500 hover:underline hover:underline-offset-4"
        >
          <span className="i-lucide:file-text h-4 w-4 inline-flex" />
          Learn
        </a>
        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-blue-500 font-500 hover:underline hover:underline-offset-4"
        >
          <span className="i-lucide:biceps-flexed h-4 w-4 inline-flex" />
          Examples
        </a>
        <a
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-red-500 font-500 hover:underline hover:underline-offset-4"
        >
          <span className="i-lucide:square-arrow-out-up-right h-4 w-4 inline-flex" />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  )
}
