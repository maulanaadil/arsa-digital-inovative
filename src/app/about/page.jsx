'use client';

import { CULTURES } from '@/constants/cultures';
import Image from 'next/image';
import React, { useState } from 'react';
import { twMerge as cx } from 'tailwind-merge';
import CTAContent from '@/sections/cta';
import CTAContentIlustration from '@/assets/ilustration/about-cta.svg';
import IntroCta from '@/sections/intro-cta';

export default function about() {
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
      <About />
      <Teams />
      <Cultures />
      <CTAContent
        ilustraion={CTAContentIlustration}
        cta='Innovative, Trustworthy, Customer-Focused. Collaborative, Excellent, Sustainable, Creative.'
        onClick={() => alert('get started now')}
      />
    </>
  );
}

function About() {
  return (
    <div className='container py-[10rem] flex flex-col gap-14'>
      <div className='flex gap-6'>
        <p className='w-[18.75rem] font-bold text-[1.75rem] text-black'>
          Our History
        </p>
        <div className='flex-1 flex flex-col gap-4'>
          <p className='text-black text-[1.75rem] leading-10 font-bold'>
            Founded in 2024, our agency began with a vision to bridge the gap
            between engineering excellence and innovative technology.
          </p>
          <p className='text-black text-xl leading-6'>
            Our journey started with a small team of passionate engineers and
            developers committed to delivering top-notch solutions. Over the
            years, we have grown into a leading agency known for our expertise,
            dedication, and cutting-edge projects. From humble beginnings, we
            have expanded our portfolio to include a diverse range of
            engineering applications, consistently pushing the boundaries of
            what is possible.
          </p>
        </div>
      </div>
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

function Teams() {
  return (
    <div className='container pb-[10rem] flex flex-col gap-6'>
      <p className='font-bold text-primary-orange uppercase text-center'>
        Our Professionals
      </p>
      <p className='font-bold text-black text-[3.25rem] text-center'>
        Here&apos;s The Man Who Leading Behind
      </p>
      <div className='grid grid-cols-6 mt-10 gap-x-6 gap-y-10'>
        {Array.from({ length: 6 }).map((_, idx) => (
          <div
            key={idx}
            className='flex flex-col gap-8 items-center justify-center col-span-2'
          >
            <div className='oveflow-clip w-[12rem] h-[12rem] rounded-full'>
              <img
                src='https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2861&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                className='w-full h-full object-cover rounded-full'
                alt='team1'
              />
            </div>
            <div className='flex flex-col items-center justify-center gap-6'>
              <p className='text-primary-blue text-center'>
                Director of Operations
              </p>
              <div className='flex flex-col items-center justify-center gap-2'>
                <p className='text-black font-bold text-[1.75rem] text-center'>
                  Anthony Cholbee
                </p>
                <p className='text-darkGrey text-center'>
                  Oversees the day-to-day activities of the company, ensuring
                  that the business runs smoothly and efficiently
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Cultures() {
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
        {CULTURES.map((culture) => (
          <div
            key={culture.title}
            className={cx(
              'relative h-[45rem] transition-all duration-300 ease-in-out cursor-pointer',
              active === culture.title ? 'w-[39rem]' : 'w-[12rem]'
            )}
            onClick={() => setActive(culture.title)}
          >
            <div className='absolute inset-0 bg-black/70 z-20'></div>
            <img
              className='absolute h-full w-full inset-0 z-10 object-cover'
              src={culture.image}
              alt='bg-laptop'
            />
            {active === culture.title ? (
              <div className='absolute bottom-10 left-10 z-30 flex flex-col gap-4'>
                <p className='text-white text-[3.25rem] font-bold'>
                  {culture.title}
                </p>
                <p className='text-white leading-5'>{culture.subtitle}</p>
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
