import Preloader from '@/components/Preloader/Preloader';
import Navbar from '@/components/Navbar/Navbar';
import Hero from '@/components/Hero/Hero';
import Features from '@/components/Features/Features';
import About from '@/components/About/About';
import WhyTGR from '@/components/WhyTGR/WhyTGR';
import Technology from '@/components/Technology/Technology';
import Fleet from '@/components/Fleet/Fleet';
import Compliance from '@/components/Compliance/Compliance';
import Testimonials from '@/components/Testimonials/Testimonials';
import Social from '@/components/Social/Social';
import CTA from '@/components/CTA/CTA';
import Footer from '@/components/Footer/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <About />
      <WhyTGR />
      <Technology />
      <Fleet />
      <Compliance />
      <Testimonials />
      <Social />
      <CTA />
      <Footer />
    </main>
  );
}
