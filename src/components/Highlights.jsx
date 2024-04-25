import React from 'react'

function Highlights({ highlights: {heading, title, text, btn, url, img}, ifExist }) {
  return (
    <div className={`grid grid-flow-dense grid-cols-2 md:grid-cols-1 md:text-center gap-9 sm:m-[15px] md:m-[25px] lg:m-[30px] xl:m-[40px] mx-[80px] my-[100px]`}>
      <div className={`${ifExist ? 'order-1' : 'order-2'}`}>
        <img className={`w-[90%] cursor-pointer duration-700 xl:w-[100%] ${ifExist ? 'rotate-[5deg] hover:rotate-[-15deg]' : 'rotate-[15deg] hover:rotate-[10deg]'}`} src={img} alt="highlight-img" />
      </div>
      <div className={`${ifExist ? 'order-2' : 'order-1'}`}>
        <h2 className='text-gradient font-bold text-4xl xl:text-3xl lg:text-2xl'>{heading}</h2>
        <h1 className='text-slate-900 font-bold text-5xl xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl'>{title}</h1>
        <p className='text-slate-900 my-4'>{text}</p>
        <button className='button-theme bg-slate-900 shadow-slate-900 text-slate-100 py-1.5'><a target='_blank' href={url}>{btn}</a></button>
      </div>
    </div>
  )
}

export default Highlights