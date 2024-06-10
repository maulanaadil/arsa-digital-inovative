'use client';

import Button from '@/components/button';
import React from 'react';
import { twMerge as cx } from 'tailwind-merge';

function ProjectCard({ layout = 'vertical', ...props }) {
  return (
    <>
      {layout === 'vertical' ? (
        <ProjectCardVertical {...props} />
      ) : (
        <ProjectCardHorizontal {...props} />
      )}
    </>
  );
}
function ProjectCardHorizontal({
  className,
  image,
  title,
  description,
  onClick,
}) {
  return (
    <div
      className={cx(
        'bg-pureWhite border border-lightGrey p-4 sm:p-8 h-fit min-w-[20.5rem] sm:w-full',
        className
      )}
    >
      <div className='flex flex-col items-center gap-4 sm:gap-6'>
        <div className='w-full h-[8.75rem] sm:h-[20rem]'>
          <img
            loading='lazy'
            src={image}
            className='h-full w-full object-cover'
            alt={title}
          />
        </div>
        <div className='h-full flex flex-col justify-between gap-4'>
          <div className='flex flex-col gap-3'>
            <p className='text-2xl sm:text-[1.75rem] font-bold text-black'>
              {title}
            </p>
            <p className='leading-5 text-black sm:text-base text-xs line-clamp-3 sm:line-clamp-none'>
              {description}
            </p>
          </div>
          <Button className='w-full' text='See Detail' onClick={onClick} />
        </div>
      </div>
    </div>
  );
}

function ProjectCardVertical({
  className,
  image,
  title,
  description,
  onClick,
}) {
  return (
    <div
      className={cx(
        'bg-pureWhite border border-lightGrey p-8 h-fit',
        className
      )}
    >
      <div className='flex items-center gap-10'>
        <div className='flex-[1_1_0%] h-full flex flex-col grow justify-between gap-[2.875rem]'>
          <div className='flex flex-col gap-3'>
            <p className='text-[3.25rem] font-bold text-black'>{title}</p>
            <p className='text-xl leading-7 text-black'>{description}</p>
          </div>
          <Button className='w-full' text='See Detail' onClick={onClick} />
        </div>
        <div className='w-[38.5rem] h-[27rem]'>
          <img
            loading='lazy'
            src={image}
            className='h-full w-full object-cover'
            alt={title}
          />
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
