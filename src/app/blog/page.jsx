'use client';

import React, { useEffect } from 'react';
import Blogs from './blogs';
import CTAContent from '@/sections/cta';
import CTAContentIlustration from '@/assets/ilustration/blog-cta.svg';
import { useRouter } from 'next/navigation';
import { useSuspenseQuery } from '@apollo/client';
import { QUERY_FIRSTBLOGPAGE } from '@/graphql/queries';
import Aos from 'aos';

export default function Blogpage() {
  const router = useRouter();
  const { data, isLoading } = useSuspenseQuery(QUERY_FIRSTBLOGPAGE);

  useEffect(() => {
    Aos.init({
      once: true,
    });
  }, []);

  return (
    <>
      <Blog blog={data?.blogs?.[0]} />
      <Blogs />
      <CTAContent
        ilustraion={CTAContentIlustration}
        cta='Highlight Real-World Examples And Success Stories To Provide Valuable Context And Practical Applications'
        onClick={() => router.push('/contact')}
        className='pt-5'
      />
    </>
  );
}

function Blog({ blog }) {
  const router = useRouter();
  return (
    <div
      data-aos='fade-up'
      data-aos-easing='ease-in-out'
      duration='1000'
      className='container px-6 sm:px-0 pt-10 sm:pt-[3rem] pb-0 sm:pb-[4rem] flex gap-5 flex-col-reverse sm:flex-row sm:gap-6 items-center grow'
    >
      <div className='w-full flex flex-col gap-3 sm:gap-8'>
        <div className='flex gap-3'>
          <div className='sm:w-16 sm:h-16 w-12 h-12 rounded-full overflow-clip'>
            <img
              src={blog.name.avatar.url}
              alt={blog.name.name}
              className='w-full h-full object-cover'
            />
          </div>
          <div className='flex flex-col gap-1 justify-center'>
            <p className='text-xs sm:text-xl font-bold text-black'>
              {blog.name.name}
            </p>
            <p className='sm:text-base text-xs text-black'>{blog.country}</p>
          </div>
        </div>
        <div className='flex flex-col gap-3'>
          <p className='text-2xl sm:text-[2rem] text-black font-bold leading-normal sm:leading-10'>
            {blog.title}
          </p>
          <p className='text-xs sm:text-xl text-black line-clamp-3 sm:line-clamp-5'>
            {blog.overview}{' '}
            <span
              className='font-bold underline text-primary-blue cursor-pointer'
              onClick={() => router.push(`/blog/${blog.id}`)}
            >
              See More
            </span>
          </p>
        </div>
      </div>
      <div className='flex w-full sm:w-2/3'>
        <div className='w-full sm:w-[52.5rem] h-[15.375rem] sm:h-[45.125rem]'>
          <img
            src={blog.image.url}
            alt='team1'
            className='w-full h-full object-cover'
          />
        </div>
      </div>
    </div>
  );
}
