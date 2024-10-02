import React from 'react'
import pizza from "../assets/pizza.webp"
import playStore from "../assets/playstore.png"
import appStore from "../assets/appstore.png"
import star from "../assets/star.png"
import starOutline from "../assets/star-outline.png"
import time from "../assets/time.png"
// import tomato from "../assets/tomato.png"
import cabbage from "../assets/cabbage.png"
import tomatocut from "../assets/tomatocut.png"


const Hero = () => {
    return (
        <div className=' bg-orange-50 h-[600px] '>
            <div className='flex lg:flex-row flex-col items-center justify-center p-5 lg:max-w-7xl mx-auto relative'>
                <div className='lg:w-1/2 lg:space-y-6 lg:px-10 relative z-20' >
                    <div className='flex gap-0 lg:gap-2'>
                        <img src={playStore} alt="playstore" className='w-28 h-10' />
                        <img src={appStore} alt="appstore" className='w-28 h-10' />
                    </div>
                    <div className='z-10'>

                    </div>
                    <h1 className='font-bold text-4xl lg:text-6xl tracking-normal mt-4 lg:mt-0'>
                        
                       <span className='text-red-500'>Delicious</span>  Meals Delivered to Your Doorsteps.</h1>
                    <p className='text-sm text-gray-600 my-3'>Discover a world of culinary delights with our food delivery service. Enjoy fast, reliable delivery and a wide selection of mouthwatering dishes.</p>
                    <div className='flex gap-3'>
                        <button className='bg-red-500 px-3 py-2 z-20 rounded-lg text-white hover:bg-red-600 hover:scale-110 transition-all'>Order Now</button>
                        <button className='bg-white px-3 py-2 rounded-lg border z-20 border-red-500 text-red-500 hover:bg-white hover:scale-110 transition-all'>Contact Now</button>
                    </div>

                </div>
                <div className='lg:w-1/2 w-[275px]  relative'>
                    <img src={pizza} alt="food" className=' mx-auto spin ' />
                    <div variant="outline" className='bg-red-50 gap-1 text-lg flex border-red-200 border  items-center absolute bottom-16  lg:right-14 px-4 py-2 rounded-full'>
                        <img src={time} alt='time' className='lg:w-12 lg:h-12 w-6' />
                        <p className='leading-4 text-sm font-semibold'>Super Fast<br /> Delivery</p>
                    </div>
                    <img src={tomatocut} alt="tomato" className='absolute hidden lg:block lg:bottom-20 lg:left-4 lg:w-32 w-20'/>
                    <div variant="outline" className='bg-red-50 leading-none flex flex-col gap-1 text-lg px-4 py-2 border-red-200 border  absolute top-10 right-36 rounded-full items-center'>
                        <p className='leading-4 text-sm font-semibold '>Good Rating</p>
                        <div className='flex '>
                            <img src={star} width={15} height={15} alt='star' />
                            <img src={star} width={15} height={15} alt='star' />
                            <img src={star} width={15} height={15} alt='star' />
                            <img src={star} width={15} height={15} alt='star' />
                            <img src={starOutline} width={15} height={15} alt='star' />

                        </div>
                    </div>
                    <div variant="outline" className=' flex flex-col bg-red-50 border-red-200 border  px-6 py-2 absolute top-32 left-44 lg:top-16 lg:left-24  rounded-full items-center'>
                        {/* <Image src={'/restaurant.png'} width={28} height={25} /> */}
                        <h1 className=' text-red-500 lg:text-2xl text-xl font-bold'>100+ </h1>
                        <p className=' text-sm font-semibold'>Restaurants </p>
                    </div>
                </div>
                {/* <img src={tomato} alt="tomato" className='absolute top-1 left-0 w-20 ' /> */}
                {/* <img src={tomato} alt="tomato" className='absolute top-1 left-20 w-20 ' />
            <img src={tomato} alt="tomato" className='absolute top-1 left-30 w-20 ' />
            <img src={tomato} alt="tomato" className='absolute top-1 left-40 w-20 ' /> */}
                <img src={cabbage} alt="cabbage" className='absolute top-72 lg:top-[410px] left-5 z-10 lg:w-44 w-20' />
            </div>
        </div>

    )
}

export default Hero
