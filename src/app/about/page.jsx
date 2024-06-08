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

export default function Aboutpage() {
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
          <span>
            Combining engineering expertise with innovative app development, we
            create cutting-edge <br /> solutions tailored to your needs. Our
            dedication to precision and performance ensures your <br /> projects
            excel in the ever-evolving technological landscape
          </span>
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
      <Abouts />
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
    <div className='container py-[10rem] flex flex-col gap-14'>
      {histories?.map((history) => (
        <div key={history.id} className='flex gap-6'>
          <p className='w-[18.75rem] font-bold text-[1.75rem] text-black'>
            {history.name}
          </p>
          <div className='flex-1 flex flex-col gap-4'>
            <RichText
              content={history.description.raw}
              renderers={{
                h5: ({ children }) => (
                  <p className='text-black text-[1.75rem] leading-10 font-bold'>
                    {children}
                  </p>
                ),
                p: ({ children }) => (
                  <p className='text-black text-xl leading-6'>{children}</p>
                ),
              }}
            />
          </div>
        </div>
      ))}
      <div className='w-full h-[1px] bg-lightGrey' />
      <div className='flex gap-6'>
        <p className='w-[18.75rem] font-bold text-[1.75rem] text-black'>
          Vision
        </p>
        <div className='flex-1 flex flex-col gap-4'>
          <p className='text-black text-xl leading-6'>
            To be the global leader in engineering app development, renowned for
            our innovative solutions, exceptional quality, and commitment to
            empowering engineers worldwide. We envision a future where our
            applications transform industries, enhance productivity, and drive
            technological advancement.
          </p>
        </div>
      </div>
      <div className='w-full h-[1px] bg-lightGrey' />
      <div className='flex gap-6'>
        <p className='w-[18.75rem] font-bold text-[1.75rem] text-black'>
          Mission
        </p>
        <div className='flex-1 flex flex-col gap-4'>
          <ul className='list-decimal'>
            <li className='text-black text-xl leading-6 ml-3 mt-4'>
              Innovate and Inspire: Continuously develop pioneering applications
              that address the unique challenges of the engineering sector.
            </li>
            <li className='text-black text-xl leading-6 ml-3 mt-4'>
              Quality and Excellence: Uphold the highest standards of quality
              and precision in every project we undertake.
            </li>
            <li className='text-black text-xl leading-6 ml-3 mt-4'>
              Client-Centric Approach: Foster strong, collaborative
              relationships with our clients, ensuring their needs and goals are
              at the forefront of our solutions.
            </li>
            <li className='text-black text-xl leading-6 ml-3 mt-4'>
              Empower Engineers: Provide tools and technologies that enable
              engineers to achieve greater efficiency, accuracy, and success.
            </li>
            <li className='text-black text-xl leading-6 ml-3 mt-4'>
              Sustainable Growth: Promote sustainable practices in our
              operations and contribute positively to the communities we serve.
            </li>
            <li className='text-black text-xl leading-6 ml-3 mt-4'>
              Continuous Learning: Invest in the ongoing development of our team
              to stay ahead of industry trends and technological advancements.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function Teams({ teams }) {
  return (
    <div className='container pb-[10rem] flex flex-col gap-6'>
      <p className='font-bold text-primary-orange uppercase text-center'>
        Our Professionals
      </p>
      <p className='font-bold text-black text-[3.25rem] text-center'>
        Here&apos;s The Man Who Leading Behind
      </p>
      <div className='grid grid-cols-6 mt-10 gap-x-6 gap-y-10'>
        {teams?.map((team) => (
          <div
            key={team.id}
            className='flex flex-col gap-8 items-center justify-center col-span-2'
          >
            <div className='oveflow-clip w-[12rem] h-[12rem] rounded-full'>
              <img
                src={team.avatar.url}
                className='w-full h-full object-cover rounded-full'
                alt='team1'
              />
            </div>
            <div className='flex flex-col items-center justify-center gap-6'>
              <p className='text-primary-blue text-center'>{team.jobTitle}</p>
              <div className='flex flex-col items-center justify-center gap-2'>
                <p className='text-black font-bold text-[1.75rem] text-center'>
                  {team.name}
                </p>
                <p className='text-darkGrey text-center'>{team.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Cultures({ cultures }) {
  const [active, setActive] = useState('Integrity');
  return (
    <div className='container pb-[2rem] flex flex-col gap-6 items-center justify-center'>
      <p className='font-bold text-primary-orange uppercase'>
        Our values and culture
      </p>
      <div className='flex flex-col gap-4 items-center justify-center'>
        <p className='text-[3.25rem] text-black leading-[4.5rem] font-bold text-center whitespace-nowrap'>
          Our Guiding Principles and Dynamic Culture
        </p>
      </div>
      <div className='flex grow items-center gap-6'>
        {cultures?.map((culture) => (
          <div
            key={culture.id}
            className={cx(
              'relative h-[45rem] transition-all duration-300 ease-in-out cursor-pointer',
              active === culture.title ? 'w-[39rem]' : 'w-[12rem]'
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
              <div className='absolute bottom-10 left-10 z-30 flex flex-col gap-4'>
                <p className='text-white text-[3.25rem] font-bold'>
                  {culture.title}
                </p>
                <p className='text-white leading-5'>{culture.description}</p>
              </div>
            ) : (
              <p className='text-white font-bold text-[3.25rem] whitespace-nowrap [writing-mode:vertical-lr] z-30 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                {culture.title}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
