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
      {/* Loading Screen */}
      {!loaded && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0c0c0c]">
          <div className="text-white/50 font-body uppercase tracking-[0.2em] text-sm animate-pulse">
            Loading Cinematic Video...
          </div>
        </div>
      )}

      <div className="sticky top-0 w-full h-screen overflow-hidden">
        {/* We use a video element instead of a canvas to natively scrub through the .mp4 */}
        <video
          ref={videoRef}
          src={videoFile}
          className="w-full h-full object-cover"
          muted
          loop
          autoPlay
          playsInline
          preload="auto"
        />
        
        {/* Overlay Dark Wash for readability */}
        <div className="absolute inset-0 bg-black/50 pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent pointer-events-none"></div>

        {/* Text Overlay - Animated based on overall page scroll, decoupled from canvas */}
        <div className="absolute inset-0 flex items-center justify-center flex-col pointer-events-none z-10 px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-[7rem] font-heading font-normal uppercase tracking-[0.1em] text-white drop-shadow-2xl">
              BIET <span className="text-gray-200">DVG</span>
            </h1>
            
            <div className="w-24 h-[1px] bg-white/50 mx-auto my-8"></div>
            
            <p className="text-lg md:text-2xl text-gray-200 font-light tracking-[0.25em] uppercase drop-shadow-md">
              Bapuji Institute of Engineering and Technology
            </p>
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
