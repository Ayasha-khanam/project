import React from 'react'
import Categories from '../components/Categories'
import Designs from '../components/Designs'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import NewsLatter from '../components/NewsLatter'
import Slider from '../components/Slider'


const Home = () => {
  return (
    <div>
      <Navbar/>
      <Slider/>
      <Categories/>
      <Designs/>
      <NewsLatter/>
      <Footer/>
    </div>
  )
}

export default Home

