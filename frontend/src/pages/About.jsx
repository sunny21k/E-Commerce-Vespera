import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/frontend_assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <div>
        <div className='text-2xl text-center pt-8 border-t'>
          <Title text1={"ABOUT"} text2={"US"}/>
        </div>

        <div className='my-10 flex flex-col md:flex-row gap-16'>
          <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
            <p>At Vespera, we are passionate about bringing you the finest selection of products designed to inspire your everyday life. Our mission is to offer high-quality, stylish, and functional items that cater to your unique tastes and needs. From fashion to home essentials, we carefully curate collections that blend elegance with practicality.</p>
            <p>We believe in excellent customer service, a seamless shopping experience, and ensuring that every product meets the highest standards of quality. Whether you're here to shop the latest trends or find timeless pieces, we're here to make your experience enjoyable and satisfying.</p>
            <p>Thank you for being part of our journey, and we look forward to serving you!</p>
            <b className='text-gray-800'>Our Mission</b>
            <p>Our mission is to provide high-quality, thoughtfully curated products that inspire and enhance your everyday life. We aim to deliver exceptional value, style, and service with every purchase, making your shopping experience seamless and enjoyable.</p>
          </div>
        </div>
        <div className="text-xl py-4">
          <Title text1={"WHY"} text2={"CHOOSE US"}/>
        </div>

        <div className='flex flex-col md:flex-row text-sm mb-20'>
          <div className='border px-10 md:px-16 sm:py-20 flex flex-col gap-5'>
            <b>Quality Assurance:</b>
            <p className='text-gray-600'>Committed to excellence, we ensure every product meets the highest standards of quality and durability for your satisfaction.</p>
          </div>
          <div className='border px-10 md:px-16 sm:py-20 flex flex-col gap-5'>
            <b>Convienence:</b>
            <p className='text-gray-600'>Enjoy a seamless shopping experience with easy navigation, fast checkout, and reliable delivery—convenience at your fingertips.</p>
          </div>
          <div className='border px-10 md:px-16 sm:py-20 flex flex-col gap-5'>
            <b>Exceptional Customer Service:</b>
            <p className='text-gray-600'>Experience exceptional customer service with dedicated support, ensuring your needs are met every step of the way.</p>
          </div>
        </div>
        <NewsLetterBox />
    </div>
  )
}

export default About