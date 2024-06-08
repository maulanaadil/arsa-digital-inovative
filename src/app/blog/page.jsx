'use client';

import React from 'react';
import Blogs from './blogs';
import CTAContent from '@/sections/cta';
import CTAContentIlustration from '@/assets/ilustration/blog-cta.svg';
import { useRouter } from 'next/navigation';
import { useSuspenseQuery } from '@apollo/client';
import { QUERY_FIRSTBLOGPAGE } from '@/graphql/queries';

export default function Blogpage() {
  const router = useRouter();
  const { data, isLoading } = useSuspenseQuery(QUERY_FIRSTBLOGPAGE);

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
    <div className='container pt-[3rem] pb-[4rem] flex gap-6 items-center grow'>
      <div className='w-full flex flex-col gap-8'>
        <div className='flex gap-3'>
          <div className='w-16 h-16 rounded-full overflow-clip'>
            <img
              src={blog.name.avatar.url}
              alt={blog.name.name}
              className='w-full h-full object-cover'
            />
          </div>
          <div className='flex flex-col gap-1'>
            <p className='text-xl font-bold text-black'>{blog.name.name}</p>
            <p className='text-black'>{blog.country}</p>
          </div>
        </div>
        <div className='flex flex-col gap-3'>
          <p className='text-[2rem] text-black font-bold leading-10'>
            {blog.title}
          </p>
          <p className='text-xl text-black line-clamp-5'>
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
      <div className='flex w-2/3'>
        <div className='w-[52.5rem] h-[45.125rem]'>
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
