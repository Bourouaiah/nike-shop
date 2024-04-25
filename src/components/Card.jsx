import React from 'react'
import ItemsOnCard from './utils/ItemsOnCard';
import { IoArrowBackCircleSharp, IoCloseCircle } from "react-icons/io5";
import emptybag from '../assets/emptybag.png';
import EmbtyBag from './utils/EmbtyBag';
import { RemoveItems } from '../store/CartSlice';

function Card({ isCartShown, Reverser, cart, dispatch }) {

  const subtotal = cart.myItems.map(item => item.price * item.Quantity)

  let sum = 0;
  subtotal.forEach(num => {
    sum += num;
  })
   
  // useEffect(() => {
  //   function handleClickOutside(event) {
  //     if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
  //       setIsOpen(false);
  //     }
  //   }
  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, [wrapperRef]);

  return (
    <div className={`w-full blur-effect-theme top-0 ${isCartShown ? 'visible opacity-100' : 'opacity-0 invisible'} fixed left-0 z-[70] h-full duration-700`}>
      <div className='top-0 right-0 fixed h-full md:w-full lg:w-[50%] w-[40%] flex flex-col'>
        <header className='bg-white flex justify-between items-center p-2'>
          <div className='flex items-center gap-2'>
            <IoArrowBackCircleSharp onClick={() => Reverser(isCartShown)} className='text-2xl cursor-pointer' />
            <div className='flex items-center gap-1'>
              <p className='font-medium'>Your Cart</p>
              <span className='bg-theme-cart text-slate-100 rounded-md py-[2px] px-[4px]'>{`(${(cart.myItems.length < 10 && cart.myItems.length > 0) ? '0' : ''}${cart.myItems.length} Items)`}</span>
            </div>
          </div>
          <div>
            <IoCloseCircle onClick={() => dispatch(RemoveItems())} className='text-2xl cursor-pointer' />
          </div>
        </header>

        <>
          {
            cart.myItems.length == 0 ? <EmbtyBag emptybag={emptybag} Reverser={Reverser} isCartShown={isCartShown} /> : <ItemsOnCard cart={cart} dispatch={dispatch} />
          }
        </>
          <footer className='bg-white w-full bottom-0 p-3'>
            <div className='flex justify-between'>
              <p className='uppercase font-semibold text-base'>Subtotal</p>
              <span className="text-sm rounded bg-theme-cart text-slate-100 px-1 py-0.5">${sum}</span>
            </div>
            <p className='text-center font-medium text-sm my-2'>Taxes and Shipping Will Calculate At Shipping</p>
            <button className='w-full button-theme bg-theme-cart text-white'>Check Out</button>
          </footer>
      </div>
    </div>
  )
}

export default Card