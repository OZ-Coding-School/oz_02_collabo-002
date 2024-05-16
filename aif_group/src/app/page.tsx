'use client';
import Header from '@/containers/main/Header';
import AboutSection from '@/containers/main/AboutSection';
import MainBanner from '@/containers/main/MainBanner';
import HowToCustomSection from '@/containers/main/HowToCustomSection';
import LastBanner from '@/containers/main/LastBanner';
import Footer from '@/containers/main/Footer';
import AIImageSection from '@/containers/main/AIImageSection';
import ScrollUpButton from '@/components/ScrollUpButton';
import React, { useEffect, useState } from 'react';
import MobileMainBanner from '@/containers/main/MobileMainBanner';
import useCheckWidth from '@/hooks/useCheckWidth';

export default function Home() {
  const innerWidth = useCheckWidth();

  return (
    <main>
      {innerWidth >= 768 && <Header />}
      <section>
        {innerWidth >= 768 ? <MainBanner /> : <MobileMainBanner />}
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
      </section>
      <Footer />
      <ScrollUpButton />
    </main>
  );
}
