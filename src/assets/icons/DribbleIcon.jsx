import React from 'react';

function DribbleIcon({ ...props }) {
  if (props.variant === '2') {
    return <DribbleIcon2 {...props} />;
  }

  return <_DribbleIcon {...props} />;
}

function _DribbleIcon({ ...props }) {
  return (
    <svg
      id='dribble-icon'
      width='32'
      height='32'
      viewBox='0 0 32 32'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M2.66663 16C2.66663 23.3637 8.63616 29.3333 16 29.3333C23.3637 29.3333 29.3333 23.3637 29.3333 16C29.3333 8.63619 23.3637 2.66666 16 2.66666C8.63616 2.66666 2.66663 8.63619 2.66663 16Z'
        stroke='#00257D'
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M22.2302 27.7913C20.6667 18.6667 16.6667 10.6667 11.3334 3.5062'
        stroke='#00257D'
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M2.75537 14.4541C8.00005 14.6667 20.3772 14 25.522 6.66666'
        stroke='#00257D'
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M29.2902 17.08C20.4583 14.4543 9.99998 18.6668 6.97522 25.8151'
        stroke='#00257D'
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </svg>
  );
}

function DribbleIcon2({ ...props }) {
  return (
    <svg
      width='21'
      height='20'
      viewBox='0 0 21 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M2.47681 9.99984C2.47681 14.6023 6.20764 18.3332 10.8101 18.3332C15.4126 18.3332 19.1435 14.6023 19.1435 9.99984C19.1435 5.39734 15.4126 1.6665 10.8101 1.6665C6.20764 1.6665 2.47681 5.39734 2.47681 9.99984Z'
        stroke='white'
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M14.7041 17.3694C13.7266 11.6669 11.2266 6.66689 7.89331 2.19189'
        stroke='white'
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M2.53247 9.03317C5.80997 9.1665 13.5458 8.74984 16.7616 4.1665M19.1166 10.6748C13.5966 9.03317 7.05997 11.6665 5.1683 16.134'
        stroke='white'
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </svg>
  );
}

export default DribbleIcon;
