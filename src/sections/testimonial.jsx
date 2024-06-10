'use client';

import StarIcon from '@/assets/icons/StarIcon';
import { QUERY_TESTIMONIALS } from '@/graphql/queries';
import useResponsive from '@/hooks/useResponse';
import { useSuspenseQuery } from '@apollo/client';
import React from 'react';

export default function Testimonial() {
  const isMobile = useResponsive('sm');
  const { data, isLoading } = useSuspenseQuery(QUERY_TESTIMONIALS);

  return (
    <div className='container mx-auto px-4 sm:px-4 py-10 sm:py-[7rem]'>
      <div className='flex flex-col items-center justify-center gap-3 sm:gap-6'>
        <p className='text-primary-orange font-bold uppercase sm:text-base text-xs'>
          Testimonials
        </p>
        <p className='text-black font-bold text-2xl sm:text-[3.25rem] text-center'>
          Here&apos;s What Our Customer Says
        </p>
      </div>
      <div className='mt-6 sm:mt-[4.125rem] grid grid-cols-2 gap-2 justify-self-center'>
        {data?.testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className='border border-lightGrey bg-pureWhite p-4 sm:p-10 sm:col-span-1 col-span-2'
          >
            <div className='w-full flex justify-between items-start'>
              <div className='flex items-center gap-2 sm:gap-5'>
                <div className='w-10 sm:w-20 h-10 sm:h-20 rounded-full overflow-clip'>
                  <img
                    src={testimonial.avatar.url}
                    alt={testimonial.name}
                    className='w-full h-full object-cover rounded-full'
                    loading='lazy'
                  />
                </div>
                <div className='flex flex-col'>
                  <p className='text-base sm:text-[1.75rem] font-bold text-black'>
                    {testimonial.name}
                  </p>
                  <p className='sm:text-base text-xs text-black'>
                    {testimonial.country}
                  </p>
                </div>
              </div>
              <div className='flex items-center gap-2'>
                {Array.from({ length: testimonial.rating }).map((_, index) => (
                  <StarIcon
                    key={index}
                    className='sm:w-auto sm:h-auto w-3.5 h-3.5'
                  />
                ))}
              </div>
            </div>
            <p className='mt-4 sm:mt-[2.1875rem] font-medium text-darkGrey text-xs sm:text-[1.6rem] sm:leading-9'>
              &quot;{testimonial.review}&quot;
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
