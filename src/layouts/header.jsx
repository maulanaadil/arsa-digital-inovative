'use client';

import Logo from '@/components/logo';
import { twMerge as cx } from 'tailwind-merge';

import { MENU } from '@/constants/header';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import useResponsive from '@/hooks/useResponse';
import BurgerIcon from '@/assets/icons/BurgerIcon';

export default function Header() {
  const pathName = usePathname();
  const isMobile = useResponsive('sm');

  return (
    <div
      className={cx(
        'container flex justify-between ',
        isMobile ? 'pt-10 px-6' : 'py-5'
      )}
    >
      <Logo />
      {isMobile ? (
        <BurgerIcon onClick={() => alert('options')} />
      ) : (
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
      )}
    </div>
  );
}
