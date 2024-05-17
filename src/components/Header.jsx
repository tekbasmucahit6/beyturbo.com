import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";


function Header() {
  return (
    <>
        <div className='xl:bg-red-700 lg:bg-red-700 md:bg-red-700 sm:bg-white'>

          <div className='grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2'>
          {/* header beyturbo logo design */}
              <div className='flex justify-center xl:justify-normal lg:justify-normal md:justify-normal'>
                  <div className='xl:bg-white xl:p-5 lg:bg-white lg:p-5 md:bg-white md:p-5 flex'>
                      <img src="../../public/beyturbo_gergedan_logo.jpeg" className='w-10' alt="" />
                      <b className='text-4xl text-red-700 font-serif'>BEY</b>
                      <i className='text-2xl mt-2 font-normal'>turbo</i>
                  </div>
              </div>
            {/* header beyturbo logo design bitişi */}

              <div className='flex justify-center mt-10 mr-5 xl:justify-end xl:mt-0 lg:justify-end lg:mt-0 md:justify-end md:mt-0 '>
                    {/* beyturbo social media */}
            <div className='flex justify-center items-center'>
              {/* instagram link başlangıç */}
              <a href="https://www.instagram.com/bey.turbo/">
                <div className='bg-white rounded-full flex justify-center items-center p-3 border border-purple-500 hover:bg-purple-700 hover:text-white text-purple-700'>
                    <FaInstagram  className='text-2xl'/>
                </div>
              </a>

            
            </div>
            {/* beyturbo social media bitiş*/}
              </div>
          </div>

        </div>
    </>
  )
}

export default Header