import React from 'react'

function SocialLink({ imgsrc }) {
  return (
    <li><a href=""><img className='sm:w-[24px] hover:scale-110 md:w-[26px] lg:w-[28px] w-[30px] transition duration-300' src={imgsrc} alt="social" /></a></li>
  )
}

export default SocialLink