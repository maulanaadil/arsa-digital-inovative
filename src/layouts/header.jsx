'use client';

import Logo from '@/components/logo';
import { twMerge as cx } from 'tailwind-merge';

import { MENU } from '@/constants/header';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import useResponsive from '@/hooks/useResponse';
import BurgerIcon from '@/assets/icons/BurgerIcon';
import CloseIcon from '@/assets/icons/CloseIcon';
import { useState } from 'react';
import { createPortal } from 'react-dom';

export default function Header() {
  const pathName = usePathname();
  const isMobile = useResponsive('sm');
  const [showOptions, setShowOptions] = useState(false);

  return (
    <div
      className={cx(
        'container flex justify-between ',
        isMobile ? 'pt-10 px-6' : 'py-5'
      )}
    >
      <Logo />
      {isMobile ? (
        <BurgerIcon onClick={() => setShowOptions(!showOptions)} />
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
      {isMobile && showOptions && (
        <OptionHeaderOptions
          show={showOptions}
          menus={MENU}
          onClose={() => setShowOptions(!showOptions)}
          onClickMenu={(url) => handleScroll(url)}
        />
      )}
    </div>
  );
}

function OptionHeaderOptions({ show, menus, onClose, onClickMenu }) {
  return createPortal(
    !show ? null : (
      <div className='h-full fixed inset-0 bg-white overflow-hidden w-full flex flex-col gap-4 items-center justify-center z-[999] no-scrollbar ease-out transition-all duration-300'>
        <CloseIcon
          className='absolute top-16 right-6'
          onClick={() => onClose()}
        />
        {menus.map((menu) => (
          <Link
            key={menu.title}
            href={menu.link}
            className='py-2.5 text-center w-full text-2xl z-[99999] text-darkGrey font-medium'
          >
            {menu.title}
          </Link>
        ))}
      </div>
    ),
    document.body
  );
}
