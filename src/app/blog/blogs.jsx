import dayjs from 'dayjs';
import Link from 'next/link';
import React, { useState } from 'react';

export default function Blogs() {
  const [search, setSearch] = useState('');
  return (
    <div className='container pb-[7.5rem] pt-[4rem]'>
      <Header search={search} setSearch={setSearch} />
      <div className='grid grid-cols-3 gap-x-6 gap-y-10'>
        {Array.from({ length: 6 }).map((_, idx) => (
          <Card
            key={idx}
            image='https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2861&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            author='Abrahan Jhon'
            createdAt='2022-03-01'
            title='Exploring the stories and identities of half-Japanese people online through photos'
            content='Tetsuro Miyazaki is an acclaimed professional photographer based in the Netherlands who specializes in portraits, events and street photography. Half-Japa...'
            avatar='https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2861&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            id={idx}
          />
        ))}
      </div>
    </div>
  );
}

function Header({ search, setSearch }) {
  return (
    <div className='flex flex-col gap-6 mb-10'>
      <p className='text-xl font-bold text-primary-orange uppercase'>
        Latest News
      </p>
      <div className='flex justify-between'>
        <p className='font-bold text-black text-[3.25rem]'>
          Up-to-the-Minute News
        </p>
        <div className='flex items-center gap-4'>
          <div className='flex items-center gap-4'>
            <div className='px-4 flex gap-4 items-center bg-pureWhite border border-lightGrey'>
              <div>
                <svg
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M17.7393 17.7391L20.8697 20.8696'
                    stroke='#1E1E1E'
                    stroke-width='2'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                  <path
                    d='M3.13086 11.4783C3.13086 16.0887 6.86831 19.8261 11.4787 19.8261C13.7879 19.8261 15.8781 18.8885 17.3894 17.3732C18.8954 15.8632 19.8265 13.7794 19.8265 11.4783C19.8265 6.86788 16.0891 3.13043 11.4787 3.13043C6.86831 3.13043 3.13086 6.86788 3.13086 11.4783Z'
                    stroke='#1E1E1E'
                    stroke-width='2'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                </svg>
              </div>
              <input
                type='text'
                placeholder='Search'
                className='text-xl font-medium leading-6 placeholder:text-black text-black py-4 focus:outline-none'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
          <div className='bg-pureWhite p-4 cursor-pointer border border-lightGrey'>
            <div onClick={() => alert('filter')}>
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fill-rule='evenodd'
                  clip-rule='evenodd'
                  d='M18 12C20.2091 12 22 10.2091 22 8C22 5.79086 20.2091 4 18 4C16.1362 4 14.5701 5.27477 14.126 7H3C2.44772 7 2 7.44772 2 8C2 8.55229 2.44772 9 3 9H14.126C14.5701 10.7252 16.1362 12 18 12ZM16 8C16 9.10457 16.8954 10 18 10C19.1046 10 20 9.10457 20 8C20 6.89543 19.1046 6 18 6C16.8954 6 16 6.89543 16 8ZM2 16C2 13.7909 3.79086 12 6 12C7.86384 12 9.42994 13.2748 9.87398 15H21C21.5523 15 22 15.4477 22 16C22 16.5523 21.5523 17 21 17H9.87398C9.42994 18.7252 7.86384 20 6 20C3.79086 20 2 18.2091 2 16ZM8 16C8 14.8954 7.10457 14 6 14C4.89543 14 4 14.8954 4 16C4 17.1046 4.89543 18 6 18C7.10457 18 8 17.1046 8 16Z'
                  fill='black'
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Card({ image, author, createdAt, title, content, avatar, id }) {
  return (
    <div className='flex flex-col gap-6'>
      <div className='w-full h-[20rem]'>
        <img src={image} alt='blog' className='w-full h-full object-cover' />
      </div>
      <div className='flex grow gap-3 items-center'>
        <div className='w-16 h-16 rounded-full overflow-clip'>
          <img
            src={avatar}
            alt='team1'
            className='w-full h-full object-cover'
          />
        </div>
        <p className='text-xl text-black font-bold'>{author}</p>
        <div className='w-0.5 h-5 bg-gray-400'></div>
        <p className='text-xl text-gray-400 font-bold'>
          {dayjs(createdAt).format('DDD MMM YYYY')}
        </p>
      </div>
      <div className='flex flex-col gap-3'>
        <p className='text-black font-bold line-clamp-2 text-[1.75rem] leading-8'>
          {title}
        </p>

        <p className='text-black line-clamp-3'>
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
