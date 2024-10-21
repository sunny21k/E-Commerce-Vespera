import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContent'
import { IoMdArrowDropdown } from "react-icons/io";
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

const Collection = () => {

  const [filterProducts, setFilterProducts] = useState([])
  const [showFilter, setShowFilter] = useState(false)
  const [category, setCategory] = useState([])
  const [subCategory, setSubCategory] = useState([])
  const {products, search, showSearch} = useContext(ShopContext)
  const [sortType, setSortType] = useState('relavent')

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory(prev=> prev.filter(item => item !== e.target.value))
    } else {
      setCategory(prev => [...prev,e.target.value])
    }
  }

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory(prev=> prev.filter(item => item !== e.target.value))
    } else {
      setSubCategory(prev => [...prev,e.target.value])
    }
  }

  const applyFliter = () => {
    let productsCopy = products.slice()

    if (showSearch && search) {
      productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter(item => category.includes(item.category))
    }

    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory))
    }

    setFilterProducts(productsCopy)
  }

  const sortProduct = () => {
    let fpCopy = filterProducts.slice()

    switch (sortType) {
      case "low-high":
        setFilterProducts(fpCopy.sort((a, b) => (a.price - b.price)))
        break

        case "high-low":
          setFilterProducts(fpCopy.sort((a, b) => (b.price - a.price)))
          break

        default:
          applyFliter()
          break
    }
  }

  useEffect(() => {
    applyFliter()
  }, [category, subCategory, search, showSearch])

  useEffect(() => {
    sortProduct()
  }, [sortType])

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>

      {/*Filter Options */}

      <div className="min-w-60">
        <p onClick={() => setShowFilter(!showFilter)} className='my-2 text-cl flex items-center cursor-pointer gap-2'>FILTERS
          <IoMdArrowDropdown className={`sm:hidden ${showFilter ? "" : "-rotate-90" }`} />
        </p>

        {/*Category Filter */}

        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? " " : "hidden"} sm:block`}>
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className="flex gap-2">
              <input type="checkbox" className='w-3' value={"Men"} onChange={toggleCategory}/> Men
            </p>
            <p className="flex gap-2">
              <input type="checkbox" className='w-3' value={"Women"} onChange={toggleCategory}/> Women
            </p>
            <p className="flex gap-2">
              <input type="checkbox" className='w-3' value={"Kids"} onChange={toggleCategory}/> Kids
            </p>
          </div>
        </div>

        {/* SubCateogry filter */}

        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? " " : "hidden"} sm:block`}>
          <p className='mb-3 text-sm font-medium'>TYPE</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className="flex gap-2">
              <input type="checkbox" className='w-3' value={"Topwear"} onChange={toggleSubCategory}/> Topwear
            </p>
            <p className="flex gap-2">
              <input type="checkbox" className='w-3' value={"Bottomwear"} onChange={toggleSubCategory}/> Bottomwear
            </p>
            <p className="flex gap-2">
              <input type="checkbox" className='w-3' value={"Winterwear"} onChange={toggleSubCategory}/> Winterwear
            </p>
          </div>
        </div>
      </div>

      {/* Right side */}

      <div className='flex-1'>
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1={"ALL"} text2={"COLLECTIONS"}/>

          {/* Product sort */}
          
          <select onChange={(e) => setSortType(e.target.value)} className='border-2 border-gray-300 text-sm px-2'>
            <option value="relavent">Sort by: Relavent</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Short by: High to Low</option>
          </select>
        </div>

          {/* Mapping the products */}

          <div className="grid grid-cols2 md:grid-cols-3 lg:grid-cols-3 gap-4 gap-y-6">
            {
              filterProducts.map((item, index) => (
                <ProductItem key={index} name={item.name} id={item._id} price={item.price} image={item.image} />
              ))
            }
          </div>
      </div>
    </div>
  )
}

export default Collection