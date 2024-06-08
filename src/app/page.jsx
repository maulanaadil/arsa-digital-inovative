'use client';

import HeroIlustration from '@/assets/ilustration/hero';
import Button from '@/components/button';
import { COMPANY_EXPERIENCE } from '@/constants/companyExperience';
import { SOCIAL_MEDIA } from '@/constants/sosmed';
import AboutUsIlustration from '@/assets/ilustration/about-us.svg';
import CTAIlustration from '@/assets/ilustration/cta.svg';
import CTAContentIlustration from '@/assets/ilustration/home-cta.svg';
import Image from 'next/image';
import { SERVICES } from '@/constants/services';
import { twMerge as cx } from 'tailwind-merge';
import PhoneIcon from '@/assets/icons/PhoneIcon';
import MailIcon from '@/assets/icons/MailIcon';
import Testimonials from '@/sections/testimonial';
import CTAContent from '@/sections/cta';

const activeSosmed = [
  'linkedin',
  'behance',
  'dribble',
  'medium',
  'github',
  'instagram',
];

export default function Home() {
  return (
    <>
      <Hero />
      <CompanyExperience />
      <AboutUs />
      <OurService />
      <CTA />
      <Blogs />
      <Testimonials />
      <CTAContent
        cta='Revolutionize Your World. Cutting-Edge Technology Solutions Await'
        className='py-[5rem]'
        ilustraion={CTAContentIlustration}
        onClick={() => alert('get started now')}
      />
    </>
  );
}

function Hero() {
  return (
    <div className='container max-auto py-[2.5rem]'>
      <div className='relative min-h-[43rem]'>
        <div className='flex flex-col gap-[6.25rem] justify-between'>
          <div className='flex flex-col gap-6'>
            <p className='font-bold text-primary-yellow uppercase'>
              Your Developing Solution
            </p>
            <p className='font-bold text-black text-[4rem] leading-[4.5rem]'>
              Let&apos;s transform your app
              <br /> into an outstanding
              <br /> experience!
            </p>
            <p className='text-xl font-medium text-darkGrey leading-6'>
              Lorem ipsum dolor sit amet, consectetur adipiscing
              <br /> elit. Aliquam placerat risus et est sodales, quis
              <br /> condimentum lacus facilisis.
            </p>
          </div>
          <div className='flex items-center gap-6 w-fit'>
            {SOCIAL_MEDIA.filter((item) => activeSosmed.includes(item.id)).map(
              (item) => (
                <div key={item.id} onClick={() => window.open(item.link)}>
                  {item.icon}
                </div>
              )
            )}
            <svg
              width='224'
              height='2'
              viewBox='0 0 224 2'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M0 1H224' stroke='#00257D' />
            </svg>
          </div>
          <div className='flex items-center gap-6'>
            <Button onClick={() => alert('get started')} />
            <Button
              type='tertiary'
              text='Learn More'
              onClick={() => alert('learn more')}
            />
          </div>
        </div>
        <HeroIlustration className='absolute -right-20 bottom-10 w-[43rem] h-[32rem]' />
      </div>
    </div>
  );
}

