import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

function Footer() {
  return (
    <div className='bg-red-700 mt-10 py-5'>
    
    <div className='grid grid-rows-3 grid-cols-1 xl:grid-rows-none xl:grid-cols-3 lg:grid-rows-none lg:grid-cols-3 md:grid-rows-none md:grid-cols-3 justify-center items-center'>
        {/* beyturbo logo design */}
        <div className='flex justify-center items-center'>
            <div className='flex '>
                <a href="http://beyturbo.com">
                    <div className='bg-white flex justify-center items-center p-5'>
                        <img src="../../public/beyturbo_gergedan_logo.jpeg" className='w-10' alt="" />
                        <b className=' rounded text-red-700 text-4xl'>BEY<i className='text-black text-3xl font-normal'>turbo</i></b>
                    </div>
                </a>
            </div>
        </div>
        {/* beyturbo logo design bitiş */}
        {/* mücahit tekbaş site link */}
        <div className='flex justify-center'>
            <strong className='text-white'>powered by <a href="https://mucahittekbas.com" className='text-yellow-500 font-extrabold hover:text-blue-500'>mucahittekbas.com</a></strong>
        </div>
        {/* mücahi tekbaş site link bitiş */}
        {/* beyturbo social media */}
        <div className='flex justify-center items-center'>
            <div className='grid grid-rows-2'>
                <div className='flex justify-center items-center text-center'>
                    <b className='text-white'>SOSYAL MEDYA</b>
                </div>
                <div className='bg-white rounded flex justify-center items-center p-3 border border-purple-500 hover:bg-purple-700 hover:text-white text-purple-700'>
                    <a href="https://www.instagram.com/bey.turbo/"><FaInstagram  className='text-2xl'/></a>
                </div>
            </div>
        </div>
        {/* beyturbo social media bitiş*/}

    </div>

    {/* slogan başlangıç */}
        <div className='text-center mt-10'>
            <i className='font-extrabold text-red-700 bg-white p-5'>'GÜÇ BİZDE,KONTROL SİZDE !'</i>
        </div>
    {/* slogan bitiş */}
    {/* copyright */}
    <div className='text-center mt-10 mb-4'>
        <i className='text-white font-bold'>beyturbo © tüm hakları saklıdır</i>
    </div>
    {/* copyright bitiş */}


    </div>
  )
}

export default Footer