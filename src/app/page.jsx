'use client';

import MailIcon from '@/assets/icons/MailIcon';
import PhoneIcon from '@/assets/icons/PhoneIcon';
import AboutUsIlustration from '@/assets/ilustration/about-us.svg';
import CTAIlustration from '@/assets/ilustration/cta.svg';
import HeroIlustration from '@/assets/ilustration/hero';
import CTAContentIlustration from '@/assets/ilustration/home-cta.svg';
import Button from '@/components/button';
import { QUERY_HOMEPAGE } from '@/graphql/queries';
import useResponsive from '@/hooks/useResponse';
import CTAContent from '@/sections/cta';
import Testimonials from '@/sections/testimonial';
import { useSuspenseQuery } from '@apollo/client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useMemo } from 'react';
import { twMerge as cx } from 'tailwind-merge';
import AOS from 'aos';

const activeSosmed = [
  'Linkedin',
  'Behance',
  'Dribble',
  'Medium',
  'Github',
  'Instagram',
];

export default function Homepage() {
  const isMobile = useResponsive('sm');
  const router = useRouter();
  const { data, isLoading } = useSuspenseQuery(QUERY_HOMEPAGE);

  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  return (
    <div className='overflow-x-hidden'>
      {isMobile ? (
        <HeroMobile socialMedias={data?.socialMedias} />
      ) : (
        <Hero socialMedias={data?.socialMedias} />
      )}
      <CompanyExperience
        totalClient={data?.overview.totalClient}
        totalAward={data?.overview.totalAward}
        totalArtist={data?.overview.totalArtist}
        finishedProject={data?.overview.finishedProject}
      />
      <AboutUs />
      <OurService services={data?.services} />
      <CTA contact={data?.contact} />
      <Blogs blogs={data?.blogs} />
      <Testimonials />
      <CTAContent
        cta='Revolutionize Your World. Cutting-Edge Technology Solutions Await'
        className='py-[5rem]'
        ilustraion={CTAContentIlustration}
        onClick={() => router.push('/contact')}
      />
    </div>
  );
}

function Hero({ socialMedias }) {
  const router = useRouter();
  const heroSosmed = socialMedias?.filter((sosmed) =>
    activeSosmed?.includes(sosmed.platform)
  );

  return (
    <div
      data-aos='fade-up'
      data-aos-easing='ease-in-out'
      duration='1000'
      className='container max-auto py-[2.5rem]'
    >
      <div className='relative min-h-[43rem]'>
        <div className='flex flex-col gap-[6.25rem] justify-between'>
          <div className='flex flex-col gap-6'>
            <p className='font-bold text-primary-orange uppercase'>
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
            {heroSosmed?.map((sosmed) => (
              <div
                key={sosmed.id}
                onClick={() => window.open(sosmed.url)}
                className='cursor-pointer'
              >
                <img
                  src={sosmed.icon.url}
                  alt={sosmed.platform}
                  className='w-fit h-fit object-cover'
                  loading='lazy'
                />
              </div>
            ))}
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
            <Button onClick={() => router.push('/contact')} />
            <Button
              type='tertiary'
              text='Learn More'
              onClick={() => router.push('/service')}
            />
          </div>
        </div>
        <HeroIlustration className='absolute -right-20 bottom-10 w-[43rem] h-[32rem]' />
      </div>
    </div>
  );
}

function HeroMobile({ socialMedias }) {
  const router = useRouter();
  const heroSosmed = socialMedias?.filter((sosmed) =>
    activeSosmed?.includes(sosmed.platform)
  );

  return (
    <div
      data-aos='fade-up'
      data-aos-easing='ease-in-out'
      duration='1000'
      className='container max-auto py-[2.5rem] overflow-clip sm:overflow-auto'
    >
      <div className='relative min-h-[23.25rem]'>
        <div className='px-6 flex flex-col justify-between grow gap-20'>
          <div className='flex flex-col gap-6'>
            <div className='flex flex-col gap-3'>
              <p className='text-primary-orange uppercase text-xs font-bold'>
                Your Developing Solution
              </p>
              <div className='flex flex-col gap-1'>
                <p className='font-bold text-black text-[1.75rem] leading-[2.2rem]'>
                  Let&apos;s transform your app
                  <br /> into an outstanding
                  <br /> experience!
                </p>
                <p className='text-xs text-darkGrey'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing
                  <br /> elit. Aliquam placerat risus et est sodales, quis
                  <br /> condimentum lacus facilisis.
                </p>
              </div>
            </div>
            <div className='flex items-center gap-3 w-fit'>
              {heroSosmed?.map((sosmed) => (
                <div
                  key={sosmed.id}
                  onClick={() => window.open(sosmed.url)}
                  className='cursor-pointer'
                >
                  <img
                    src={sosmed.icon.url}
                    alt={sosmed.platform}
                    className='w-3 h-3 object-cover'
                    loading='lazy'
                  />
                </div>
              ))}
              <svg
                width='63'
                height='2'
                viewBox='0 0 63 2'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M0 1H63' stroke='#00257D' />
              </svg>
            </div>
          </div>
          <div className='w-fit flex flex-col gap-2'>
            <Button
              className='px-5 py-2.5 w-fit text-xs'
              onClick={() => router.push('/contact')}
            />
            <Button
              type='tertiary'
              text='Learn More'
              className='px-5 py-2.5 w-fit text-xs'
              onClick={() => router.push('/service')}
            />
          </div>
        </div>
        <HeroIlustration className='absolute -right-[1.125rem] -bottom-3 w-[16.6rem] h-[12.5rem]' />
      </div>
    </div>
  );
}

