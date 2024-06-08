'use client';

import IntroCta from '@/sections/intro-cta';
import Testimonial from '@/sections/testimonial';
import React from 'react';
import CTAContent from '@/sections/cta';
import CTAContentIlustration from '@/assets/ilustration/project-cta.svg';
import ProjectCard from './card';

export default function Project() {
  return (
    <>
      <IntroCta
        section='Our project'
        title='Comprehensive Development Services'
        description={
          <span>
            From initial concept to final deployment, our comprehensive
            development services deliver custom software solutions <br />{' '}
            tailored to meet your unique business needs, ensuring excellence and
            innovation.
          </span>
        }
        hasButton
        onClick={() => alert('get started now')}
      />
      <Projects />
      <Testimonial />
      <CTAContent
        ilustraion={CTAContentIlustration}
        cta='Designed a Cutting-Edge UI That Enhanced User Experience And Increased Customer Engagement By 30%'
        onClick={() => alert('get started now')}
        className='pt-5'
      />
    </>
  );
}

function Projects() {
  return (
    <div className='container grid grid-cols-4 gap-6'>
      <ProjectCard
        image='https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=2847&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        title='This is Us'
        className='col-span-4'
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in convallis mauris. Aenean a faucibus nunc, sed facilisis
neque. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas quis est elementum, dictum nunc accumsan, condimentum sem. Nulla metus orci, elementum in odio ut, dignissim rutrum ipsum.'
        onClick={() => alert('see detail')}
      />
      <ProjectCard
        image='https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=2847&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        title='This is Us'
        layout='horizontal'
        className='col-span-2'
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in convallis mauris. Aenean a faucibus nunc, sed facilisis
neque. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas quis est elementum, dictum nunc accumsan, condimentum sem. Nulla metus orci, elementum in odio ut, dignissim rutrum ipsum.'
        onClick={() => alert('see detail')}
      />
      <ProjectCard
        image='https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=2847&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        title='This is Us'
        layout='horizontal'
        className='col-span-2'
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in convallis mauris. Aenean a faucibus nunc, sed facilisis
neque. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas quis est elementum, dictum nunc accumsan, condimentum sem. Nulla metus orci, elementum in odio ut, dignissim rutrum ipsum.'
        onClick={() => alert('see detail')}
      />
    </div>
  );
}
