import Header from '@/containers/main/Header';
import AboutSection from '@/containers/main/AboutSection';
import MainBanner from '@/containers/main/MainBanner';
import HowToCustomSection from '@/containers/main/HowToCustomSection';
import LastBanner from '@/containers/main/LastBanner';
import Footer from '@/containers/main/Footer';
import AIImageSection from '@/containers/main/AIImageSection';
import ScrollUpButton from '@/components/ScrollUpButton';
import React from 'react';
import FeedbackPopup from '@/containers/modal/FeedbackPopup';

export default function Home() {
  return (
    <>
      {/* <Header />
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
      <ScrollUpButton /> */}
      <FeedbackPopup />
    </>
  );
}
