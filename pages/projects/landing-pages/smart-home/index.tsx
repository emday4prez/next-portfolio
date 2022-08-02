import { NextPage } from "next"
import Head from "next/head"
import Navbar from "../../../../components/Navbar"
import Link from "next/link"

const SmartHome: NextPage = () => {

 return (
  <div className="dark:bg-slate-900  flex min-h-screen flex-col items-center justify-start py-2 text-center">
      <Head>
        <title>Smart Home Landing Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <main className='w-screen min-h-screen  dark:bg-slate-900 self-center dark:text-slate-100 bg-gradient-to-b from-white via-sky-200 to-violet-200 '>
       <div className="my-8"></div>
       <div className="">
 <h2 className='text-5xl mb-6'>Smart Home Landing Page</h2>
       <Link className="cursor-pointer" href="/projects/landing-pages">
        <h3 >Landing Pages</h3>
       </Link>
       </div>
      
       
       
      </main>
  </div>
 )
}

export default SmartHome;