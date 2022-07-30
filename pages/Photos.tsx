import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import DaisyCarousel from '../components/DaisyCarousel'
const Photos: NextPage = () => {

 return (
  <div className="dark:bg-slate-900  flex min-h-screen flex-col items-center justify-start py-2 text-center">
      <Head>
        <title>Emerson Day | Image Galleries</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <main className='dark:bg-slate-900 self-center dark:text-slate-100'>
       <h2 className='text-5xl mb-6'>image galleries</h2>
       <h3 className='text-2xl'>daisy ui carousel</h3>
       <DaisyCarousel/>
       
      </main>
  </div>
 )
}


export default Photos;