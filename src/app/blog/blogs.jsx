'use client';

import { QUERY_BLOGSPAGE } from '@/graphql/queries';
import { useSuspenseQuery } from '@apollo/client';
import dayjs from 'dayjs';
import Link from 'next/link';
import React, { useState } from 'react';
import { twMerge as cx } from 'tailwind-merge';
import { useDebounce } from 'use-debounce';

export const filterOptions = [
  {
    label: 'Newest',
    value: 'publishedAt_DESC',
  },
  {
    label: 'Oldest',
    value: 'publishedAt_ASC',
  },
];

export default function Blogs() {
  const [search, setSearch] = useState('');
  const [orderBy, setOrderBy] = useState(filterOptions[0].value);

  const [debouncedSearch] = useDebounce(search, 500);

  const { data, isLoading } = useSuspenseQuery(QUERY_BLOGSPAGE, {
    variables: { search: debouncedSearch, orderBy },
  });

  return (
    <div className='container pb-10 sm:pb-[7.5rem] sm:px-0 px-6 pt-12 sm:pt-[4rem]'>
      <Header
        search={search}
        setSearch={(val) => {
          setSearch(val);
        }}
        orderBy={orderBy}
        setOrderBy={(val) => {
          setOrderBy(val);
        }}
      />
      <div className='grid grid-cols-3 gap-x-0 sm:gap-x-6 gap-y-8 sm:gap-y-10'>
        {data?.blogs?.map((blog, idx) => (
          <Card
            key={blog.id}
            image={blog.image.url}
            author={blog.name.name}
            createdAt={blog.publishedAt}
            title={blog.title}
            content={blog.overview}
            avatar={blog.name.avatar.url}
            id={blog.id}
          />
        ))}
      </div>
    </div>
  );
}

function Header({ search, setSearch, orderBy, setOrderBy }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='flex flex-col gap-3.5 sm:gap-6 mb-10'>
      <p className='font-bold text-primary-orange text-xs sm:text-base uppercase'>
        Latest News
      </p>
      <div className='flex sm:flex-row flex-col sm:justify-between justify-start gap-4 sm:gap-0'>
        <p className='font-bold text-black text-2xl sm:text-[3.25rem]'>
          Up-to-the-Minute News
        </p>
        <div className='flex items-center gap-4'>
          <div className='sm:w-auto w-full flex items-center gap-4'>
            <div className='sm:w-auto w-full px-4 flex gap-4 items-center bg-pureWhite border border-lightGrey'>
              <div>
                <svg
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  className='sm:w-auto sm:h-auto w-4 h-4'
                >
                  <path
                    d='M17.7393 17.7391L20.8697 20.8696'
                    stroke='#1E1E1E'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M3.13086 11.4783C3.13086 16.0887 6.86831 19.8261 11.4787 19.8261C13.7879 19.8261 15.8781 18.8885 17.3894 17.3732C18.8954 15.8632 19.8265 13.7794 19.8265 11.4783C19.8265 6.86788 16.0891 3.13043 11.4787 3.13043C6.86831 3.13043 3.13086 6.86788 3.13086 11.4783Z'
                    stroke='#1E1E1E'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </div>
              <input
                type='text'
                placeholder='Search'
                className='text-xs sm:text-xl font-medium leading-6 placeholder:text-black text-black py-4 focus:outline-none'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
          <div
            className='relative bg-pureWhite p-4 cursor-pointer border border-lightGrey'
            onClick={() => setIsOpen(!isOpen)}
          >
            <div>
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                className='sm:w-auto sm:h-auto w-4 h-4'
              >
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M18 12C20.2091 12 22 10.2091 22 8C22 5.79086 20.2091 4 18 4C16.1362 4 14.5701 5.27477 14.126 7H3C2.44772 7 2 7.44772 2 8C2 8.55229 2.44772 9 3 9H14.126C14.5701 10.7252 16.1362 12 18 12ZM16 8C16 9.10457 16.8954 10 18 10C19.1046 10 20 9.10457 20 8C20 6.89543 19.1046 6 18 6C16.8954 6 16 6.89543 16 8ZM2 16C2 13.7909 3.79086 12 6 12C7.86384 12 9.42994 13.2748 9.87398 15H21C21.5523 15 22 15.4477 22 16C22 16.5523 21.5523 17 21 17H9.87398C9.42994 18.7252 7.86384 20 6 20C3.79086 20 2 18.2091 2 16ZM8 16C8 14.8954 7.10457 14 6 14C4.89543 14 4 14.8954 4 16C4 17.1046 4.89543 18 6 18C7.10457 18 8 17.1046 8 16Z'
                  fill='black'
                />
              </svg>
            </div>
            {isOpen && (
              <div className='absolute top-14 right-0 bg-white border border-lightGrey'>
                {filterOptions.map((option) => (
                  <div
                    key={option.value}
                    className={cx(
                      'py-4 px-8 cursor-pointer sm:text-base text-xs',
                      option.value === orderBy && 'bg-primary-orange text-white'
                    )}
                    onClick={() => {
                      setOrderBy(option.value);
                      setIsOpen(false);
                    }}
                  >
                    {option.label}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function Card({ image, author, createdAt, title, content, avatar, id }) {
  return (
    <div className='flex flex-col gap-3 sm:gap-6 sm:col-span-1 col-span-3'>
      <div className='w-full h-[12.8125rem] sm:h-[20rem]'>
        <img src={image} alt='blog' className='w-full h-full object-cover' />
      </div>
      <div className='flex grow gap-3 items-center'>
        <div className='w-8 h-8 sm:w-16 sm:h-16 rounded-full overflow-clip'>
          <img
            src={avatar}
            alt='team1'
            className='w-full h-full object-cover'
          />
        </div>
        <p className='text-xs sm:text-xl text-black font-bold'>{author}</p>
        <div className='w-0.5 h-3.5 sm:h-5 bg-gray-400'></div>
        <p className='whitespace-nowrap text-xs sm:text-xl text-gray-400 font-bold'>
          {dayjs(createdAt).format('DD MMM YYYY')}
        </p>
      </div>
      <div className='flex flex-col sm:gap-3 gap-2'>
        <p className='text-black font-bold line-clamp-2 text-base leading-normal sm:text-[1.75rem] sm:leading-8'>
          {title}
        </p>

        <p className='text-black line-clamp-3 sm:text-base text-xs'>
          {content?.length > 120 ? `${content.slice(0, 120)}...` : content}
          <span>
            {' '}
            <Link
              href={`/blog/${id}`}
              className='text-primary-blue underline font-bold'
            >
              Read More
            </Link>
          </span>
        </p>
      </div>
    </div>
  );
}
