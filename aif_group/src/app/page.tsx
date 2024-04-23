import Header from '@/components/Header';
import AboutSection from '@/containers/AboutSection';
import MainBanner from '@/containers/MainBanner';
import HowToCustomSection from '@/containers/HowToCustomSection';
import LastBanner from '@/containers/LastBanner';
import Footer from '@/components/Footer';
import AIImageSection from '@/containers/AIImageSection';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <MainBanner />
        <AboutSection />
        <AIImageSection />
        <HowToCustomSection />
        <LastBanner />
      </main>
      <Footer />
    </>
  );
}
