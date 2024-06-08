'use client';

import Button from '@/components/button';
import { SERVICES } from '@/constants/services';
import IntroCta from '@/sections/intro-cta';
import React from 'react';
import CTAContent from '@/sections/cta';
import CTAContentIlustration from '@/assets/ilustration/service-cta.svg';

import { twMerge as cx } from 'tailwind-merge';

export default function Service() {
  return (
    <>
      <IntroCta
        section='Our Services'
        title='Comprehensive Development Services'
        description={
          <span>
            From initial concept to final deployment, our comprehensive
            development services deliver custom software solutions <br />{' '}
            tailored to meet your unique business needs, ensuring excellence and
            innovation.
          </span>
        }
      />
      <Services />
      <Works />
      <CTAContent
        ilustraion={CTAContentIlustration}
        cta='Custom Software Solutions From Concept To Deployment, Tailored For Your Unique Business Needs.'
        onClick={() => alert('get started now')}
      />
    </>
  );
}

function Services() {
  return (
    <div className='container pb-[10rem] grid grid-cols-3 justify-self-center gap-6'>
      {SERVICES.map((service) => (
        <div
          key={service.title}
          className={cx(
            'w-full h-[30rem] relative',
            service.title === 'UI/UX Design' &&
              'col-span-3 w-[24rem] justify-self-center'
          )}
        >
          <div className='absolute bg-black/60 inset-0 z-20'></div>
          <img
            src='https://images.unsplash.com/photo-1717661622547-c5da556b161d?q=80&w=2847&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            className='w-full h-full object-cover absolute inset-0 z-10'
            alt=''
          />
          <div className='h-full absolute flex flex-col z-30 justify-between p-9'>
            <div className='inset-0 flex flex-col gap-1'>
              <p className='font-bold text-white text-[1.75rem] text-center'>
                {service.title}
              </p>
              <p className='text-white text-center leading-5'>
                We create responsive, user-friendly websites that not only look
                great but also provide a seamless user experience. Our web
                development services ensure your online presence is robust and
                effective.
              </p>
            </div>
            <Button
              text='Read More'
              size='medium'
              className='w-[12rem] py-5 px-0 mx-auto'
              onClick={() => alert('read more')}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

function Works() {
  return (
    <div className='container pb-[10rem] flex flex-col gap-6'>
      <p className='font-bold text-primary-orange uppercase text-center'>
        Our Works
      </p>
      <div className='flex flex-col gap-4 items-center justify-center'>
        <p className='text-[3.25rem] text-black leading-[4.5rem] font-bold text-center whitespace-nowrap'>
          Real-World Solutions and Proven Results
        </p>
      </div>
      <div className='mt-[4rem] grid grid-cols-5 gap-6'>
        <div className='relative h-[31.25rem] col-span-3 p-6'>
          <img
            src='https://images.unsplash.com/photo-1717661622547-c5da556b161d?q=80&w=2847&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            alt='bg-work'
            className='h-full w-full absolute inset-0 z-10'
          />
          <div className='inset-x-6 absolute z-20 bottom-6 p-4 flex gap-6 grow items-end bg-white'>
            <div className='flex-1 flex flex-col gap-3'>
              <p className='text-black font-bold text-[1.75rem]'>ROB AI</p>
              <p className='text-darkGrey'>
                AI apps automate tasks, enhance decisions, personalize
                experiences, and improve efficiency across industries.
              </p>
            </div>
            <div className='px-3.5 py-[21px] bg-primary-orange text-black'>
              <svg
                width='22'
                height='8'
                viewBox='0 0 22 8'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M3 6C1.89543 6 1 5.1046 1 4C1 2.8954 1.89543 2 3 2C4.10457 2 5 2.8954 5 4C5 5.1046 4.10457 6 3 6Z'
                  stroke='#1E1E1E'
                  stroke-width='1.5'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
                <path
                  d='M8 4H21M21 4L18 1M21 4L18 7'
                  stroke='#1E1E1E'
                  stroke-width='1.5'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
              </svg>
            </div>
          </div>
        </div>
        <div className='relative h-[31.25rem] col-span-2 p-6'>
          <img
            src='https://images.unsplash.com/photo-1717661622547-c5da556b161d?q=80&w=2847&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            alt='bg-work'
            className='h-full w-full absolute inset-0 z-10'
          />
          <div className='inset-x-6 absolute z-20 bottom-6 p-4 flex gap-6 grow items-end bg-white'>
            <div className='flex-1 flex flex-col gap-3'>
              <p className='text-black font-bold text-[1.75rem]'>ROB AI</p>
              <p className='text-darkGrey'>
                AI apps automate tasks, enhance decisions, personalize
                experiences, and improve efficiency across industries.
              </p>
            </div>
            <div className='px-3.5 py-[21px] bg-primary-orange text-black'>
              <svg
                width='22'
                height='8'
                viewBox='0 0 22 8'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M3 6C1.89543 6 1 5.1046 1 4C1 2.8954 1.89543 2 3 2C4.10457 2 5 2.8954 5 4C5 5.1046 4.10457 6 3 6Z'
                  stroke='#1E1E1E'
                  stroke-width='1.5'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
                <path
                  d='M8 4H21M21 4L18 1M21 4L18 7'
                  stroke='#1E1E1E'
                  stroke-width='1.5'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
