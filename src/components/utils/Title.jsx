import React from 'react'

function Title({ title }) {
  return (
    <div>
      <h1 className='text-slate-900 font-bold mb-[20px] sm:text-xl md:text-2xl lg:text-3xl text-4xl'>{title}</h1>
    </div>
  )
}

export default Title