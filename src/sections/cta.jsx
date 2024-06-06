'use client';

import Button from '@/components/button';
import Logo from '@/components/logo';
import Image from 'next/image';
import React from 'react';
import { twMerge as cx } from 'tailwind-merge';

export default function CTA({ ilustraion, cta, onClick, className }) {
  return (
    <div
      className={cx(
        'container py-[8rem] flex flex-col items-center gap-8 justify-center',
        className
      )}
    >
      <Logo size='large' />
      <Image src={ilustraion} alt={cta} />
      <p className='font-bold text-[3.25rem] text-center'>{cta}</p>

      <Button
        text='Get Started Now'
        onClick={onClick}
        className='w-[25.5rem]'
      />
    </div>
  );
}
