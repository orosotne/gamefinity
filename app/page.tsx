import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import Showcase from '@/components/Showcase';
import Technology from '@/components/Technology';
import UseCases from '@/components/UseCases';
import Banks from '@/components/Banks';
import CTA from '@/components/CTA';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Page() {
  return (
    <main>
      <Navbar />
      <Hero />
      <HowItWorks />
      <Showcase />
      <Technology />
      <UseCases />
      <Banks />
      <CTA />
      <Contact />
      <Footer />
    </main>
  );
}


