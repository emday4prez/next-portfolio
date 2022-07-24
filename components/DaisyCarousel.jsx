import React from 'react'
import Image from 'next/image'
import yosemite from '../public/images/yosemite.jpg'
import halfDome from '../public/images/half-dome.jpg'
import elCap from '../public/images/el-cap.jpg'
import yv from '../public/images/yv.jpg'
import nightDome from '../public/images/night-dome.jpg'
import valley from '../public/images/valley.jpg'
function DaisyCarousel() {
    return (
        <div className="flex items-center justify-center ">
            {/* <div className="carousel carousel-center  max-w-lg p-4 space-x-5 bg-neutral rounded-box">
                <div className="carousel-item">
                    <Image
                        width={600}
                        height={400}
                        src={yosemite}
                        className="rounded-box"
                        blurDataURL
                    />
                </div>
                <div className="carousel-item">
                    <Image
                        src={halfDome}
                        width={600}
                        height={400}
                        className="rounded-box"
                        blurDataURL
                    />
                </div>
                <div className="carousel-item">
                    <Image
                        src={elCap}
                        width={600}
                        height={400}
                        className="rounded-box"
                        blurDataURL
                    />
                </div>
                <div className="carousel-item">
                    <Image
                        src={yv}
                        width={600}
                        height={400}
                        className="rounded-box"
                    />
                </div>
                <div className="carousel-item">
                    <Image
                        src={nightDome}
                        width={600}
                        height={400}
                        className="rounded-box"
                    />
                </div>
                <div className="carousel-item">
                    <Image
                        src={valley}
                        width={600}
                        height={400}
                        className="rounded-box"
                    />
                </div>
            </div> */}
            <div className="carousel w-11/12 pt-4">
                <div id="slide1" className="carousel-item relative w-full">
                    <Image src={valley} className="rounded-box w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">
                            ❮
                        </a>
                        <a href="#slide2" className="btn btn-circle">
                            ❯
                        </a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <Image src={yosemite} className="rounded-box w-full" />
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">
                            ❮
                        </a>
                        <a href="#slide3" className="btn btn-circle">
                            ❯
                        </a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <Image src={elCap} className="rounded-box w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">
                            ❮
                        </a>
                        <a href="#slide4" className="btn btn-circle">
                            ❯
                        </a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <Image src={halfDome} className="rounded-box w-full" />
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">
                            ❮
                        </a>
                        <a href="#slide1" className="btn btn-circle">
                            ❯
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DaisyCarousel
