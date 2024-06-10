'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { twMerge as cx } from 'tailwind-merge';
import CTAContent from '@/sections/cta';
import CTAContentIlustration from '@/assets/ilustration/about-cta.svg';
import IntroCta from '@/sections/intro-cta';
import { useSuspenseQuery } from '@apollo/client';
import { QUERY_ABOUTPAGE } from '@/graphql/queries';
import { useRouter } from 'next/navigation';
import { RichText } from '@graphcms/rich-text-react-renderer';
import useResponsive from '@/hooks/useResponse';

export default function Aboutpage() {
  const isMobile = useResponsive('sm');
  const router = useRouter();
  const { data, isLoading } = useSuspenseQuery(QUERY_ABOUTPAGE);

  return (
    <>
      <IntroCta
        section='Who we are?'
        title={
          <span>
            Where Engineering Meets <br /> Exceptional App Development
          </span>
        }
        description={
          isMobile ? (
            <span>
              Combining engineering expertise with innovative app development,
              we create cutting-edge solutions tailored to your needs. Our
              dedication to precision and performance ensures your projects
              excel in the ever-evolving technological landscape
            </span>
          ) : (
            <span>
              Combining engineering expertise with innovative app development,
              we create cutting-edge <br /> solutions tailored to your needs.
              Our dedication to precision and performance ensures your <br />{' '}
              projects excel in the ever-evolving technological landscape
            </span>
          )
        }
      />
      <Image
        src='/about.jpeg'
        alt='Picture of the author'
        width={0}
        height={0}
        sizes='100vw'
        style={{ width: '100%', height: 'auto' }}
      />
      <Abouts histories={data?.histories} />
      <Teams teams={data?.teams} />
      <Cultures cultures={data?.cultures} />
      <CTAContent
        ilustraion={CTAContentIlustration}
        cta='Innovative, Trustworthy, Customer-Focused. Collaborative, Excellent, Sustainable, Creative.'
        onClick={() => router.push('/contact')}
      />
    </>
  );
}

function Abouts({ histories }) {
  return (
    <div className='container sm:px-0 px-6 py-10 sm:py-[10rem] flex flex-col gap-4 sm:gap-14'>
      {histories?.map((history, idx) => {
        const lastData = histories.length - 1 === idx;
        return (
          <>
            <div
              key={history.id}
              className='flex gap-3 sm:gap-6 flex-col sm:flex-row'
            >
              <p className='w-auto sm:w-[18.75rem] font-bold text-base sm:text-[1.75rem] text-black'>
                {history.name}
              </p>
              <div className='flex-none sm:flex-1 flex flex-col gap-2 sm:gap-4'>
                <RichText
                  content={history.description.raw}
                  renderers={{
                    h5: ({ children }) => (
                      <p className='text-black text-base sm:text-[1.75rem] leading-normal sm:leading-10 font-bold'>
                        {children}
                      </p>
                    ),
                    p: ({ children }) => (
                      <p className='text-black text=xs sm:text-xl leading-6'>
                        {children}
                      </p>
                    ),
                  }}
                />
              </div>
            </div>
            {!lastData && <div className='w-full h-[1px] bg-lightGrey' />}
          </>
        );
      })}
    </div>
  );
}

function Teams({ teams }) {
  return (
    <div className='container pb-0 sm:pb-[10rem] flex flex-col gap-3 sm:gap-6 px-4 sm:px-0'>
      <p className='font-bold text-primary-orange uppercase text-center text-xs sm:text-base'>
        Our Professionals
      </p>
      <p className='font-bold text-black text-2xl sm:text-[3.25rem] text-center'>
        Here&apos;s The Man Who Leading Behind
      </p>
      <div className='grid grid-cols-6 mt-6 sm:mt-10 gap-x-2 sm:gap-x-6 gap-y-2 sm:gap-y-10'>
        {teams?.map((team) => (
          <div
            key={team.id}
            className='flex flex-col gap-6 sm:gap-8 items-center justify-start sm:justify-center col-span-3 sm:col-span-2 sm:h-auto h-[18rem]'
          >
            <div className='oveflow-clip w-[7.2rem] sm:w-[12rem] h-[7.2rem] sm:h-[12rem] rounded-full'>
              <img
                src={team.avatar.url}
                className='w-full h-full object-cover rounded-full'
                alt='team1'
              />
            </div>
            <div className='flex flex-col items-center justify-center gap-2 sm:gap-6'>
              <p className='text-primary-blue text-center text-xs sm:text-base'>
                {team.jobTitle}
              </p>
              <div className='flex flex-col items-center justify-center gap-1 sm:gap-2'>
                <p className='text-black font-bold sm:text-[1.75rem] text-base text-center'>
                  {team.name}
                </p>
                <p className='text-darkGrey text-center text-xs sm:text-base'>
                  {team.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Cultures({ cultures }) {
  const isMobile = useResponsive('sm');
  const [active, setActive] = useState('Integrity');
  return (
    <div className='container pb-0 sm:pb-[2rem] sm:px-0 px-6 flex flex-col gap-3 sm:gap-6 items-center justify-center'>
      <p className='font-bold text-primary-orange uppercase text-center text-xs sm:text-base'>
        Our values and culture
      </p>
      <div className='flex flex-col gap-4 items-center justify-center'>
        <p className='text-2xl sm:text-[3.25rem] text-black leading-8 sm:leading-[4.5rem] font-bold text-center whitespace-normal sm:whitespace-nowrap'>
          Our Guiding Principles and Dynamic Culture
        </p>
      </div>
      <div className='flex grow sm:flex-row flex-col sm:w-auto w-full items-center gap-2 sm:gap-6'>
        {cultures?.map((culture) => (
          <div
            key={culture.id}
            className={cx(
              'relative transition-all duration-300 ease-in-out cursor-pointer',
              active === culture.title
                ? isMobile
                  ? 'w-full h-[19.375rem]'
                  : 'sm:w-[39rem] h-[45rem]'
                : isMobile
                ? 'w-full h-20'
                : 'w-[12rem] h-[45rem]'
            )}
            onClick={() => setActive(culture.title)}
          >
            <div className='absolute inset-0 bg-black/70 z-20'></div>
            <img
              className='absolute h-full w-full inset-0 z-10 object-cover'
              src={culture.image.url}
              alt={culture.title}
              loading='lazy'
            />
            {active === culture.title ? (
              <div className='absolute bottom-6 sm:bottom-10 z-30 '>
                <div className='w-[90%] mx-auto flex flex-col sm:items-start items-center gap-2 sm:gap-4'>
                  <p className='text-white text-2xl sm:text-[3.25rem] font-bold'>
                    {culture.title}
                  </p>
                  <p className='text-white text-xs sm:text-base leading-5'>
                    {culture.description}
                  </p>
                </div>
              </div>
            ) : (
              <p className='text-white font-bold text-2xl sm:text-[3.25rem] whitespace-nowrap sm:[writing-mode:vertical-lr] z-30 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                {culture.title}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
