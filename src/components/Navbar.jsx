import { Menu } from 'lucide-react';
import React, { useState, useEffect } from 'react'
import chili from '../assets/chili-pepper.png'




function Header() {
  const [header, setHeader] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  useEffect(() => {
    const scrollYPos = window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    });
    //remove event
    return () => window.removeEventListener('scroll', scrollYPos)
  })

  return (
    <header className={`sticky mx-auto top-0 z-30 bg-orange-100 border-2 border-orange-200 transition-all ${header ? 'py-4 bg-orange-100 shadow-lg ' : 'py-6'} `}>
      <div className="max-w-7xl mx-auto ">
        {/* MobileNav */}
        <div className='flex md:hidden justify-between px-4'>
          <div href="/" className="text-primary  flex gap-1 items-center">
            <img src={chili} width={30} height={30} alt='chilli' />
            <h1 className='text-red-500 font-bold text-xl '>
              Spicy
              <span className="text-gray-800 font-semibold">Bites</span>
            </h1>
          </div>
          <div className='flex gap-8'>
            
            <button className='' onClick={() => setMobileNavOpen(prev => !prev)}>
              <Menu className='' />
            </button>
          </div>
        </div>
        {mobileNavOpen && (
        <ul 
        onClick={()=> setMobileNavOpen(false)}
        className='md:hidden p-4  bg-orange-100 rounded-lg font-semibold text-xl mt-2 flex flex-col gap-2 text-center'>
          <li to={'/'}>Home</li>
          <li to={'#menu'}>Menu</li>
          <li to={'#about'}>About</li>
          <li to={'#contact'}>Contact</li>
         
        </ul>

        )}

        {/* computerNav */}
        <div className='hidden md:flex justify-between items-center px-10 '>
          <div href="/" className="text-primary font-semibold flex gap-1 items-center">
            <img src={chili} className='w-10'/>
            <div className='text-red-500 text-xl font-bold'>
              Spicy
              <span className="text-gray-800 font-semibold">Bites</span>
            </div>
          </div>
          <div className='flex items-center gap-x-6'>
            {/* nav */}
            <ul className="flex items-center cursor-pointer gap-8 text-black font-semibold">
              <li className='hover:text-red-500 transition-all' to={'/'}>Home</li>
              <li className='hover:text-red-500 transition-all' to={'#menu'}>Menu</li>
              <li className='hover:text-red-500 transition-all' to={'#about'}>About</li>
              <li className='hover:text-red-500 transition-all' to={'#contact'}>Contact</li>
              <button className='bg-red-500 px-4 py-2 text-white rounded-lg'>Order Now</button>
            </ul>
          </div>
        </div>
      </div>
    </header>

  )
}

export default Header
