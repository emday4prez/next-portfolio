import { NextPage } from "next"
import Head from "next/head"
import Navbar from "../../../components/Navbar"
import Link from "next/link"

const LandingPages: NextPage = () => {

 return (
  <div className="dark:bg-slate-900  flex min-h-screen flex-col items-center justify-start py-2 text-center">
      <Head>
        <title>Landing Pages</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <main className='w-screen min-h-screen dark:text-slate-100 dark:bg-slate-700 dark:from-slate-900 dark:via-cyan-900  self-center  bg-gradient-to-b from-white via-sky-200 to-violet-200 '>
       <div className="my-8"></div>
       <div className="">
 <h2 className='text-5xl mb-6'>Landing Pages</h2>
       <Link className="cursor-pointer" href="/projects/landing-pages/smart-home">
        <a className="cursor-pointer" >Smart Home</a>
       </Link>
       </div>
      
       
       
      </main>
  </div>
 )
}

export default LandingPages;