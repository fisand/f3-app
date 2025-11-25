import { ShimmerButton } from '@repo/ui/src/components/ui/shimmer-button'

export default function Home() {
  return (
    <div className="font-sans p-20 gap-16 grid grid-rows-[20px_1fr_20px] min-h-screen items-center justify-items-center lt-sm:p-8 lt-sm:pb-20 dark:bg-gray-900">
      <main className="flex flex-col gap-8 row-start-2 lt-sm:items-center">
        <ol className="text-sm leading-6 tracking-tighter font-mono m-0 pl-0 list-inside lt-sm:text-center">
          <li className="text-blue-700 mb-2 lt-sm:text-red-700">
            Nextjs 🩷 unocss
          </li>
          <li className="mb-2">
            Get started by editing <code className="font-inherit font-semibold px-1 py-0.5 rounded bg-gray-100/5">app/page.tsx</code>.
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
            className="text-base leading-5 font-medium px-5 py-0 appearance-none border border-0 border-gray-200/8 rounded-full flex h-12 min-w-[180px] cursor-pointer transition-all duration-200 items-center justify-center lt-sm:text-sm lt-sm:px-4 hover:border-transparent hover:bg-gray-100 lt-sm:h-10 lt-sm:min-w-0"
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className="flex gap-6 row-start-3 lt-sm:flex-wrap lt-sm:items-center lt-sm:justify-center">
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-500 font-500 flex gap-2 items-center hover:underline hover:underline-offset-4"
        >
          <span className="i-lucide:file-text inline-flex h-4 w-4" />
          Learn
        </a>
        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 font-500 flex gap-2 items-center hover:underline hover:underline-offset-4"
        >
          <span className="i-lucide:biceps-flexed inline-flex h-4 w-4" />
          Examples
        </a>
        <a
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-500 font-500 flex gap-2 items-center hover:underline hover:underline-offset-4"
        >
          <span className="i-lucide:square-arrow-out-up-right inline-flex h-4 w-4" />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  )
}
