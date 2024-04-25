import React from 'react'

function Footer({ footerAPI: { titles, links } }) {
    return (
        <footer className='bg-theme py-[30px] px-0 sm:px-[30px]'>
            <div className='grid justify-center gap-4'>
                <ul className='grid grid-cols-3 gap-7'>
                    {
                        titles.map((item, index) => {
                            return (
                                <li key={index} className='font-bold w-full text-white'>{item.title}</li>
                            )
                        })
                    }
                </ul>
                <div className='grid grid-cols-3 gap-7'>
                    {
                        links.map((list, index) => {
                            return (
                                <ul className='flex flex-col gap-2' key={index}>
                                    {
                                        list.map((el, index) => {
                                            return (
                                                <li className='text-white w-full cursor-pointer' key={index}>{el.link}</li>
                                            )
                                        })
                                    }
                                </ul>
                            )
                        })
                    }
                </div>
            </div>
            <p className='text-center text-white mt-[40px]'>Developed By Bourouaiah Abdelaziz :)</p>
        </footer >
    )
}

export default Footer;