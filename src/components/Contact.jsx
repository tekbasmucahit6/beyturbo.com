import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";

function Contact() {
  return (
    <>
    <div className='flex justify-center items-center mt-10 mb-10'>
            <b className='bg-red-600 text-white p-5 shadow rounded'><h3>RANDEVU</h3></b>
    </div>
    <div className='grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 mt-9 mb-5'>




        <div className='hidden xl:flex lg:flex md:flex justify-center items-center'>
            <h1><GiNotebook className='text-9xl text-red-700'/></h1>
        </div>


        <div className='flex justify-center items center mt-10'>
            <div className='grid grid-rows-2 gap-10'>
                <div>
                    <a href="tel:551-412-38-77" className='flex items-center justify-center bg-yellow-500 text-white gap-5 shadow-lg p-4 rounded-2xl hover:text-blue-600'><FaPhoneAlt /> telefon randevusu</a>
                </div>
                <div className=''>
                    <a href="https://wa.me/905514123877?text=Merhaba,%20beyturbo%hakkında%20bilgi%20almak%20istiyorum;%20" target='blank' className='flex items-center justify-center bg-green-500 text-white gap-5 shadow-lg p-4 rounded-xl hover:text-blue-600'><FaWhatsapp /> whatsapp randevusu</a>
                </div>
            </div>
        </div>




    </div>
    <hr />
    </>
  )
}

export default Contact