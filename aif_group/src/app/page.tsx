import Header from '@/components/Header';
import AboutSection from '@/containers/AboutSection';
import MainBanner from '@/containers/MainBanner';
import HowToCustomSection from '@/containers/HowToCustomSection';
import LastBanner from '@/containers/LastBanner';
import Footer from '@/components/Footer';
import AIImageSection from '@/containers/AIImageSection';
import ScrollUpButton from '@/components/ScrollUpButton';
import React from 'react';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <MainBanner />
        <div id="about">
          <AboutSection />
        </div>
        <div id="ai">
          <AIImageSection />
        </div>
        <div id="how">
          <HowToCustomSection />
        </div>
        <LastBanner />
      </main>
      <Footer />
      <ScrollUpButton />
    </>
  );
}
