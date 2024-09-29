import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import PopularDishes from './components/PopularDishes'
import KeyFeatures from './components/KeyFeatures'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <PopularDishes/>
      <KeyFeatures/>
    </div>
  )
}

export default App
