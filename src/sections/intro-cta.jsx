import Button from '@/components/button';
import useResponsive from '@/hooks/useResponse';
import React from 'react';
import { twMerge as cx } from 'tailwind-merge';

export default function IntroCta({
  section,
  title,
  description,
  hasButton,
  onClick,
}) {
  const isMobile = useResponsive('sm');

  return (
    <div
      className={cx(
        'container flex flex-col gap-6 items-center justify-center px-6 sm:px-0',
        isMobile ? 'py-10' : 'py-[7.5rem]'
      )}
    >
      <p className='font-bold text-primary-orange text-xs sm:text-base uppercase'>
        {section}
      </p>
      <div className='flex flex-col gap-3 sm:gap-4 items-center justify-center'>
        <p className='text-[1.75rem] sm:text-[4rem] text-black leading-[2.125rem] sm:leading-[4.5rem] font-bold text-center'>
          {title}
        </p>
        <p className='text-xs sm:text-xl text-black text-center '>
          {description}
        </p>
      </div>
      {hasButton && (
        <Button
          text='Get Started'
          className='mt-0 sm:mt-[3.5rem] px-[2.75rem] sm:px-[9.125rem]'
          onClick={onClick}
        />
      )}
    </div>
  );
}
