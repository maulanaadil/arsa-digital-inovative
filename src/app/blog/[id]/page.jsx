'use client';

import { QUERY_BLOGDETAILPAGE } from '@/graphql/queries';
import { useSuspenseQuery } from '@apollo/client';
import { RichText } from '@graphcms/rich-text-react-renderer';
import Aos from 'aos';
import dayjs from 'dayjs';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

export default function BlogDetailpage({ params: { id } }) {
  const { data, isLoading } = useSuspenseQuery(QUERY_BLOGDETAILPAGE, {
    variables: {
      id,
    },
  });

  useEffect(() => {
    Aos.init({
      once: true,
    });
  }, []);

  return (
    <div data-aos='fade-up' data-aos-easing='ease-in-out' duration='1000'>
      <div className='container pt-[3.75rem] sm:pt-[7.5rem] sm:px-0 px-6 pb-10 sm:pb-[4.5rem]'>
        <div className='flex flex-col gap-6'>
          <p className='text-black font-bold text-[1.75rem] sm:text-[4rem] leading-normal sm:leading-[4.5rem]'>
            {data?.blog?.title}
          </p>
          <div className='flex items-center gap-6 sm:gap-10 py-0 sm:py-1.5'>
            <div className='flex items-center gap-2 sm:gap-3'>
              <div className='h-12 w-12 sm:w-16 sm:h-16 rounded-full overflow-clip'>
                <img
                  src={data?.blog?.name.avatar.url}
                  alt={data?.blog?.name.name}
                  className='w-full h-full object-cover'
                />
              </div>
              <div className='flex flex-col gap-1'>
                <p className='text-xs sm:text-xl text-black font-bold'>
                  {data?.blog?.name.name}
                </p>
                <p className='text-xs sm:text-base text-gray-500'>
                  {data?.blog.country}
                </p>
              </div>
            </div>
            <div className='w-[1px] h-8 sm:h-12 bg-gray-400'></div>
            <div className='flex flex-col gap-1'>
              <p className='text-xs sm:text-xl text-black font-bold'>
                {dayjs(data?.blog?.updatedAt).format('dddd')}
              </p>
              <p className='text-xs sm:text-base text-gray-500'>
                {dayjs(data?.blog?.updatedAt).format('DD MMM YYYY')}
              </p>
            </div>
          </div>
        </div>
      </div>
      <img
        src={data?.blog?.image.url}
        className='w-full h-[16.5625rem] sm:h-[45.125rem] object-cover'
        alt={data?.blog?.title}
      />
      <div className='container py-3.5 px-6 sm:py-[4.5rem] flex sm:flex-row flex-col grow pb-10 gap-10 sm:gap-6'>
        <div className='w-full flex flex-col gap-4'>
          <RichText
            content={data?.blog?.content.raw}
            renderers={{
              h1: ({ children }) => (
                <p className='text-black text-[2.5rem] leading-10 font-bold'>
                  {children}
                </p>
              ),
              h5: ({ children }) => (
                <p className='text-black text-[1.75rem] leading-10 font-bold'>
                  {children}
                </p>
              ),
              p: ({ children }) => (
                <p className='text-black text-xl'>{children}</p>
              ),
              img: ({ src, alt }) => (
                <img
                  src={src}
                  alt={alt}
                  className='w-full h-full object-cover'
                />
              ),
            }}
          />
        </div>

        <div className='w-full sm:w-2/5 flex flex-col gap-4'>
          <p className='font-bold text-black text-[1.75rem]'>Similar News</p>
          {data?.blogs?.map((blog) => (
            <Card
              key={blog.id}
              id={blog.id}
              image={blog.image.url}
              title={blog.title}
              date={blog.createdAt}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function Card({ image, title, date, id }) {
  const router = useRouter();
  return (
    <div
      className='w-full flex items-center gap-3 cursor-pointer'
      onClick={() => router.push(`/blog/${id}`)}
    >
      <div className='w-16 h-16 sm:w-20 sm:h-20 flex flex-none overflow-clip'>
        <img src={image} alt={title} className='w-full h-full object-cover' />
      </div>
      <div className='flex flex-col py-1'>
        <p className='text-xs text-black font-bold sm:text-xl line-clamp-2'>
          {title}
        </p>
        <p className='text-gray-500 sm:text-base text-xs'>
          {dayjs(date).format('DD MMM YYYY')}
        </p>
      </div>
    </div>
  );
}
