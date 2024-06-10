'use client';

import Button from '@/components/button';
import Logo from '@/components/logo';
import Aos from 'aos';
import Image from 'next/image';
import React, { useEffect } from 'react';
import { twMerge as cx } from 'tailwind-merge';

export default function CTA({ ilustraion, cta, onClick, className }) {
  useEffect(() => {
    Aos.init({
      once: true,
    });
  }, []);

  return (
    <div
      className={cx(
        'container py-10 sm:py-[8rem] flex flex-col items-center gap-4 sm:gap-8 justify-center',
        className
      )}
      data-aos='fade-up'
    >
      <Logo size='large' className='w-[10rem] sm:w-auto h-[2.5rem] sm:h-auto' />
      <Image
        src={ilustraion}
        alt={cta}
        className='w-[14.2rem] sm:w-auto h-[15.3125rem] sm:h-auto'
      />
      <p className='font-bold text-2xl sm:text-[3.25rem] leading-auto sm:leading-[3.9rem] text-center'>
        {cta}
      </p>

      <Button
        text='Get Started Now'
        onClick={onClick}
        className='w-[10rem] sm:w-[25.5rem]'
      />
    </div>
  );
}
