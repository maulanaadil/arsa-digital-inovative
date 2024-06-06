/* eslint-disable @next/next/no-img-element */
import StarIcon from '@/assets/icons/StarIcon';
import React from 'react';

export default function Testimonial() {
  return (
    <div className='container mx-auto py-[7rem]'>
      <div className='flex flex-col items-center justify-center gap-6'>
        <p className='text-primary-orange font-bold uppercase'>Testimonials</p>
        <p className='text-black font-bold text-[3.25rem] text-center'>
          Here&apos;s What Our Customer Says
        </p>
      </div>
      <div className='mt-[4.125rem] grid grid-cols-2 gap-2'>
        <div className='border border-lightGrey bg-pureWhite p-10'>
          <div className='w-full flex justify-between items-start'>
            <div className='flex items-center gap-5'>
              <div className='w-20 h-20 rounded-full overflow-clip'>
                <img
                  src='https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2861&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                  alt='testimonial1'
                  className='w-full h-full object-cover rounded-full'
                />
              </div>
              <div className='flex flex-col'>
                <p className='text-[1.75rem] font-bold text-black'>Client A</p>
                <p className='text-black'>Indonesia</p>
              </div>
            </div>
            <div className='flex items-center gap-2'>
              {Array.from({ length: 5 }).map((_, index) => (
                <StarIcon key={index} />
              ))}
            </div>
          </div>
          <p className='mt-[2.1875rem] font-medium text-darkGrey text-[1.6rem]'>
            “PT Arsa Digital Inovatif transformed our digital presence with a
            stunning website and effective digital marketing strategies. Their
            professionalism and expertise are unparalleled”
          </p>
        </div>
        <div className='border border-lightGrey bg-pureWhite p-10'>
          <div className='w-full flex justify-between items-start'>
            <div className='flex items-center gap-5'>
              <div className='w-20 h-20 rounded-full overflow-clip'>
                <img
                  src='https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2861&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                  alt='testimonial1'
                  className='w-full h-full object-cover rounded-full'
                />
              </div>
              <div className='flex flex-col'>
                <p className='text-[1.75rem] font-bold text-black'>Client B</p>
                <p className='text-black'>Indonesia</p>
              </div>
            </div>
            <div className='flex items-center gap-2'>
              {Array.from({ length: 5 }).map((_, index) => (
                <StarIcon key={index} />
              ))}
            </div>
          </div>
          <p className='mt-[2.1875rem] font-medium text-darkGrey text-[1.6rem]'>
            “The mobile app developed by PT Arsa Digital Inovatif has
            significantly improved our customer engagement. Their team was
            responsive and delivered on time”
          </p>
        </div>
      </div>
    </div>
  );
}
