import dayjs from 'dayjs';
import React from 'react';

export default function BlogDetail() {
  return (
    <>
      <div className='container pt-[7.5rem] pb-[4.5rem]'>
        <div className='flex flex-col gap-6'>
          <p className='text-black font-bold text-[4rem] leading-[4.5rem]'>
            Exploring the stories and identities of half-Japanese people online
            through photos
          </p>
          <div className='flex items-center gap-10'>
            <div className='flex items-center gap-3'>
              <div className='w-16 h-16 rounded-full overflow-clip'>
                <img
                  src='https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2861&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                  alt='team1'
                  className='w-full h-full object-cover'
                />
              </div>
              <div className='flex flex-col gap-1'>
                <p className='text-xl text-black font-bold'>Abrahan John</p>
                <p className='text-gray-500'>Indonesia</p>
              </div>
            </div>
            <div className='w-[1px] h-12 bg-gray-400'></div>
            <div className='flex flex-col gap-1'>
              <p className='text-xl text-black font-bold'>Sunday</p>
              <p className='text-gray-500'>
                {dayjs('2022-03-01').format('DD MMM YYYY')}
              </p>
            </div>
          </div>
        </div>
      </div>
      <img
        src='https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2861&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        className='w-full h-[45.125rem] object-cover'
        alt='blog-detail'
      />
      <div className='container py-[4.5rem] flex grow gap-6'>
        <div className='w-full flex flex-col gap-4 text-xl text-black'>
          <p className=''>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            viverra ante mi, ut finibus est elementum vel. Sed id neque
            faucibus, dapibus velit sagittis, vulputate enim. Maecenas dictum,
            massa eget viverra tincidunt, neque lectus dapibus felis, nec ornare
            nunc nunc vitae nibh. Fusce consequat est eget neque imperdiet, vel
            malesuada turpis laoreet. Quisque tempus, est nec pellentesque
            commodo, risus ex posuere enim, placerat rutrum metus ex eu purus.
            Donec tristique feugiat arcu eu facilisis. Phasellus finibus aliquet
            odio ac consequat. Suspendisse potenti. Cras eleifend lorem id dolor
            volutpat, sit amet tincidunt magna tristique. Pellentesque eu urna
            nec leo tincidunt dictum non quis tortor. Aenean volutpat gravida
            enim maximus semper. Suspendisse fermentum dui at iaculis aliquam.
            Etiam molestie, orci quis fringilla vestibulum, magna risus
            efficitur nibh, eleifend accumsan erat augue at velit. Nam laoreet
            erat in est luctus sodales. Integer lacinia ante est, a tincidunt
            tellus pulvinar nec. Interdum et malesuada fames ac ante ipsum
            primis in faucibus.
          </p>
          <p className=''>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            viverra ante mi, ut finibus est elementum vel. Sed id neque
            faucibus, dapibus velit sagittis, vulputate enim. Maecenas dictum,
            massa eget viverra tincidunt, neque lectus dapibus felis, nec ornare
            nunc nunc vitae nibh. Fusce consequat est eget neque imperdiet, vel
            malesuada turpis laoreet. Quisque tempus, est nec pellentesque
            commodo, risus ex posuere enim, placerat rutrum metus ex eu purus.
            Donec tristique feugiat arcu eu facilisis. Phasellus finibus aliquet
            odio ac consequat. Suspendisse potenti. Cras eleifend lorem id dolor
            volutpat, sit amet tincidunt magna tristique. Pellentesque eu urna
            nec leo tincidunt dictum non quis tortor. Aenean volutpat gravida
            enim maximus semper. Suspendisse fermentum dui at iaculis aliquam.
            Etiam molestie, orci quis fringilla vestibulum, magna risus
            efficitur nibh, eleifend accumsan erat augue at velit. Nam laoreet
            erat in est luctus sodales. Integer lacinia ante est, a tincidunt
            tellus pulvinar nec. Interdum et malesuada fames ac ante ipsum
            primis in faucibus.
          </p>
          <p className=''>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            viverra ante mi, ut finibus est elementum vel. Sed id neque
            faucibus, dapibus velit sagittis, vulputate enim. Maecenas dictum,
            massa eget viverra tincidunt, neque lectus dapibus felis, nec ornare
            nunc nunc vitae nibh. Fusce consequat est eget neque imperdiet, vel
            malesuada turpis laoreet. Quisque tempus, est nec pellentesque
            commodo, risus ex posuere enim, placerat rutrum metus ex eu purus.
            Donec tristique feugiat arcu eu facilisis. Phasellus finibus aliquet
            odio ac consequat. Suspendisse potenti. Cras eleifend lorem id dolor
            volutpat, sit amet tincidunt magna tristique. Pellentesque eu urna
            nec leo tincidunt dictum non quis tortor. Aenean volutpat gravida
            enim maximus semper. Suspendisse fermentum dui at iaculis aliquam.
            Etiam molestie, orci quis fringilla vestibulum, magna risus
            efficitur nibh, eleifend accumsan erat augue at velit. Nam laoreet
            erat in est luctus sodales. Integer lacinia ante est, a tincidunt
            tellus pulvinar nec. Interdum et malesuada fames ac ante ipsum
            primis in faucibus.
          </p>
        </div>
        <div className='w-2/5 flex flex-col gap-4'>
          <p className='font-bold text-black text-[1.75rem]'>Similar News</p>
          {Array.from({ length: 3 }).map((_, index) => (
            <Card key={index} />
          ))}
        </div>
      </div>
    </>
  );
}

function Card() {
  return (
    <div className='w-full flex items-center gap-3'>
      <div className='w-20 h-20 flex flex-none overflow-clip'>
        <img
          src='https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2861&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          alt='team1'
          className='w-full h-full object-cover'
        />
      </div>
      <div className='flex flex-col py-1'>
        <p className='text-black font-bold text-xl line-clamp-2'>
          Developing farming tech to target weeds and reduce herbicide use
        </p>
        <p className='text-gray-500'>
          {dayjs('2022-03-01').format('DD MMM YYYY')}
        </p>
      </div>
    </div>
  );
}
