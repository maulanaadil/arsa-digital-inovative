'use client';

import Logo from '@/components/logo';
import React from 'react';
import { twMerge as cx } from 'tailwind-merge';

import { MENU } from '@/constants/header';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathName = usePathname();

  return (
    <div className='container flex justify-between py-5'>
      <Logo />
      <div className='flex items-center gap-8'>
        {MENU.map((item) => (
          <Link
            key={item.title}
            href={item.link}
            className={cx(
              'text-darkGrey',
              pathName === item.link ? 'font-bold' : 'font-medium'
            )}
          >
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
