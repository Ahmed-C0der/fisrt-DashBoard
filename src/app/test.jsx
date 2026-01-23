'use client';               // ← keep this on top

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function HorizontalGallery() {
  const track = useRef(null);

  useEffect(() => {
    if (!track.current) return;

    const slides = Array.from(track.current.children);

    /* give the track a total width = number-of-slides × 100vw */
    gsap.set(track.current, { width: `${slides.length * 100}%` });

    /* horizontal tween */
    const tween = gsap.to(track.current, {
      xPercent: -100 * (slides.length - 1),
      ease: 'none',
    });

    /* scroll-driven animation */
    const st = ScrollTrigger.create({
      trigger: track.current.parentElement,
      start: 'top top',
      end: () => `+=${window.innerWidth * slides.length}`,
      pin: true,
      scrub: 1,
      animation: tween,
      invalidateOnRefresh: true,
    });

    /* cleanup */
    return () => {
      st.kill();
      tween.kill();
    };
  }, []);

  return (
    <section
      style={{
        height: '100vh',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* horizontal track */}
      <div
        ref={track}
        style={{
          display: 'flex',
          height: '100%',
        }}
      >
        {/* 5 slides – change or map as you like */}
        {[1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            style={{
              flex: '0 0 100vw',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: `hsl(${i * 55}, 70%, 60%)`,
            }}
          >
            <h1 style={{ fontSize: 'clamp(2rem, 8vw, 6rem)', color: '#fff' }}>
              Slide {i}
            </h1>
          </div>
        ))}
      </div>
    </section>
  );
}