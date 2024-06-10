'use client';

import IntroCta from '@/sections/intro-cta';
import Testimonial from '@/sections/testimonial';
import React from 'react';
import CTAContent from '@/sections/cta';
import CTAContentIlustration from '@/assets/ilustration/project-cta.svg';
import ProjectCard from './card';
import { useSuspenseQuery } from '@apollo/client';
import { useRouter } from 'next/navigation';
import { QUERY_PROEJCTPAGE } from '@/graphql/queries';
import { twMerge as cx } from 'tailwind-merge';
import useResponsive from '@/hooks/useResponse';

export default function Projectpage() {
  const router = useRouter();
  const { data, isLoading } = useSuspenseQuery(QUERY_PROEJCTPAGE);

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
        onClick={() => router.push('/contact')}
      />
      <Projects projects={data?.projects} />
      <Testimonial />
      <CTAContent
        ilustraion={CTAContentIlustration}
        cta='Designed a Cutting-Edge UI That Enhanced User Experience And Increased Customer Engagement By 30%'
        onClick={() => router.push('/contact')}
        className='pt-5'
      />
    </>
  );
}

function Projects({ projects }) {
  const isMobile = useResponsive('sm');
  const router = useRouter();
  return (
    <div className='container sm:grid sm:grid-cols-4 sm:gap-6 flex gap-3 px-6 sm:px-0 overflow-auto'>
      {projects?.map((project, idx) => (
        <ProjectCard
          key={project.id}
          image={project.image.url}
          title={project.title}
          layout={idx % 3 === 0 && !isMobile ? 'vertical' : 'horizontal'}
          className={cx(
            idx % 3 === 0
              ? 'col-span-4 sm:col-span-4'
              : 'col-span-4 sm:col-span-2'
          )}
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in convallis mauris. Aenean a faucibus nunc, sed facilisis
  neque. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas quis est elementum, dictum nunc accumsan, condimentum sem. Nulla metus orci, elementum in odio ut, dignissim rutrum ipsum.'
          onClick={() => router.push('/project')}
        />
      ))}
    </div>
  );
}
