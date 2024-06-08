'use client';

import MailIcon from '@/assets/icons/MailIcon';
import PhoneIcon from '@/assets/icons/PhoneIcon';
import AboutUsIlustration from '@/assets/ilustration/about-us.svg';
import CTAIlustration from '@/assets/ilustration/cta.svg';
import HeroIlustration from '@/assets/ilustration/hero';
import CTAContentIlustration from '@/assets/ilustration/home-cta.svg';
import Button from '@/components/button';
import { QUERY_HOMEPAGE } from '@/graphql/queries';
import CTAContent from '@/sections/cta';
import Testimonials from '@/sections/testimonial';
import { useSuspenseQuery } from '@apollo/client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { twMerge as cx } from 'tailwind-merge';

const activeSosmed = [
  'Linkedin',
  'Behance',
  'Dribble',
  'Medium',
  'Github',
  'Instagram',
];

export default function Homepage() {
  const router = useRouter();
  const { data, isLoading } = useSuspenseQuery(QUERY_HOMEPAGE);

  return (
    <>
      <Hero socialMedias={data?.socialMedias} />
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
    </>
  );
}

function Hero({ socialMedias }) {
  const router = useRouter();
  const heroSosmed = socialMedias?.filter((sosmed) =>
    activeSosmed?.includes(sosmed.platform)
  );

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

function CompanyExperience({
  totalClient,
  totalAward,
  totalArtist,
  finishedProject,
}) {
  return (
    <div className='w-full bg-gradient-to-r from-[#2b3042] to-[#181b24]'>
      <div className='container py-10 flex items-center gap-6 justify-between'>
        <div className='flex flex-col items-center gap-1 justify-center px-10 py-4'>
          <p className='text-[5rem] font-bold text-primary-yellow leading-none'>
            {finishedProject}+
          </p>
          <p className='font-medium text-white'>Finished Project</p>
        </div>
        <div className='flex flex-col items-center gap-1 justify-center px-10 py-4'>
          <p className='text-[5rem] font-bold text-primary-yellow leading-none'>
            {totalClient}
          </p>
          <p className='font-medium text-white'>Total Client</p>
        </div>
        <div className='flex flex-col items-center gap-1 justify-center px-10 py-4'>
          <p className='text-[5rem] font-bold text-primary-yellow leading-none'>
            {totalAward}
          </p>
          <p className='font-medium text-white'>International Awards</p>
        </div>
        <div className='flex flex-col items-center gap-1 justify-center px-10 py-4'>
          <p className='text-[5rem] font-bold text-primary-yellow leading-none'>
            {totalArtist}
          </p>
          <p className='font-medium text-white'>Total Artist</p>
        </div>
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

function OurService({ services }) {
  return (
    <div className='container mx-auto pt-[2rem] pb-[7rem]'>
      <div className='flex flex-col gap-6 items-center justify-center'>
        <p className='text-primary-orange font-bold uppercase'>Our Service</p>
        <p className='text-black font-bold text-[3.25rem] text-center'>
          Your Dedicated Professional Awaits
        </p>
      </div>
      <div className='mt-[4rem] grid grid-cols-6 gap-6'>
        {services?.map((service) => (
          <div
            key={service.id}
            className={cx(
              'p-10 bg-pureWhite border border-lightGrey flex flex-col gap-[1.875rem] items-center justify-center',
              service.name === 'Mobile App Development' ||
                service.name === 'Server Management'
                ? 'col-span-4'
                : 'col-span-2'
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
              {contact.phone}
            </p>
          </div>
          <div className='flex items-center gap-1'>
            <MailIcon />
            <p className='text-xl leading-6 text-white font-medium'>
              {contact.email}
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

function Blogs({ blogs }) {
  const router = useRouter();
  return (
    <div className='container pt-[10rem] pb-[4rem] flex flex-col justify-end items-center'>
      <div className='flex flex-col gap-6 justify-center items-center'>
        <p className='text-primary-orange font-bold uppercase'>Our blogs</p>
        <p className='text-center font-bold text-[3.25rem] leading-[3.875rem] text-black'>
          Here&apos;s my blog&apos;s, i hope it will <br /> useful you!
        </p>
      </div>
      <div className='grid grid-cols-3 gap-6 mt-[4.75rem] mb-[3.75rem]'>
        {blogs?.map((blog) => (
          <div key={blog.id} className='flex flex-col gap-8 overflow-hidden'>
            <div className='w-[25.5rem] h-[20rem] overflow-clip'>
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
        className='w-[25.5rem]'
        onClick={() => router.push('/blog')}
      />
    </div>
  );
}
