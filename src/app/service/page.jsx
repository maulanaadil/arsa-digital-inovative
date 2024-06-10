'use client';

import CTAContentIlustration from '@/assets/ilustration/service-cta.svg';
import Button from '@/components/button';
import CTAContent from '@/sections/cta';
import IntroCta from '@/sections/intro-cta';

import { QUERY_SERVICEPAGE } from '@/graphql/queries';
import { useSuspenseQuery } from '@apollo/client';
import { useRouter } from 'next/navigation';
import { twMerge as cx } from 'tailwind-merge';
import useResponsive from '@/hooks/useResponse';

export default function ServicePage() {
  const router = useRouter();
  const { data, isLoading } = useSuspenseQuery(QUERY_SERVICEPAGE);

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
      <Services services={data?.services} />
      <Works works={data?.projects} />
      <CTAContent
        ilustraion={CTAContentIlustration}
        cta='Custom Software Solutions From Concept To Deployment, Tailored For Your Unique Business Needs.'
        onClick={() => router.push('/contact')}
      />
    </>
  );
}

function Services({ services }) {
  const router = useRouter();
  return (
    <div className='container px-6 pb-10 sm:pb-[10rem] grid grid-cols-3 justify-self-center gap-6'>
      {services?.map((service) => (
        <div
          key={service.id}
          className={cx(
            'w-full h-[15rem] sm:h-[30rem] relative sm:col-span-1 col-span-3',
            service.name === 'UI/UX Design' &&
              'col-span-3 w-full sm:w-[24rem] justify-self-center'
          )}
        >
          <div className='absolute bg-black/60 inset-0 z-20'></div>
          <img
            src={service.image.url}
            className='w-full h-full object-cover absolute bg-[#F1E9DE] inset-0 z-10'
            alt={service.id}
            loading='lazy'
          />
          <div className='h-full absolute flex flex-col z-30 justify-between p-4 sm:p-9'>
            <div className='inset-0 flex flex-col gap-1'>
              <p className='font-bold text-white text-2xl sm:text-[1.75rem] text-center'>
                {service.name}
              </p>
              <p className='text-white text-center leading-5 sm:text-base text-xs'>
                {service.description}
              </p>
            </div>
            <Button
              text='Read More'
              size='medium'
              className='w-[12rem] py-2.5 sm:py-5 px-0 mx-auto'
              onClick={() => router.push('/project')}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

function Works({ works }) {
  const isMobile = useResponsive('sm');
  const router = useRouter();

  const getMappedClassName = (index) => {
    const classCycle = [
      'sm:col-span-3',
      'sm:col-span-2',
      'sm:col-span-2',
      'sm:col-span-3',
    ];

    const baseClasses = 'relative h-[20rem] sm:h-[31.25rem] p-6 col col-span-5';
    const dynamicClass = classCycle[index % classCycle.length];
    return `${baseClasses} ${dynamicClass}`;
  };

  return (
    <div className='container pb-10 sm:pb-[10rem] flex flex-col gap-3 sm:gap-6'>
      <p className='font-bold text-primary-orange uppercase text-center text-xs sm:text-base'>
        Our Professionals
      </p>
      <div className='flex flex-col gap-4 items-center justify-center'>
        <p className='text-2xl sm:text-[3.25rem] text-black leading-normal sm:leading-[4.5rem] font-bold text-center whitespace-normal sm:whitespace-nowrap'>
          Real-World Solutions and Proven Results
        </p>
      </div>
      <div className='px-6 sm:px-0 mt-6 sm:mt-[4rem] grid grid-cols-5 gap-4 sm:gap-6'>
        {works?.map((work, idx) => (
          <div key={work.id} className={getMappedClassName(idx)}>
            <img
              src={work.image.url}
              alt={work.id}
              className='h-full w-full absolute inset-0 z-10 object-cover'
              loading='lazy'
            />
            <div className='inset-x-6 absolute z-20 bottom-6 p-4 flex gap-6 grow items-start sm:items-end bg-white'>
              <div className='flex-1 flex flex-col gap-3'>
                <p className='text-black font-bold text-2xl sm:text-[1.75rem]'>
                  {work.title}
                </p>
                <p className='text-darkGrey sm:text-base text-xs'>
                  {work.overview}
                </p>
              </div>
              <div
                className='px-3 py-3 sm:px-3.5 sm:py-[21px] bg-primary-orange text-black'
                onClick={() => router.push('/project')}
              >
                {isMobile ? (
                  <svg
                    width='29'
                    height='29'
                    viewBox='0 0 29 29'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <rect
                      x='0.5'
                      y='0.5'
                      width='28'
                      height='28'
                      fill='#F7971E'
                    />
                    <rect
                      x='0.5'
                      y='0.5'
                      width='28'
                      height='28'
                      stroke='#92949B'
                    />
                    <path
                      d='M9.66683 15.7083C8.99949 15.7083 8.4585 15.1673 8.4585 14.5C8.4585 13.8326 8.99949 13.2916 9.66683 13.2916C10.3342 13.2916 10.8752 13.8326 10.8752 14.5C10.8752 15.1673 10.3342 15.7083 9.66683 15.7083Z'
                      stroke='#1E1E1E'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M12.6875 14.5H20.5417M20.5417 14.5L18.7292 12.6875M20.5417 14.5L18.7292 16.3125'
                      stroke='#1E1E1E'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                ) : (
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
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M8 4H21M21 4L18 1M21 4L18 7'
                      stroke='#1E1E1E'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
