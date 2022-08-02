import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import profile from '../public/images/jackson_lake.jpg'
import Image from 'next/image'

const navigation = [
    { name: 'Product', href: '#' },
    { name: 'Features', href: '#' },
    { name: 'Marketplace', href: '#' },
    { name: 'Company', href: '#' },
]

export default function Hero() {
    return (
        <div className="hero min-h-[50%] dark:bg-slate-800 sm:grid-col-2">
            <div className="hero-content">
                <div className="hidden md:flex">
                    <Image
                        src={profile}
                        width={300}
                        height={400}
                        className="max-w-md rounded-full object-cover"
                    />
                </div>

                <div>
                    <h1 className="text-5xl font-bold">Box Office News!</h1>
                    <p className="py-6">
                        I am a full stack developer open to remote work or relocation for in office work.  I have two years of experience building full stack web applications with React, Node.js, and CSS.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    )
}
