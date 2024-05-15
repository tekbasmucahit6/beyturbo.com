import React from 'react'

function Header() {
  return (
    <>
        <div className='xl:bg-red-700 lg:bg-red-700 md:bg-red-700 sm:bg-white'>
            <div className='flex justify-center xl:justify-normal lg:justify-normal md:justify-normal'>
                <div className='xl:bg-white xl:p-5 lg:bg-white lg:p-5 md:bg-white md:p-5 flex'>
                    <img src="../../public/beyturbo_gergedan_logo.jpeg" className='w-10' alt="" />
                    <b className='text-4xl text-red-700 font-serif'>BEY</b>
                    <i className='text-2xl mt-2 font-normal'>turbo</i>
                </div>
            </div>
        </div>
    </>
  )
}

export default Header