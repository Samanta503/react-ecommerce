import React from 'react'
import Navbar from '../Shared/Navbar/Navbar'
import Hero from '../Hero/Hero'
import './Home.css'
import TopProducts from '../TopProducts/TopProducts'

const Home = () => {
  return (
    <div className='bg-brand bg-brand-container'>
      <Navbar/>
      <div style={{maxHeight:'400px' }} className='container hero-container my-3'>
          <Hero/>
      </div>
      <div className="container">
         <TopProducts/>
      </div>
      
    </div>
  )
}

export default Home
