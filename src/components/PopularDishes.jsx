import React from 'react'
import Card from './Card'

const PopularDishes = () => {
    return (
        <div className='py-10'>
            <div className='text-center max-w-7xl mx-auto'>
                <h1 className='text-4xl font-bold text-red-500'>Popular Dishes</h1>
                <p className='text-xl pt-2'>Check out our most popular and highly-rated dishes.</p>
                <div className='grid grid-cols-3 pt-11 gap-7'>
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </div>
    )
}

export default PopularDishes