function CompanyExperience() {
  return (
    <div className='w-full bg-gradient-to-r from-[#2b3042] to-[#181b24]'>
      <div className='container py-10 flex items-center gap-6 justify-between'>
        {COMPANY_EXPERIENCE.map((item) => (
          <div
            key={item.label}
            className='flex flex-col items-center gap-1 justify-center px-10 py-4'
          >
            <p className='text-[5rem] font-bold text-primary-yellow leading-none'>
              {item.value}
            </p>
            <p className='font-medium text-white'>{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function AboutUs() {
  return (
    <div className='container max-auto py-[10rem]'>
      <div className='w-full flex justify-between'>
        <div className='flex flex-col gap-8'>
          <div className='flex flex-col gap-6'>
            <p className='font-bold text-primary-yellow text-xl uppercase'>
              About Us
            </p>
            <p className='font-bold text-black text-[3.25rem] leading-[3.875rem]'>
              Turning your app <br /> ideas into reality.
            </p>
          </div>
          <p className='text-xl leading-6 text-darkGrey font-medium'>
            Welcome to our companywhere comprehensive <br /> exploration of our
            app development process. Discover <br />
            the journey from initial concept to final product,
            <br /> uncovering the design choices.
          </p>
        </div>
        <Image src={AboutUsIlustration} alt='about-us-ilustration' />
      </div>
    </div>
  );
}

function OurService() {
  return (
    <div className='container mx-auto pt-[2rem] pb-[7rem]'>
      <div className='flex flex-col gap-6 items-center justify-center'>
        <p className='text-primary-orange font-bold uppercase'>Our Service</p>
        <p className='text-black font-bold text-[3.25rem] text-center'>
          Your Dedicated Professional Awaits
        </p>
      </div>
      <div className='mt-[4rem] grid grid-cols-6 gap-6'>
        {SERVICES.map((service) => (
          <div
            key={service.title}
            className={cx(
              'p-10 bg-pureWhite border border-lightGrey flex flex-col gap-[1.875rem] items-center justify-center',
              service.title === 'Mobile App Development' ||
                service.title === 'Server Management'
                ? 'col-span-4'
                : 'col-span-2'
            )}
          >
            <div className='p-5 bg-primary-yellow'>{service.icon}</div>
            <div className='flex flex-col gap-3'>
              <p className='text-[1.75rem] font-bold text-black text-center'>
                {service.title}
              </p>
              <p className='text-black text-center'>{service.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CTA() {
  return (
    <div className='w-full bg-gradient-to-r py-[6.25rem] from-[#2b3042] to-[#181b24]'>
      <div className='container relative h-[30rem] flex flex-col grow justify-between'>
        <div className='flex flex-col gap-5'>
          <p className='font-bold text-white text-[3.25rem] leading-[3.875rem]'>
            Let&apos;s Get In Touch With Us, Contact <br /> Our Customer Care
            Below
          </p>
          <p className='w-[38rem] text-xl text-white font-medium leading-6'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            placerat est rutrum enim condimentum cursus. Proin placerat
            consequat sapien eu auctor.
          </p>
        </div>
        <div className='flex flex-col gap-6'>
          <div className='flex items-center gap-1'>
            <PhoneIcon />
            <p className='text-xl leading-6 text-white font-medium'>
              +(62)856 2596 4708
            </p>
          </div>
          <div className='flex items-center gap-1'>
            <MailIcon />
            <p className='text-xl leading-6 text-white font-medium'>
              Contactperson@gmail.com
            </p>
          </div>
        </div>
        <Image
          src={CTAIlustration}
          alt='cta-ilustration'
          className='absolute -right-20 -bottom-20'
        />
        <Button className='w-fit' onClick={() => alert('get started')} />
      </div>
    </div>
  );
}

function Blogs() {
  return (
    <div className='container pt-[10rem] pb-[4rem] flex flex-col justify-end items-center'>
      <div className='flex flex-col gap-6 justify-center items-center'>
        <p className='text-primary-orange font-bold uppercase'>Our blogs</p>
        <p className='text-center font-bold text-[3.25rem] leading-[3.875rem] text-black'>
          Here&apos;s my blog&apos;s, i hope it will <br /> useful you!
        </p>
      </div>
      <div className='grid grid-cols-3 gap-6 mt-[4.75rem] mb-[3.75rem]'>
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index} className='flex flex-col gap-8 overflow-hidden'>
            <div className='w-[25.5rem] h-[20rem] overflow-clip'>
              <img
                src='https://images.unsplash.com/photo-1716538878686-38567b89b5a0?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                alt='blog1'
                className='w-full h-full object-cover'
              />
            </div>
            <div className='flex flex-col gap-1'>
              <p className='text-black font-bold text-[1.75rem] leading-[2.0625rem]'>
                Good Flow To Make A Ui/Ux Design
              </p>
              <p className='text-black leading-5'>
                Sed feugiat felis eget elit mattis auctor. Duis at nulla
                condimentum leo feugiat viverra non nec elit.
              </p>
            </div>
          </div>
        ))}
      </div>
      <Button text='See More' className='w-[25.5rem]' />
    </div>
  );
}
