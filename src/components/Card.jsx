import React from 'react'
import pizza1 from "../assets/pizza1.png"

const Card = () => {
  return (
    <div className='rounded-lg  border-red-500 flex flex-col items-center space-y-4 py-4 px-6 bg-orange-50 shadow-orange-500 shadow-md'>
      <img src={pizza1} alt="food" className='w-48'/>
      <h2 className='text-2xl font-semibold'>Pepporoni Pizza</h2>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam animi nostrum corporis aut deleniti! Nam minus explicabo sunt vel. Animi.</p>
      <button className='px-3 py-2 bg-red-500 text-white rounded-lg w-full'>Order Now</button>
    </div>
  )
}

export default Card
