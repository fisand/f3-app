import { ShimmerButton } from '@repo/ui/src/components/ui/shimmer-button'

import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <ol>
          <li>
            Nextjs 🩷 unocss
          </li>
          <li>
            Get started by editing <code>app/page.tsx</code>.
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <div className={styles.ctas}>
          <ShimmerButton className="">
            Deploy now
          </ShimmerButton>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.secondary} !h-50px`}
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-500 font-500"
        >
          <span className="i-lucide:file-text h-4 w-4 inline-flex" />
          Learn
        </a>
        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 font-500"
        >
          <span className="i-lucide:biceps-flexed h-4 w-4 inline-flex" />
          Examples
        </a>
        <a
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-500 font-500"
        >
          <span className="i-lucide:square-arrow-out-up-right h-4 w-4 inline-flex" />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  )
}
