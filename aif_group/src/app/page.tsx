import Header from '@/components/Header';
import AiImageSection from '@/containers/AiImageSection';
import AboutSection from '@/containers/AboutSection';
import MainBanner from '@/containers/MainBanner';
import HowToCustomSection from '@/containers/HowToCustomSection';
import LastBanner from '@/containers/LastBanner';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <MainBanner />
        <AboutSection />
        <AiImageSection />
        <HowToCustomSection />
        <LastBanner />
      </main>
      <footer>footer</footer>
    </>
  );
}
