import { NextPage } from "next"
import Head from "next/head"
import Navbar from "../../components/Navbar"
import Link from "next/link"
const Projects: NextPage = () => {

 return (
  <div className="dark:bg-slate-900  flex min-h-screen flex-col items-center justify-start py-2 text-center">
      <Head>
        <title>Emerson Day | Projects</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <main className='dark:bg-slate-900 self-center dark:text-slate-100'>
       <h2 className='text-5xl mb-6'>projects</h2>
       <Link className="cursor-pointer" href="/projects/landing-pages">
        <h3 className="text-slate800 dark:text-slate-300">Landing Pages</h3>
       </Link>
       
       
      </main>
  </div>
 )
}

export default Projects;