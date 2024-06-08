'use client';

import CTAContentIlustration from '@/assets/ilustration/service-cta.svg';
import Button from '@/components/button';
import CTAContent from '@/sections/cta';
import IntroCta from '@/sections/intro-cta';

import { QUERY_SERVICEPAGE } from '@/graphql/queries';
import { useSuspenseQuery } from '@apollo/client';
import { useRouter } from 'next/navigation';
import { twMerge as cx } from 'tailwind-merge';

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
    <div className='container pb-[10rem] grid grid-cols-3 justify-self-center gap-6'>
      {services?.map((service) => (
        <div
          key={service.id}
          className={cx(
            'w-full h-[30rem] relative',
            service.name === 'UI/UX Design' &&
              'col-span-3 w-[24rem] justify-self-center'
          )}
        >
          <div className='absolute bg-black/60 inset-0 z-20'></div>
          <img
            src={service.image.url}
            className='w-full h-full object-cover absolute bg-[#F1E9DE] inset-0 z-10'
            alt={service.id}
            loading='lazy'
          />
          <div className='h-full absolute flex flex-col z-30 justify-between p-9'>
            <div className='inset-0 flex flex-col gap-1'>
              <p className='font-bold text-white text-[1.75rem] text-center'>
                {service.name}
              </p>
              <p className='text-white text-center leading-5'>
                {service.description}
              </p>
            </div>
            <Button
              text='Read More'
              size='medium'
              className='w-[12rem] py-5 px-0 mx-auto'
              onClick={() => router.push('/project')}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

function Works({ works }) {
  const router = useRouter();

  const getMappedClassName = (index) => {
    const classCycle = ['col-span-3', 'col-span-2', 'col-span-2', 'col-span-3'];

    const baseClasses = 'relative h-[31.25rem] p-6 col';
    const dynamicClass = classCycle[index % classCycle.length];
    return `${baseClasses} ${dynamicClass}`;
  };

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
        {works?.map((work, idx) => (
          <div key={work.id} className={getMappedClassName(idx)}>
            <img
              src={work.image.url}
              alt={work.id}
              className='h-full w-full absolute inset-0 z-10 object-cover'
              loading='lazy'
            />
            <div className='inset-x-6 absolute z-20 bottom-6 p-4 flex gap-6 grow items-end bg-white'>
              <div className='flex-1 flex flex-col gap-3'>
                <p className='text-black font-bold text-[1.75rem]'>
                  {work.title}
                </p>
                <p className='text-darkGrey'>{work.overview}</p>
              </div>
              <div
                className='px-3.5 py-[21px] bg-primary-orange text-black'
                onClick={() => router.push('/project')}
              >
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
        ))}
      </div>
    </div>
  );
}
