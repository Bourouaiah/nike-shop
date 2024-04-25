import React from 'react';
import Title from './utils/Title';
import SaleItem from './utils/SaleItem';

function Sales({ sales: { title, items }, ifExist, dispatch, Reverser, isCartShown }) {
  return (
    <div className='sm:m-[15px] md:m-[25px] lg:m-[30px] xl:m-[40px] m-[50px] z-20 relative'>
      <Title title={title} />
      <div className={`grid ${ifExist ? 'sm:grid-cols-1 md:grid-cols-1 xl:grid-cols-2 grid-cols-3' : 'sm:grid-cols-1 md:grid-cols-1 xl:grid-cols-2 grid-cols-4'} gap-[30px]`}>
        {items.map((item) => {
          return (
            <SaleItem dispatch={dispatch} Reverser={Reverser} key={item.id} item={item} ifExist={ifExist} isCartShown={isCartShown} />
          )
        })}
      </div>
    </div>
  )
}

export default Sales