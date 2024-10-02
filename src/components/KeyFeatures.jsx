import React from 'react'
import chef from "../assets/chef.png"
import playstore from "../assets/playstore.png"
import appstore from "../assets/appstore.png"
import chefcook from '../assets/Chefcook.json'
import Lottie from 'lottie-react'

const KeyFeatures = () => {
  return (
    <div className='bg-orange-50 py-20'>
      <div className='flex mx-auto max-w-7xl'>
        <div className='w-1/2 flex items-center justify-center'>
            {/* <img src={chef} alt="chef" className='w-64'/> */}
            <Lottie animationData={chefcook} className='w-[500px]'/>
        </div>
        <div className='w-1/2 flex flex-col space-y-7 justify-center '>
            <h2 className='text-red-600 font-semibold text-xl'>KEY FEATURES</h2>
            <h1 className='text-6xl font-bold'>Enjoy a Seamless <span className='text-red-500'>Ordering</span> Experience</h1>
            <p>From fast delivery to a wide selection of cuisines, our food ordering service has everything you need to satisfy your cravings.</p>
            <div className='flex gap-3'>
                <img src={playstore} alt="playstore" className='w-30 h-10'/>
                <img src={appstore} alt="appstore" className='w-30 h-10'/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default KeyFeatures
