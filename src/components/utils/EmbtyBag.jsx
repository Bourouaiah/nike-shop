import React from 'react'
import { BsArrowLeft } from "react-icons/bs";

function EmbtyBag({ emptybag, Reverser, isCartShown }) {
    return (
        <div className='w-full grow z-0 blur-effect-theme flex flex-col justify-center items-center gap-6'>
            <img className='w-[30%] hover:scale-110 duration-300' src={emptybag} alt="emptybag" />
            <button onClick={() => Reverser(isCartShown)} className='button-theme bg-gradient-to-b from-amber-500 to-orange-500 shadow-lg shadow-orange-500 flex items-center justify-center text-slate-900 py-2 gap-3 text-sm px-5 font-semibold active:scale-110'><BsArrowLeft className='text-xl' /> Back to Nike Store</button>
        </div>
    )
}

export default EmbtyBag