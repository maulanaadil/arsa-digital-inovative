'use client';

import React from 'react';
import Blogs from './blogs';
import CTAContent from '@/sections/cta';
import CTAContentIlustration from '@/assets/ilustration/blog-cta.svg';

export default function page() {
  return (
    <>
      <Blog />
      <Blogs />
      <CTAContent
        ilustraion={CTAContentIlustration}
        cta='Highlight Real-World Examples And Success Stories To Provide Valuable Context And Practical Applications'
        onClick={() => alert('get started now')}
        className='pt-5'
      />
    </>
  );
}

function Blog() {
  return (
    <div className='container pt-[3rem] pb-[4rem] flex gap-6 items-center grow'>
      <div className='w-full flex flex-col gap-8'>
        <div className='flex gap-3'>
          <div className='w-16 h-16 rounded-full overflow-clip'>
            <img
              src='https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2861&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              alt='team1'
              className='w-full h-full object-cover'
            />
          </div>
          <div className='flex flex-col gap-1'>
            <p className='text-xl font-bold text-black'>Abrahan Jhon</p>
            <p className='text-black'>Indonesia</p>
          </div>
        </div>
        <div className='flex flex-col gap-3'>
          <p className='text-[2rem] text-black font-bold leading-10'>
            Exploring the stories and identities of half-Japanese people online
            through photos
          </p>
          <p className='text-xl text-black line-clamp-5'>
            Tetsuro Miyazaki is an acclaimed professional photographer based in
            the Netherlands who specializes in portraits, events and street
            photography. Half-Japa...{' '}
            <span
              className='font-bold underline text-primary-blue'
              onClick={() => alert('see more')}
            >
              See More
            </span>
          </p>
        </div>
      </div>
      <div className='flex w-2/3'>
        <div className='w-[52.5rem] h-[45.125rem]'>
          <img
            src='https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2861&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            alt='team1'
            className='w-full h-full object-cover'
          />
        </div>
      </div>
    </div>
  );
}
