import React, { useEffect } from 'react';
import { ReactLenis, useLenis } from '@studio-freight/react-lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Navbar from './components/Navbar';
import HeroCanvas from './components/HeroCanvas';
import InstitutionalValues from './components/InstitutionalValues';
import EventSection from './components/EventSection';
import Highlights from './components/Highlights';
import DepartmentsGrid from './components/DepartmentsGrid';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import Cursor from './components/Cursor';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const lenis = useLenis(({ scroll }) => {
    // optional onScroll callback
  });

  useEffect(() => {
    // Global ScrollTrigger refresh when Lenis scrolls
    ScrollTrigger.refresh();
  }, []);

  return (
    <ReactLenis root options={{ lerp: 0.05, smoothWheel: true }}>
      <Cursor />
      <div className="relative w-full bg-background text-text selection:bg-accent selection:text-background cursor-none">
        <Navbar />
        
        {/* 
          Hero Canvas Section 
          Provides the scroll-based sequence animation.
        */}
        <HeroCanvas />

        <div className="relative z-10 w-full bg-background">
          <InstitutionalValues />
          <EventSection />
          <DepartmentsGrid />
          <Highlights />
          <CTASection />
          <Footer />
        </div>
      </div>
    </ReactLenis>
  );
}

export default App;
