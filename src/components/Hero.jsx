import React from 'react'
import SocialLink from './utils/SocialLink'
import Clip from './utils/Clip'
function Hero({ heroapi: { title, subtitle, videos, btntext, img, sociallinks } }) {
    return (
        <div className='relative h-auto w-auto flex flex-col'>
            <div className='bg-theme clip-path h-[100vh] lg:h-[85vh] md:h-[85vh] sm:h-[70vh] w-auto absolute top-0 left-0 right-0 opacity-100 z-10'></div>
            <div className='relative opacity-100 z-20 grid items-center justify-items-center nike-container mt-[100px]'>
                <div className='text-center'>
                    <div className='text-white font-bold xsm:text-2xl sm:text-3xl md:text-4xl lg:text-4xl text-6xl mb-[20px]'>
                        <h1>{title}</h1>
                        <h1>{subtitle}</h1>
                    </div>
                    <button className='bg-white sm:text-sm md:text-base blur-effect-theme button-theme py-[5px] px-[20px] rounded-xl'>{btntext}</button>
                </div>
                <div className='flex justify-evenly w-full items-center'>
                    <div className='flex flex-col gap-[20px]'>
                        {videos?.map((video, index) => {
                            return (
                                <Clip imgsrc={video.imgsrc} clip={video.clip} key={index} />
                            )
                        })}
                    </div>
                    <div>
                        <img className='rotate-[-25deg] hover:rotate-0 cursor-pointer transition duration-700 xsm:w-[200px] sm:w-[250px] md:w-[300px] lg:w-[400px] w-[500px]' src={img} alt="hero-img" />
                    </div>
                    <div>
                        <ul className='flex flex-col gap-[20px]'>
                            {sociallinks.map((link, index) => {
                                return (
                                    <SocialLink key={index} socialkey={index} imgsrc={link.icon} />
                                )
                            })}
                        </ul>
                    </div>

                    
                </div>
            </div>
        </div>
    )
}

export default Hero
