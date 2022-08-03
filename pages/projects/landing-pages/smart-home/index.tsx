import { NextPage } from 'next'
import Head from 'next/head'
import Navbar from '../../../../components/Navbar'
import Link from 'next/link'
import Image from 'next/image'
import page from '../../../../public/images/smart-home.png'
const SmartHome: NextPage = () => {
    return (
        <div className="dark:bg-slate-900  flex min-h-screen flex-col items-center justify-start py-2 text-center">
            <Head>
                <title>Smart Home Landing Page</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <main className="w-screen min-h-screen dark:text-slate-100 dark:bg-amber-800 dark:from-slate-900 dark:via-slate-800  self-center  bg-gradient-to-b from-white via-amber-100 to-amber-200 ">
                <div className="my-8"></div>
                <div className="">
                    <h2 className="text-5xl mb-6">Smart Home Landing Page</h2>
                    <div className="grid grid-col-2 border-double border-black">
                        <Link
                            className="hover:cursor-pointer grid-col-start-1"
                            href="https://github.com/emday4prez/SmartHomeLandingPage"
                        >
                            <a target="_blank">github</a>
                        </Link>
                        <div className="px-10"></div>
                        <Link
                            className="hover:cursor-pointer grid-col-start-2"
                            href="https://smart-home-site-landing-page.netlify.app/"
                        >
                            <a target="_blank">live site</a>
                        </Link>
                    </div>

                    <div className="py-10"></div>
                    <Image
                        src={page}
                        height={432}
                        width={350}
                        className="rounded-lg"
                    />
                </div>
            </main>
        </div>
    )
}

export default SmartHome
