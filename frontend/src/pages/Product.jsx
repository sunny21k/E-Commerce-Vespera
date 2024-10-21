import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContent'
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa6";
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {

  const {productId} = useParams()
  const {products, currency, addToCart} = useContext(ShopContext)
  const [productData, setProductData] = useState(false)
  const [size, setSize] = useState("")
  const [image, setImage] = useState('')

  const fetchProductData = async () => {

    products.map((item) => {
      if (item._id === productId) {
        setProductData(item)
        setImage(item.image[0])
        return null
      }
    })
  }

  useEffect(() => {
    fetchProductData()
  }, [productId, products])

  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      {/* Products data */}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>

        {/* Products image */}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {
              productData.image.map((item, index) => (
                <img onClick={() => setImage(item)} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' src={item} key={index} alt="" />
              ))
            }
          </div>
          <div className='w-full sm:w-[80%]'>
            <img className='w-full h-auto' src={image} alt="" />
          </div>
        </div>

        {/* Products info */}
        <div className='flex-1'>
            <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
            <div className='flex items-center gap-1 mt-2'>
              <FaStar className='w-3 5'/>
              <FaStar className='w-3 5'/>
              <FaStar className='w-3 5'/>
              <FaStar className='w-3 5'/>
              <FaRegStar className='w-3 5'/>
              <p className='pl-2'>(122)</p>
            </div>
            <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
            <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
            <div className='flex flex-col gap-4 my-8'>
              <p>Select Size</p>
              <div className='flex gap-2'>
                {
                  productData.sizes.map((item, index) => (
                    <button onClick={() => setSize(item)} className={`border py-2 px-4 bg-gray-100 ${item === size ? "border-gray-500" : ''}`} key={index}>{item}</button>
                  ))
                }
              </div>
            </div>
            <button onClick={() => addToCart(productData._id, size)} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'>ADD TO CART</button>
            <hr className='mt-8 sm:w-4/5'/>
            <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
                <p>100% Original oroduct.</p>
                <p>Cash on delivery is avaiable on this product.</p>
                <p>Easy return and exchange policy within 7 days.</p>
            </div>
        </div>
      </div>

        {/* Description */}

        <div className='mt-20'>
          <div className='flex'>
            <b className='border px-5 py-3 text-sm'>Description</b>
            <p className='border px-5 py-3 text-sm'>Reviews (122)</p>
          </div>
          <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
            <p>
                Elevate your style with our curated selection of premium fashion and accessories. 
                Whether you're searching for timeless classics or the latest trends, we have something for every occasion. 
                Shop now and discover pieces that are made to impress.
            </p>
            <p>
                Your destination for trendsetting fashion and unbeatable quality. From chic essentials to statement pieces, 
                we bring you the best styles to upgrade your wardrobe. Explore our collections today and redefine your personal style.
            </p>
          </div>
        </div>

          {/* Display related products */}

          <RelatedProducts category={productData.category} subCategory={productData.subCategory}/>

    </div>
  ) : <div className='opacity-0'>

  </div>
}

export default Product