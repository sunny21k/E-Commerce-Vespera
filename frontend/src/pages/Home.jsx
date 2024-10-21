import React from 'react'
import Front from '../components/Front'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
import Policy from '../components/Policy'
import NewsLetterBox from '../components/NewsLetterBox'

const Home = () => {
  return (
    <div>
        <Front/>
        <LatestCollection />
        <BestSeller />
        <Policy />
        <NewsLetterBox />
    </div>
  )
}

export default Home