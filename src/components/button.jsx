import React from 'react';
import { twMerge as cx } from 'tailwind-merge';

export default function Button({
  text = 'Get Started',
  type = 'primary',
  size = 'large',
  className,
  ...props
}) {
  const buttonType = (type) => {
    switch (type) {
      case 'primary':
        return 'bg-primary-orange text-darkGrey';
      case 'tertiary':
        return 'bg-transparent text-darkGrey';
      default:
        return 'bg-orange text-darkGrey';
    }
  };

  const buttonSize = (size) => {
    switch (size) {
      case 'large':
        return 'py-5 px-[3.25rem] flex items-center justify-center gap-5';
      case 'medium':
        return 'py-2.5 px-[4.6rem] flex items-center justify-center gap-1';
      default:
        return 'py-5 px-[3.25rem]';
    }
  };

  return (
    <button
      className={cx(
        'font-bold text-xl',
        buttonType(type),
        buttonSize(size),
        className
      )}
      {...props}
    >
      {text}
      {type === 'tertiary' && <Icon size={size} />}
    </button>
  );
}

function Icon({ size }) {
  if (size === 'large') {
    return (
      <svg
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M3.27273 14.182C2.06774 14.182 1.09091 13.2052 1.09091 12.0002C1.09091 10.7952 2.06774 9.81836 3.27273 9.81836C4.47772 9.81836 5.45455 10.7952 5.45455 12.0002C5.45455 13.2052 4.47772 14.182 3.27273 14.182Z'
          stroke='#F7971E'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <path
          d='M9.72728 11.9998H22.9091M22.9091 11.9998L19.6364 8.72705M22.9091 11.9998L19.6364 15.2725'
          stroke='#F7971E'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </svg>
    );
  }

  return (
    <svg
      width='17'
      height='16'
      viewBox='0 0 17 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M3.04546 9.3635C2.29234 9.3635 1.68182 8.753 1.68182 7.99987C1.68182 7.24673 2.29234 6.63623 3.04546 6.63623C3.79858 6.63623 4.4091 7.24673 4.4091 7.99987C4.4091 8.753 3.79858 9.3635 3.04546 9.3635Z'
        stroke='#F7971E'
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M7.07953 8.00004H15.3182M15.3182 8.00004L13.2727 5.95459M15.3182 8.00004L13.2727 10.0455'
        stroke='#F7971E'
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </svg>
  );
}
