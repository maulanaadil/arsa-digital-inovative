'use client';

import Button from '@/components/button';
import { QUERY_CONTACTPAGE } from '@/graphql/queries';
import useResponsive from '@/hooks/useResponse';
import { useSuspenseQuery } from '@apollo/client';
import { useState } from 'react';

const activeSosmed = [
  'Dribble',
  'Behance',
  'Facebook',
  'Instagram',
  'Linkedin',
];

export default function Contactpage() {
  const { data, isLoading } = useSuspenseQuery(QUERY_CONTACTPAGE);
  return (
    <div className='container sm:pb-[10rem] py-10 sm:pt-[4rem] px-6 sm:px-0'>
      <div className='flex grow sm:flex-row flex-col items-center gap-10 sm:gap-[8.25rem] justify-center'>
        <ContactDetail contact={data?.contact} />
        <Form contact={data?.contact} />
      </div>
      <FindUs offices={data?.offices} socialMedias={data?.socialMedias} />
    </div>
  );
}

function ContactDetail({ contact }) {
  return (
    <div className='h-full w-full flex flex-col gap-3 sm:gap-6'>
      <p className='font-bold text-primary-orange text-xs sm:text-base uppercase'>
        Contact Us
      </p>
      <div className='flex flex-col sm:gap-4 gap-2'>
        <p className='text-black font-bold sm:text-[4rem] text-[1.75rem] leading-normal sm:leading-[4.5rem]'>
          Let&apos;s talk now!
        </p>
        <p className='text-black sm:text-xl text-xs'>
          Have a project idea? Fill out our form or drop us a direct email!
        </p>
      </div>
      <div className='flex flex-col sm:gap-6 gap-3 sm:mt-[8rem] mt-5'>
        <div className='flex items-center gap-4'>
          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className='sm:w-auto sm:h-auto w-4 h-4'
          >
            <g clip-path='url(#clip0_128_54)'>
              <path
                d='M23.347 17.6136L19.9977 14.2643C18.8015 13.0681 16.768 13.5467 16.2896 15.1016C15.9307 16.1782 14.7346 16.7763 13.658 16.537C11.2657 15.9389 8.03602 12.8289 7.43793 10.317C7.07908 9.24036 7.79679 8.04419 8.87334 7.68538C10.4284 7.20692 10.9068 5.17343 9.71066 3.97726L6.36138 0.627989C5.40445 -0.209329 3.96905 -0.209329 3.13173 0.627989L0.859009 2.90071C-1.41371 5.29305 1.09824 11.6327 6.72023 17.2547C12.3422 22.8767 18.6819 25.5083 21.0743 23.116L23.347 20.8432C24.1843 19.8863 24.1843 18.4509 23.347 17.6136Z'
                fill='#F7971E'
              />
            </g>
            <defs>
              <clipPath id='clip0_128_54'>
                <rect width='24' height='24' fill='white' />
              </clipPath>
            </defs>
          </svg>
          <p className='sm:text-xl text-xs text-black '>{contact?.phone}</p>
        </div>
        <div className='flex items-center gap-4'>
          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className='sm:w-auto sm:h-auto w-4 h-4'
          >
            <path
              fill-rule='evenodd'
              clip-rule='evenodd'
              d='M3.33366 3.38892C1.68831 3.38892 0.354492 4.75694 0.354492 6.44447V17.5556C0.354492 19.2431 1.68831 20.6111 3.33366 20.6111H20.667C22.3124 20.6111 23.6462 19.2431 23.6462 17.5556V6.44447C23.6462 4.75694 22.3124 3.38892 20.667 3.38892H3.33366ZM7.0496 7.984C6.68198 7.72007 6.17536 7.81177 5.91804 8.1888C5.6607 8.56585 5.75011 9.08546 6.11772 9.34938L11.5344 13.2382C11.8141 13.4391 12.1866 13.4391 12.4663 13.2382L17.8829 9.34938C18.2505 9.08546 18.34 8.56585 18.0826 8.1888C17.8253 7.81177 17.3186 7.72007 16.951 7.984L12.0003 11.5384L7.0496 7.984Z'
              fill='#F7971E'
            />
          </svg>

          <p className='sm:text-xl text-xs text-black '>{contact?.email}</p>
        </div>
      </div>
    </div>
  );
}

