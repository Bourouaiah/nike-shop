import React from 'react'
import { FaStar, FaShoppingBag } from "react-icons/fa";
import { AddItem } from '../../store/CartSlice';

function SaleItem({ item: { title, text, rating, btn, img, price, color, shadow, id }, ifExist, dispatch, Reverser, isCartShown }) {
  const item = {
    title,
    text, 
    img, 
    price,
    id,
    shadow, 
    color,
  }

  const clickHandler = () => {
    Reverser(isCartShown)
    dispatch(AddItem(item))
  }

  return (
    <div className={`bg-gradient-to-b ${color} ${shadow} flex ${ifExist ? 'flex-row' : 'flex-col items-center gap-3'} px-[20px] py-[10px] rounded-md relative hover:scale-105 duration-500`}>
      <div className='z-20'>
        <h2 className='text-white text-lg font-medium'>{title}</h2>
        <h3 className='text-white'>{text}</h3>
        <div className='flex text-white gap-[30px] my-[10px] items-center'>
          <span className='flex items-center bg-white/80  px-1 rounded blur-effect-theme'><h1 className='text-black text-sm font-medium'>{`$${price}`}</h1></span>
          <span className='flex gap-[5px] items-center'><FaStar />{rating}</span>
        </div>
        <div className='flex gap-[15px] items-center'>
          <button className='bg-white/90 blur-effect-theme button-theme p-[6px] shadow shadow-sky-200'><FaShoppingBag onClick={() => dispatch(AddItem(item))} /></button>
          <button className='bg-white/90 blur-effect-theme button-theme px-2 py-1 shadow shadow-sky-200 text-sm text-black' onClick={clickHandler}>{btn}</button>
        </div>
      </div>

      <div className={`sm:w-[40%] md:w-[30%] xl:w-[50%] ${ifExist ? 'absolute w-[70%] top-[15px] right-[10px] rotate-[-35deg] hover:rotate-[-15deg]' : 'rotate-0 hover:rotate-[-15deg]'} duration-700 cursor-pointer`}>
        <img className='w-[100%]' src={img} alt="product-img" />
      </div>
    </div>
  )
}

export default SaleItem;