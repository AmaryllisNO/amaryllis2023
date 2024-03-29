import Head from 'next/head';
import Image from 'next/image';

// components
import Content from '@/components/Content';
import { useState } from 'react';
import Accordion from '@/components/Accordion';
import { useTheme } from 'styled-components';

export default function Home() {
  const theme = useTheme();
  const [tab, setTab] = useState('index');

  return (
    <>
      <Head>
        <title>{`Amaryllis | ${tab}`}</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='h-screen'>
        <div className='hero-image h-1/2 relative bottom-1 overflow-hidden'>
          <Image
            src='/img/grudge overlay 1.png'
            alt='grudge overlay'
            fill
            style={{
              zIndex: 1,
              transform: 'scale(1.01)',
            }}
          />
          <Image
            src='/img/amaryllis-hero.png'
            alt='hero image'
            fill
            style={{ transform: 'scale(1.1)' }}
          />
        </div>
        <div className='h-1/2 '>
          <p
            className='pb-4 pl-6 pr-6 text-center'
            style={theme.fonts.trispaced.style}
          >
            Frontend Developer / UX/UI Designer / Artist / Music Producer
          </p>
          <Accordion />
        </div>
      </main>
    </>
  );
}
