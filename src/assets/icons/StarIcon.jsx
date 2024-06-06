import React from 'react';

function StarIcon({ ...props }) {
  return (
    <svg
      width='26'
      height='24'
      viewBox='0 0 26 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M9.01864 7.60847L12.0491 1.50422C12.4381 0.720597 13.562 0.720597 13.951 1.50422L16.9814 7.60847L23.7585 8.59337C24.628 8.71973 24.9745 9.78247 24.3451 10.3921L19.442 15.1403L20.5991 21.8481C20.7478 22.7096 19.8383 23.3664 19.0603 22.9596L13 19.7908L6.93976 22.9596C6.16174 23.3664 5.25231 22.7096 5.4009 21.8481L6.558 15.1403L1.65508 10.3921C1.02557 9.78247 1.37213 8.71973 2.24165 8.59337L9.01864 7.60847Z'
        fill='#F7971E'
        stroke='#F7971E'
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </svg>
  );
}

export default StarIcon;
