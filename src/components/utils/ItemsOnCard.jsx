import React from 'react'
import ItemOnCard from './ItemOnCard'

function ItemsOnCard({ cart, dispatch }) {
  
  return (
    <div className='w-full grow z-0 blur-effect-theme overflow-scroll scrollbar-hide pb-[30px] p-5 flex flex-col gap-4'>
      {
        (cart.myItems).map((item, index) => {
          return (
            <ItemOnCard item={item} key={index} dispatch={dispatch} />
          )
        })
      }
    </div>
  )
}

export default ItemsOnCard