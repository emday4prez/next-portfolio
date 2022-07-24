import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="dark:bg-slate-900 flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Emerson Day </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex  dark:text-gray-100  white w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold text-slate-800 dark:text-slate-200">
          Emerson Day
         
        </h1>

        <p className="mt-6 text-2xl">
          <code className="rounded-md bg-gray-200 dark:bg-gray-700 dark:text-emerald-400 p-3 font-mono text-xl">
            full stack developer
          </code>
        </p>

        <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
          <a
            href="/projects"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-emerald-600 focus:text-emerald-600"
          >
            <h3 className="text-2xl font-bold text-emerald-800 dark:text-emerald-200">Projects &rarr;</h3>
            <p className="mt-4 text-xl">
              Find in-depth information about tools I use.
            </p>
          </a>

          <a
            href="https://nextjs.org/learn"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold text-blue-800 dark:text-blue-200">Education &rarr;</h3>
            <p className="mt-4 text-xl">
              Schools I have attended, and courses I have completed. 
            </p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-amber-600 focus:text-amber-600"
          >
            <h3 className="text-2xl font-bold text-amber-800 dark:text-amber-200">Photo Galleries &rarr;</h3>
            <p className="mt-4 text-xl">
              Discover different styles of photo galleries I have designed.
            </p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-rose-600 focus:text-rose-600"
          >
            <h3 className="text-2xl font-bold text-rose-800 dark:text-rose-200">Fun &rarr;</h3>
            <p className="mt-4 text-xl">
              Having fun with APIs.
            </p>
          </a>
        </div>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          {' '}
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </a>
      </footer>
    </div>
  )
}

export default Home
