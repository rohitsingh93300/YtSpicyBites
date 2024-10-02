import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import PopularDishes from './components/PopularDishes'
import KeyFeatures from './components/KeyFeatures'
import Partners from './components/Partners'
import Testimonial from './components/Testimonial'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <PopularDishes/>
      <Partners/>
      <KeyFeatures/>
      <Testimonial/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