function Form({ contact }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    const mailto = `mailto:${contact?.email}?subject=Message from ${name}&body=${message}`;

    return window.open(mailto);
  };

  return (
    <div className='w-full h-full bg-pureWhite border border-lightGrey sm:p-8 p-3 flex flex-col sm:gap-12 gap-4'>
      <InputText
        label='Name/Company'
        placeholder='Name/Company'
        value={name}
        onChange={(val) => setName(val)}
      />
      <InputText
        label='Email'
        placeholder='Email'
        value={email}
        onChange={(val) => setEmail(val)}
      />
      <InputTextArea
        label='Message'
        placeholder='Message'
        value={message}
        onChange={(val) => setMessage(val)}
      />
      <Button
        text='Send Message'
        onClick={() => handleSendMessage()}
        className='w-full py-5 text-xl'
      />
    </div>
  );
}

function FindUs({ offices, socialMedias }) {
  const isMobile = useResponsive('sm');
  const contactSosmed = socialMedias?.filter((sosmed) =>
    activeSosmed?.includes(sosmed.platform)
  );

  return (
    <div className='flex flex-col justify-center items-center gap-3 sm:gap-6 pt-10 sm:pt-[10rem]'>
      <p className='font-bold text-primary-orange text-xs sm:text-base uppercase'>
        Where we are
      </p>
      <p className='text-black font-bold text-2xl sm:text-[3.25rem] leading-normal sm:leading-[4rem]'>
        you Can Find Us Here
      </p>
      <div className='flex items-center sm:flex-row flex-col grow gap-6 mt-4'>
        {offices?.slice(0, 2)?.map((office) => (
          <div
            key={office.id}
            className='w-full h-[10rem] sm:h-[18rem] sm:px-8 sm:py-6 p-4 bg-pureWhite border border-lightGrey flex flex-col justify-between text-center'
          >
            <p className='text-base sm:text-[1.75rem] text-black font-bold leading-[2.1rem]'>
              {office.type}
            </p>
            <p className='text-xs sm:text-xl text-black'>{office.address}</p>
            <p className='text-xs sm:text-xl text-black font-bold'>
              Phone: {office.phone}
            </p>
          </div>
        ))}
        <div className='w-full h-fit sm:h-[18rem] px-8 py-6 bg-pureWhite border border-lightGrey flex flex-col gap-0 sm:gap-8 text-center'>
          <p className='text-base sm:text-[1.75rem] text-black font-bold leading-[2.1rem]'>
            Our Social Media
          </p>
          <div className='flex flex-col items-center justify-center gap-1'>
            {contactSosmed?.map((social) => (
              <a
                key={social.id}
                className='font-bold text-base sm:text-xl text-[#205BE6] underline'
                href={social.url}
                target='_blank'
              >
                {social.platform.charAt(0).toUpperCase() +
                  social.platform.slice(1)}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className='mt-4'>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126748.31293055433!2d107.52233774695712!3d-6.904379724587457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e7450b06a659%3A0xa2c968a02c45b69d!2sPT%20Astrajingga%20Inovasi%20Digital!5e0!3m2!1sid!2sid!4v1717846596851!5m2!1sid!2sid'
          width={isMobile ? '450' : '1272'}
          height={isMobile ? '426' : '700'}
          allowfullscreen=''
          loading='lazy'
          referrerpolicy='no-referrer-when-downgrade'
        ></iframe>
      </div>
    </div>
  );
}

function InputText({ label, placeholder, value, onChange }) {
  return (
    <div className='flex flex-col gap-2 sm:gap-4'>
      <label htmlFor='name' className='text-black sm:text-base text-xs'>
        {label}
      </label>
      <input
        type='text'
        name='name'
        id='name'
        className='py-5 px-6 bg-pureWhite text-xs sm:text-base border border-lightGrey focus:outline-none placeholder:text-black text-black'
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

function InputTextArea({ label, placeholder, value, onChange, rows = 5 }) {
  return (
    <div className='flex flex-col gap-2 sm:gap-4'>
      <label htmlFor='name' className='text-black sm:text-base text-xs'>
        {label}
      </label>
      <textarea
        name='name'
        id='name'
        className='py-5 px-6 bg-pureWhite text-xs sm:text-base border border-lightGrey focus:outline-none placeholder:text-black text-black'
        placeholder={placeholder}
        value={value}
        rows={rows}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
