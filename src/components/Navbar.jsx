import React, { useState, useEffect } from 'react'
import logo from "../assets/logo.png"
import { BsSearch, BsHeart, BsShop } from "react-icons/bs";

function Navbar( { isCartShown, Reverser, cart } ) {

  const [isScrollEnough, setIsScrollEnough] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if(scrollY > 50) {
        setIsScrollEnough(true)
      } else {
        setIsScrollEnough(false)
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <nav className={`fixed z-50 w-full px-[40px] py-[20px] ${isScrollEnough ? 'blur-effect-theme' : ''}`}>
      <div className='flex justify-between'>
        <div>
          <img className={`sm:w-[50px] md:w-[60px] w-[65px] ${isScrollEnough ? 'filter brightness-0' : ''}`} src={logo} alt="" />
        </div>
        <ul className={`flex items-center text-xl gap-3 ${isScrollEnough ? 'text-black' : 'text-white'}`}>
          <li className='hover:scale-110 duration-300 cursor-pointer'><BsHeart /></li>
          <li className='hover:scale-110 duration-300 cursor-pointer'><BsSearch /></li>
          <li onClick={() => Reverser(isCartShown)} className='relative'>
            <button className='hover:scale-110 duration-300'>
              <BsShop />
              <span className='absolute cursor-pointer hover:scale-110 duration-300 top-[14px] right-[-7px]'><p className={`${isScrollEnough ? 'text-white bg-black' : 'text-black bg-white'} flex justify-center items-center text-xs h-[17px] w-[17px] rounded-full`}>{cart.myItems.length}</p></span>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar