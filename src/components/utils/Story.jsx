import React from 'react'
import { FcLike, FcClock, FcSportsMode } from "react-icons/fc";

function Story({ item: { title, text, img, url, like, time, by, btn } }) {
    return (
        <div className='pb-[40px] rounded-lg shadow shadow-slate-200 overflow-hidden'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className='px-[10px] '>
                <div>
                    <div className='flex items-center justify-between my-[20px]'>
                        <span className='flex items-center gap-[2px]'><FcLike /> <p className='text-xs font-semibold'>{like}</p></span>
                        <span className='flex items-center gap-[2px]'><FcClock /> <p className='text-xs font-semibold'>{time}</p></span>
                        <span className='flex items-center gap-[2px]'><FcSportsMode /> <p className='text-xs font-semibold'>{by}</p></span>
                    </div>
                </div>
                <div>
                    <h2 className='font-bold'>{title}</h2>
                    <p className='font-thin text-sm py-[10px] sm:h-[100px] lg:h-[140px] h-[180px] overflow-clip'>{text}</p>
                </div>
                <button className='w-full bg-gradient-to-b from-slate-900 to-black shadow-md shadow-black text-center text-slate-100 py-1.5 button-theme'><a target='_blank' href={url}>{btn}</a></button>
            </div>
        </div>
    )
}

export default Story