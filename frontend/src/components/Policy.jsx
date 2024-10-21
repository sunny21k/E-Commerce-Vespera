import React from 'react'
import { TbArrowsExchange } from "react-icons/tb";
import { LuCheckCircle } from "react-icons/lu";
import { PiHeadset } from "react-icons/pi";

const Policy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>
        <div>
            <TbArrowsExchange className='w-12 m-auto mb-5 h-10' />
            <p className="font-semibold">Easy Exchange Policy</p>
            <p className="text-gray-400">We offer hassle free exchange policy</p>
        </div>
        <div>
            <LuCheckCircle className='w-12 m-auto mb-5 h-10' />
            <p className="font-semibold">7 Days Return Policy</p>
            <p className="text-gray-400">We provide 7 days free return policy</p>
        </div>
        <div>
            <PiHeadset className='w-12 m-auto mb-5 h-10' />
            <p className="font-semibold">Base Customer Support</p>
            <p className="text-gray-400">We provide 24/7 customer support</p>
        </div>
    </div>
  )
}

export default Policy