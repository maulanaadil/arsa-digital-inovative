'use client';

import StarIcon from '@/assets/icons/StarIcon';
import { QUERY_TESTIMONIALS } from '@/graphql/queries';
import { useSuspenseQuery } from '@apollo/client';
import React from 'react';

export default function Testimonial() {
  const { data, isLoading } = useSuspenseQuery(QUERY_TESTIMONIALS);

  return (
    <div className='container mx-auto py-[7rem]'>
      <div className='flex flex-col items-center justify-center gap-6'>
        <p className='text-primary-orange font-bold uppercase'>Testimonials</p>
        <p className='text-black font-bold text-[3.25rem] text-center'>
          Here&apos;s What Our Customer Says
        </p>
      </div>
      <div className='mt-[4.125rem] grid grid-cols-2 gap-2 justify-self-center'>
        {data?.testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className='border border-lightGrey bg-pureWhite p-10'
          >
            <div className='w-full flex justify-between items-start'>
              <div className='flex items-center gap-5'>
                <div className='w-20 h-20 rounded-full overflow-clip'>
                  <img
                    src={testimonial.avatar.url}
                    alt={testimonial.name}
                    className='w-full h-full object-cover rounded-full'
                    loading='lazy'
                  />
                </div>
                <div className='flex flex-col'>
                  <p className='text-[1.75rem] font-bold text-black'>
                    {testimonial.name}
                  </p>
                  <p className='text-black'>{testimonial.country}</p>
                </div>
              </div>
              <div className='flex items-center gap-2'>
                {Array.from({ length: testimonial.rating }).map((_, index) => (
                  <StarIcon key={index} />
                ))}
              </div>
            </div>
            <p className='mt-[2.1875rem] font-medium text-darkGrey text-[1.6rem]'>
              &quot;{testimonial.review}&quot;
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
