import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import { Quote, Star } from 'lucide-react';

const Testimonial = () => {

    const testimonials = [
        {
          id: 1,
          name: "Emily Johnson",
          rating: 5,
          text: "The flavors at this restaurant are absolutely incredible! Every dish I've tried has been a delightful experience."
        },
        {
          id: 2,
          name: "Michael Chen",
          rating: 4,
          text: "Great food and excellent service. The staff was very attentive and knowledgeable about the menu."
        },
        {
          id: 3,
          name: "Sarah Thompson",
          rating: 5,
          text: "This place is a hidden gem! The attention to detail in both the food presentation and taste is remarkable."
        },
        {
          id: 4,
          name: "David Rodriguez",
          rating: 5,
          text: "I've been to many restaurants, but this one stands out. The ambiance, the service, and most importantly, the food are all top-notch."
        },
        {
          id: 5,
          name: "Lisa Patel",
          rating: 4,
          text: "A wonderful dining experience! The fusion of flavors in their signature dishes is truly unique and delightful."
        }
      ]

    return (
        <div className='py-10 '>
                <h1 className='text-center text-3xl lg:text-4xl font-bold'>What Our Customers Say</h1>
            <div className=' max-w-6xl mx-auto py-10 px-3 '>
                <Swiper
                   style={{
                    "--swiper-pagination-color": "#EF4444",
                    "--swiper-pagination-bullet-inactive-color": "#999999",
                    "--swiper-pagination-bullet-inactive-opacity": "1",
                    "--swiper-pagination-bullet-size": "10px",
                    "--swiper-pagination-bullet-horizontal-gap": "6px"
                  }}
                    modules={[Pagination, Autoplay]}
                    loop={true}
                    speed={600}
                    autoplay={{delay:5000}}
                    slidesPerView={3}
                    spaceBetween={30}
                    breakpoints={{
                        320: { slidesPerView: 1 },
                        480: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                      }}
                    pagination={{
                        el: ".swiper-pagination",
                        type: "bullets",
                        clickable: true,
                        
                        
                    }}
                    className="mySwiper"
                >
                    {
                        testimonials.map((item)=> {
                            return <SwiperSlide key={item.id}>
                            <div className='border border-gray-400 shadow-md shadow-orange-500 rounded-lg flex flex-col p-4'>
                                {item.rating === 4 ? ( <div className='flex'>
                                    <Star fill='true' />
                                    <Star fill='true' />
                                    <Star fill='true' />
                                    <Star fill='true' />
                                    <Star />
                                </div>):( <div className='flex'>
                                    <Star fill='true' />
                                    <Star fill='true' />
                                    <Star fill='true' />
                                    <Star fill='true' />
                                    <Star fill='true' />
                                </div>)}
                               
                                <p className='py-3'>{item.text}</p>
                                <div className='flex justify-between items-center'>
                                  <div>
                                  <h3 className='font-semibold text-red-500 text-lg'>{item.name}</h3>
                                  <p className='text-sm mt-1'>CEO, Webelite Builders</p>
                                  </div>
                                  <Quote className='text-red-400'/>
                                </div>
                               
    
                            </div>
                        </SwiperSlide>
                        })
                    }
                    <div className='swiper-pagination my-10 gap-1 relative'></div>
                </Swiper>
            </div>

        </div>
    )
}

export default Testimonial
