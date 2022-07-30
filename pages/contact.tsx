import { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../components/Navbar' 

const Contact: NextPage = () => {
  return (
    <div className='max-w-screen h-screen dark:bg-slate-800 flex flex-col justify-start items-center'>
      <Head>
        <title>Emerson Day | Contact</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className=" lg:text-7xl md:text-6xl sm:text-5xl text-4xl text-left font-bold md:pt-0 pt-8 text-slate-800 dark:text-slate-200 col-span-1 ">
          Contact
         
        </h1>
      <Navbar/>
       <div className='px-8 h-10'>
          
        </div>
      <div>
       <div className='p-4' >
        
       <h1 className=" lg:text-4xl md:text-3xl sm:text-xl text-2xl text-left font-bold  text-slate-800 dark:text-slate-200 col-span-1 ">
          310-490-6576
        </h1>
        <p className=' text-slate-800 dark:text-slate-400 text-sm'>
          <Link className=' text-slate-800 dark:text-slate-300 text-sm' href="sms://+13104906576?body=I%27m%20interested%20in%20hiring%20you.%20Please%20contact%20me."
         >click here to text me</Link>
        </p>
        
       </div>
      
         <div className='px-8 h-10'>
          
        </div>
        <div className='px-4'>
          <h1 className=" lg:text-4xl md:text-3xl sm:text-xl text-2xl text-left font-bold   text-slate-800 dark:text-slate-200 col-span-1 ">
          Los Angeles
        </h1>
        <p className=' text-slate-800 dark:text-slate-400 text-sm'>open to relocation</p>
        </div>
        <div className='px-8 h-10'>
          
        </div>
      
        <h1 className="lg:text-5xl md:text-4xl sm:text-2xl text-xl text-left font-light p-4 text-slate-800 dark:text-slate-200 col-span-1">
          Emerson.Day@gmail.com
        </h1>
       
      </div>
     </div>
  )
}

export default Contact