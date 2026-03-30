import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import videoFile from '../../AQN-0EVT7K9G-R_4F7-zPxqImm72kQvyWXgVB1TWQyMjkfPnN8WfWY7Gf213L2DAQoTDQglub5yBSWEGPdDHx5ZC.mp4';

gsap.registerPlugin(ScrollTrigger);

const HeroCanvas = () => {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Auto-play the video normally
    video.play().catch(() => {});
    
    let currentSpeed = 1;
    let targetSpeed = 1;
    let reqId;

    const initScrollTrigger = () => {
      setLoaded(true);
      const st = ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom bottom', 
        id: 'hero-scroll',
      });

      const updateSpeed = () => {
        // Get the current scroll velocity (Math.abs so both up and down scroll speed it up)
        const velocity = Math.abs(st.getVelocity());
        
        // Base speed is 1 (normal playback). Velocity boosts it smoothly up to 6x.
        targetSpeed = 1 + (velocity / 200); 
        targetSpeed = Math.min(Math.max(targetSpeed, 1), 6); 
        
        // Smooth interpolation (Lerp) for that buttery feel
        currentSpeed += (targetSpeed - currentSpeed) * 0.1;
        
        if (video) {
          video.playbackRate = currentSpeed;
        }
        
        reqId = requestAnimationFrame(updateSpeed);
      };
      
      updateSpeed();
    };

    if (video.readyState >= 2) {
      initScrollTrigger();
    } else {
      video.addEventListener('loadeddata', initScrollTrigger);
    }

    return () => {
      cancelAnimationFrame(reqId);
      video.removeEventListener('loadeddata', initScrollTrigger);
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-[250vh] bg-black">

      <div className="sticky top-0 w-full h-screen overflow-hidden">
        {/* We use a video element instead of a canvas to natively scrub through the .mp4 */}
        <video
          ref={videoRef}
          src={videoFile}
          className="w-full h-full object-cover object-top"
          muted
          loop
          autoPlay
          playsInline
          preload="auto"
        />
        
        {/* Overlay Dark Wash for readability */}
        <div className="absolute inset-0 bg-black/50 pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent pointer-events-none"></div>

        <div className="absolute inset-0 flex items-center justify-center flex-col pointer-events-none z-10 px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
            className="text-center"
          >
            <h1 className="text-6xl md:text-[9.5rem] font-heading font-extralight uppercase tracking-[0.2em] leading-none mb-6 flex flex-wrap items-center justify-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/60 drop-shadow-sm px-2">BIET</span>
              <span className="hidden md:block mx-10 w-[2px] h-24 bg-gradient-to-b from-transparent via-accent/30 to-transparent rotate-12"></span>
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-accent via-accent/90 to-accent/50 gold-glow px-2">DVG</span>
            </h1>
            
            <div className="flex items-center justify-center gap-8 mb-10">
              <div className="w-16 md:w-32 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
              <div className="w-[6px] h-[6px] rounded-full bg-accent/60 shadow-[0_0_15px_rgba(197,160,89,0.8)]"></div>
              <div className="w-16 md:w-32 h-[1px] bg-gradient-to-l from-transparent via-white/20 to-transparent"></div>
            </div>
            
            <div className="overflow-hidden">
              <motion.p 
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 1.2 }}
                className="text-xs md:text-sm text-white/60 font-body font-light tracking-[0.8em] md:tracking-[1.2em] uppercase max-w-5xl mx-auto leading-loose"
              >
                Bapuji Institute of Engineering and Technology
              </motion.p>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none opacity-50 z-10">
          <div className="text-xs uppercase tracking-widest mb-4">Scroll to explore</div>
          <div className="w-[1px] h-16 bg-white/20 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-accent animate-scrolldown"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCanvas;
