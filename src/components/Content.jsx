import React from 'react'
import { MdSupportAgent } from "react-icons/md";
import { FaStopwatch } from "react-icons/fa6";
import { FiAward } from "react-icons/fi";
import { GrCurrency } from "react-icons/gr";

function Content() {
  return (
    <>
        <div className='flex justify-center items-center mt-10'>
            <b className='bg-red-600 text-white p-5 shadow rounded'><h3>SUNDUĞUMUZ HİZMETLER</h3></b>
        </div>
        <div className='grid grid-cols-1 grid-rows-none xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 gap-10 mt-10'>
           <div className='grid grid-rows-2 justify-items-center items-center'>
                <MdSupportAgent className='text-5xl text-green-600'/>
                <b className='hover:text-cyan-600'>teknik destek</b>
           </div>

           <div className='grid grid-rows-2 justify-items-center items-center'>
                <FaStopwatch className='text-5xl text-gray-600'/>
                <b className='hover:text-cyan-600'>kısa çözümler</b>
           </div>

           <div className='grid grid-rows-2 justify-items-center items-center'>
                <FiAward className='text-5xl text-yellow-600' />
                <b className='hover:text-cyan-600'>kaliteli hizmet</b>
           </div>

           <div className='grid grid-rows-2 justify-items-center items-center'>
                <GrCurrency className='text-5xl text-green-500' />
                <b className='hover:text-cyan-600'>uygun maliyet</b>
           </div>
        </div>
        <hr />
    </>
  )
}

export default Content