function CompanyExperience({
  totalClient,
  totalAward,
  totalArtist,
  finishedProject,
}) {
  const data = useMemo(
    () => [
      {
        id: 1,
        title: 'Finished Project',
        value: `${finishedProject}+`,
      },
      {
        id: 2,
        title: 'Total Client',
        value: `${totalClient}`,
      },
      {
        id: 3,
        title: 'International Awards',
        value: `${totalAward}`,
      },
      {
        id: 4,
        title: 'Total Artist',
        value: `${totalArtist}`,
      },
    ],
    [finishedProject, totalArtist, totalAward, totalClient]
  );

  return (
    <div
      data-aos='fade-up'
      data-aos-easing='ease-in-out'
      data-aos-duration='1000'
      className='w-full bg-gradient-to-r from-[#2b3042] to-[#181b24]'
    >
      <div className='container p-6 sm:py-10 grid grid-cols-4 items-center justify-self-center'>
        {data.map((item) => (
          <div
            key={item.id}
            className='flex flex-col items-center gap-2 sm:gap-1 justify-center sm:px-10 sm:py-4 p-4 sm:col-span-1 col-span-2'
          >
            <p className='text-[2rem] sm:text-[5rem] font-bold text-primary-yellow leading-none'>
              {item.value}
            </p>
            <p className='font-medium text-white sm:text-base text-xs'>
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function AboutUs() {
  return (
    <div
      data-aos='fade-up'
      className='container py-10 px-6 sm:px-0 sm:py-[10rem] overflow-clip sm:overflow-auto'
    >
      <div className='relative w-full flex justify-between'>
        <div className='sm:w-full w-3/5 flex flex-col gap-1 sm:gap-8'>
          <div className='flex flex-col gap-3 sm:gap-6'>
            <p className='font-bold text-primary-orange text-xs sm:text-xl uppercase'>
              About Us
            </p>
            <p className='font-bold text-black text-2xl sm:text-[3.25rem] leading-8 sm:leading-[3.875rem]'>
              Turning your app <br /> ideas into reality.
            </p>
          </div>
          <p className='text-xs sm:text-xl leading-4 sm:leading-6 text-darkGrey'>
            Welcome to our companywhere comprehensive <br /> exploration of our
            app development process. Discover <br />
            the journey from initial concept to final product,
            <br /> uncovering the design choices.
          </p>
        </div>
        <Image
          src={AboutUsIlustration}
          alt='about-us-ilustration'
          className='absolute sm:static -right-24 bottom-0 w-[13.3rem] h-[11.25] sm:w-auto sm:h-auto'
        />
      </div>
    </div>
  );
}

function OurService({ services }) {
  return (
    <div
      data-aos='fade-up'
      data-aos-easing='ease-in-out'
      data-aos-duration='3000'
      className='container sm:px-0 px-6 mx-auto pt-[2rem] pb-10 sm:pb-[7rem]'
    >
      <div className='flex flex-col gap-3 sm:gap-6 items-center justify-center'>
        <p className='text-primary-orange text-xs sm:text-xl font-bold uppercase'>
          Our Service
        </p>
        <p className='text-black font-bold text-2xl sm:text-[3.25rem] text-center'>
          Your Dedicated Professional Awaits
        </p>
      </div>
      <div className='mt-6 sm:mt-[4rem] grid grid-cols-6 gap-3 sm:gap-6'>
        {services?.map((service, idx) => (
          <div
            key={service.id}
            className={cx(
              'p-10 bg-pureWhite border border-lightGrey flex flex-col gap-[1.875rem] items-center justify-center',
              service.name === 'Mobile App Development' ||
                service.name === 'Server Management'
                ? 'col-span-6 sm:col-span-4'
                : 'col-span-6 sm:col-span-2'
            )}
          >
            <div className='p-5 bg-primary-yellow'>
              <img
                src={service.icon.url}
                className='w-10 h-10 object-cover'
                alt={service.id}
                loading='lazy'
              />
            </div>
            <div className='flex flex-col gap-3'>
              <p className='text-[1.75rem] font-bold text-black text-center'>
                {service.name}
              </p>
              <p className='text-black text-center'>{service.overview}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CTA({ contact }) {
  const isMobile = useResponsive('sm');
  return (
    <div
      data-aos='fade-up'
      data-aos-easing='ease-in-out'
      className='w-full bg-gradient-to-r py-4 pb-10 sm:py-[6.25rem] from-[#2b3042] to-[#181b24]'
    >
      <div className='px-6 sm:px-0 container relative h-full sm:h-[30rem] flex flex-col grow justify-between'>
        <div className='flex flex-col gap-1 sm:gap-5'>
          {isMobile && (
            <Image
              src={CTAIlustration}
              alt='cta-ilustration'
              className='w-[20.5rem] h-[13.625]rem'
            />
          )}
          <p className='font-bold text-white text-2xl sm:text-[3.25rem] leading-7 sm:leading-[3.875rem]'>
            Let&apos;s Get In Touch With {isMobile && <br />} Us, Contact{' '}
            {!isMobile && <br />} Our {isMobile && <br />}
            Customer Care Below
          </p>
          <p className='w-full sm:w-[38rem] text-xs sm:text-xl text-white font-medium leading-4 sm:leading-6'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            placerat est rutrum enim condimentum cursus. Proin placerat
            consequat sapien eu auctor.
          </p>
        </div>
        <div className='my-6 sm:my-0 flex flex-col gap-3 sm:gap-6'>
          <div className='flex items-center gap-2 sm:gap-1'>
            <PhoneIcon className=' sm:h-6 sm:w-6  w-4 h-4' />
            <p className='text-xs sm:text-xl leading-6 text-white font-medium'>
              {contact.phone}
            </p>
          </div>
          <div className='flex items-center gap-2 sm:gap-1'>
            <MailIcon className=' sm:h-6 sm:w-6  w-4 h-4' />
            <p className='text-xs sm:text-xl leading-6 text-white font-medium'>
              {contact.email}
            </p>
          </div>
        </div>
        {!isMobile && (
          <Image
            src={CTAIlustration}
            alt='cta-ilustration'
            className='absolute -right-20 -bottom-20'
          />
        )}
        <Button className='w-fit' onClick={() => alert('get started')} />
      </div>
    </div>
  );
}

function Blogs({ blogs }) {
  const isMobile = useResponsive('sm');
  const router = useRouter();
  return (
    <div
      data-aos='fade-up'
      data-aos-easing='ease-in-out'
      className='container pt-10 sm:pt-[10rem] px-6 sm:px-0 sm:pb-[4rem] flex flex-col justify-end items-center'
    >
      <div className='flex flex-col gap-3 sm:gap-6 justify-center items-center'>
        <p className='text-primary-orange font-bold uppercase sm:text-base text-xs'>
          Our blogs
        </p>
        <p className='text-center font-bold text-2xl sm:text-[3.25rem] leading-8 sm:leading-[3.875rem] text-black'>
          Here&apos;s my blog&apos;s, i hope it {isMobile && <br />} will{' '}
          {!isMobile && <br />} useful you!
        </p>
      </div>
      <div className='grid grid-cols-3 gap-4 sm:gap-6 mt-6 sm:mt-[4.75rem] mb-6 sm:mb-[3.75rem]'>
        {blogs?.map((blog, idx) => (
          <div
            key={blog.id}
            className='col-span-3 sm:col-span-1 flex flex-col gap-3 sm:gap-8 overflow-hidden'
          >
            <div className='w-full sm:w-[25.5rem] h-[9.25rem] sm:h-[20rem] overflow-clip'>
              <img
                src={blog.image.url}
                alt='blog1'
                className='w-full h-full object-cover'
                loading='lazy'
              />
            </div>
            <div className='flex flex-col gap-1'>
              <p className='text-black font-bold text-[1.75rem] leading-[2.0625rem]'>
                {blog.title}
              </p>
              <p className='text-black leading-5 line-clamp-3'>
                {blog.overview}
              </p>
            </div>
          </div>
        ))}
      </div>
      <Button
        text='See More'
        className='w-[10rem] sm:w-[25.5rem]'
        onClick={() => router.push('/blog')}
      />
    </div>
  );
}
