"use client"

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import Image from 'next/image'
import { urlFor } from '@/app/lib/sanity'

interface HeroSectionProps {
    images: any[];
}

export function HeroSection({ images }: HeroSectionProps) {
    console.log(images);
  return (
    <div className="w-full h-[calc(100vh-6rem)] md:h-[80vh]">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop={true}
        className="w-full h-full"
      >
        {images.map((item: any, index: number) => (
        <SwiperSlide key={index} >
             <Image
                src={urlFor(item.image).url()}
                alt={item.name}
                layout="fill"
                objectFit="cover"
                className="w-full h-full"
              />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
