import Button from '@/components/button';
import React from 'react';

export default function IntroCta({
  section,
  title,
  description,
  hasButton,
  onClick,
}) {
  return (
    <div className='container py-[7.5rem] flex flex-col gap-6 items-center justify-center'>
      <p className='font-bold text-primary-orange uppercase'>{section}</p>
      <div className='flex flex-col gap-4 items-center justify-center'>
        <p className='text-[4rem] text-black leading-[4.5rem] font-bold text-center '>
          {title}
        </p>
        <p className='text-xl text-black  text-center '>{description}</p>
      </div>
      {hasButton && (
        <Button
          text='Get Started'
          className='mt-[3.5rem] px-[9.125rem]'
          onClick={onClick}
        />
      )}
    </div>
  );
}
