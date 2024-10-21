import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContent'
import { IoSearchOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { useLocation } from 'react-router-dom';

const SearchBar = () => {

    const {search, setSearch, showSearch, setShowSearch} = useContext(ShopContext)
    const [visible, setVisible] = useState(false)
    const location = useLocation()

    useEffect(() => {
        if (location.pathname.includes("collection")) {
            setVisible(true)
        } else {
            setVisible(false)
        }
    }, [location])

  return showSearch && visible ? (
    <div className='border-t border-b bg-gray-50 text-center'>
        <div className='inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2'>
            <input value={search} onChange={(e) => setSearch(e.target.value)} className='flex-1 outline-none bg-inherit text-sm' type="text" placeholder='Search'/>
            <IoSearchOutline className='w-5 h-8' />
        </div>
        <RxCross2 onClick={() => setShowSearch(false)} className='inline w-6 cursor-pointer h-8'/>
    </div>
  ) : null
}

export default SearchBar