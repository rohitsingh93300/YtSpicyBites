import React from 'react'
import chili from '../assets/chili-pepper.png'

const Navbar = () => {
    return (
        <div className='px-16 py-5 bg-orange-100 border-b border-orange-200 shadow-orange-900 shadow-lg '>
            <div className='flex justify-between max-w-7xl mx-auto'>
                <div className='flex items-center gap-1'>
                    <img src={chili} alt="Logo" className='w-7 h-7'/>
                    <h1 className='text-2xl font-bold text-red-500'>Spicy<span className='text-black'>Bites</span> </h1>
                </div>
                <ul className='flex gap-5 text-xl font-semibold cursor-pointer items-center'>
                   <li className='hover:text-orange-700'>Home</li>
                   <li className='hover:text-orange-700'>About</li>
                   <li className='hover:text-orange-700'>Service</li> 
                   <li className='hover:text-orange-700'>Contact Us</li> 
                   <button className='bg-red-500 px-3 py-2 rounded-lg text-white hover:bg-red-600 hover:scale-110 transition-all'>Order Now</button>
                </ul>
            </div>

        </div>
    )
}

export default Navbar
