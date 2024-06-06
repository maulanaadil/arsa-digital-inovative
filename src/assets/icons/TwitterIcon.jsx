import React from 'react';

function TwitterIcon({ ...props }) {
  return (
    <svg
      width='21'
      height='20'
      viewBox='0 0 21 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <g clip-path='url(#clip0_147_216)'>
        <path
          d='M19.9766 2.50838C19.9766 2.50838 18.295 3.50171 17.36 3.78338C16.8581 3.20631 16.1911 2.79729 15.4492 2.61165C14.7073 2.42601 13.9262 2.47271 13.2117 2.74542C12.4972 3.01814 11.8837 3.50371 11.4541 4.13648C11.0246 4.76924 10.7997 5.51866 10.81 6.28338V7.11671C9.3455 7.15469 7.89437 6.82989 6.58582 6.17125C5.27726 5.51261 4.15191 4.54058 3.30998 3.34171C3.30998 3.34171 -0.023356 10.8417 7.47664 14.175C5.76042 15.34 3.71594 15.9242 1.64331 15.8417C9.14331 20.0084 18.31 15.8417 18.31 6.25838C18.31 6.02671 18.2866 5.79505 18.2433 5.56671C19.0933 4.72838 19.9766 2.50838 19.9766 2.50838Z'
          stroke='white'
          stroke-width='1.5'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </g>
      <defs>
        <clipPath id='clip0_147_216'>
          <rect
            width='20'
            height='20'
            fill='white'
            transform='translate(0.810059)'
          />
        </clipPath>
      </defs>
    </svg>
  );
}

export default TwitterIcon;
