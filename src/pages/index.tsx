import React from 'react';

import AnimatedImage from '@/components/animation/motionImage';
import AnimatedText from '@/components/animation/motionText';
import Navbar from '@/components/Navbar';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

function Index() {
  return (
    <Main meta={<Meta title="Home" description="Tryyon home page" />}>
      <Navbar path={[{ redirect: '/', display: 'Home' }]} heading="Tryyon" />
      <div className="flex h-screen flex-col lg:flex-row">
        <div className="my-10 flex flex-col items-center justify-start p-16 lg:w-4/6 lg:flex-none lg:items-start lg:p-32">
          <AnimatedText
            tag="h3"
            className="text-center text-3xl text-primary lg:text-left"
            animate="fadeInRight"
          >
            WELCOME TO
          </AnimatedText>
          <AnimatedText
            tag="h1"
            className="mb-8 text-8xl font-bold text-primary"
            animate="fadeInRight"
          >
            Tryyon
          </AnimatedText>
          <AnimatedText
            tag="h1"
            className="max-w-lg text-center text-lg text-primary md:text-left"
            animate="fadeIn"
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis
            dolorem est, inventore vero molestias ad ducimus, fugiat, non
            expedita incidunt dolorum laudantium aut? Aliquam debitis
            dignissimos porro officia unde repudiandae.
          </AnimatedText>
        </div>
        <AnimatedImage
          animate="fadeIn"
          src="https://via.placeholder.com/500x800"
        />
      </div>
    </Main>
  );
}

export default Index;
