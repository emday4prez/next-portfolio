import { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../components/Navbar'

const Contact: NextPage = () => {
    return (
        <div className="max-w-screen h-screen bg-gradient-to-tr  from-slate-100 dark:bg-slate-800 dark:from-slate-700 flex flex-col justify-start items-center">
            <Head>
                <title>Emerson Day | Contact</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar />
            <div className="py-8 h-10 "></div>
            <h1 className=" lg:text-7xl md:text-6xl sm:text-5xl text-4xl text-left font-bold md:pt-0 pt-8 text-slate-800 dark:text-slate-200 col-span-1 ">
                Contact
            </h1>
            <div className="py-8 h-10 "></div>
            <div className="backdrop-blur py-10 rounded border-double border-8 border-grey-200  p-4">
                <div className=" p-4">
                    <p className="text-sm">cell phone:</p>
                    <h1 className=" lg:text-7xl md:text-5xl sm:text-4xl text-3xl text-left font-bold  text-slate-800 dark:text-slate-200 col-span-1 ">
                        310-490-6576
                    </h1>
                    <p className=" text-slate-800 dark:text-slate-400 text-xs">
                        <Link
                            className=" text-slate-800 dark:text-slate-300 text-sm"
                            href="sms://+13104906576?body=I%27m%20interested%20in%20hiring%20you.%20Please%20contact%20me."
                        >
                            click here to text me
                        </Link>
                    </p>
                </div>

                <div className="px-8 h-10"></div>
                <div className="px-4">
                    <p className="text-sm">location:</p>
                    <h1 className=" lg:text-6xl md:text-5xl sm:text-4xl text-3xl text-left font-light  text-slate-800 dark:text-slate-200 col-span-1 ">
                        Los Angeles
                    </h1>
                    <p className=" text-slate-800 dark:text-slate-400 text-xs">
                        open to relocation
                    </p>
                </div>
                <div className="px-8 h-10"></div>
                <div className="px-4">
                    <p className="text-sm ">e-mail:</p>
                    <h1 className="lg:text-7xl md:text-6xl sm:text-4xl text-3xl text-left font-thin text-slate-800 dark:text-slate-200 -mt-1 col-span-1">
                        emerson.day@gmail.com
                    </h1>
                    <p className=" text-slate-800 dark:text-slate-400 pb-4 text-xs">
                        <a href="mailto:emerson.day@gmail.com?subject=subject&cc=cc@example.com">
                            click to email me
                        </a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Contact
