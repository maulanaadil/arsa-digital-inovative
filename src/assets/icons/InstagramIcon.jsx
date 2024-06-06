import React from 'react';

function InstagramIcon({ ...props }) {
  return (
    <svg
      id='intagram-icon'
      width='32'
      height='32'
      viewBox='0 0 32 32'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M16 21.3333C18.9454 21.3333 21.3333 18.9455 21.3333 16C21.3333 13.0545 18.9454 10.6667 16 10.6667C13.0544 10.6667 10.6666 13.0545 10.6666 16C10.6666 18.9455 13.0544 21.3333 16 21.3333Z'
        stroke='#00257D'
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M4 21.3333V10.6667C4 6.98477 6.98477 4 10.6667 4H21.3333C25.0152 4 28 6.98477 28 10.6667V21.3333C28 25.0152 25.0152 28 21.3333 28H10.6667C6.98477 28 4 25.0152 4 21.3333Z'
        stroke='#00257D'
        stroke-width='1.5'
      />
      <path
        d='M23.3334 8.68001L23.3467 8.66519'
        stroke='#00257D'
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </svg>
  );
}

export default InstagramIcon;
