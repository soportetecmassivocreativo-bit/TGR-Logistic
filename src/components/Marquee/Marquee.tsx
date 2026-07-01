'use client';

import React, { useRef } from 'react';
import styles from './Marquee.module.css';
import { useGsap } from '@/hooks/useGsap';
import gsap from 'gsap';

export default function Marquee() {
  const marqueeRef = useRef<HTMLDivElement>(null);
  
  useGsap(() => {
    const marquee1 = gsap.to('.marquee-track-1', {
      xPercent: -50,
      ease: 'none',
      duration: 25,
      repeat: -1,
    });

    const marquee2 = gsap.fromTo('.marquee-track-2', 
      { xPercent: -50 },
      {
        xPercent: 0,
        ease: 'none',
        duration: 25,
        repeat: -1,
      }
    );

    // Sync speed with scroll velocity
    gsap.timeline({
      scrollTrigger: {
        trigger: marqueeRef.current,
        start: 'top bottom',
        end: 'bottom top',
        onUpdate: (self) => {
          const velocity = Math.min(Math.abs(self.getVelocity() * 0.005), 10);
          gsap.to([marquee1, marquee2], {
            timeScale: 1 + velocity,
            duration: 0.5,
            overwrite: 'auto',
          });
        },
      }
    });

    // Reset speed to normal timescale when scroll stops
    const tickerCallback = () => {
      if (!gsap.getProperty(marqueeRef.current, 'isScrolling')) {
        gsap.to([marquee1, marquee2], {
          timeScale: 1,
          duration: 0.8,
          overwrite: 'auto',
        });
      }
    };
    gsap.ticker.add(tickerCallback);

    return () => {
      gsap.ticker.remove(tickerCallback);
    };
  }, []);

  const items = [
    'TRANSPORTE', 'LOGÍSTICA', 'ADUANAS', 'MERCANCÍA', 'SEGURIDAD', 'PUNTUALIDAD',
    'TRANSPORTE', 'LOGÍSTICA', 'ADUANAS', 'MERCANCÍA', 'SEGURIDAD', 'PUNTUALIDAD'
  ];

  return (
    <div className={styles.marqueeContainer} ref={marqueeRef}>
      <div className={styles.fadeLeft}></div>
      <div className={styles.fadeRight}></div>
      
      <div className={styles.marquee}>
        <div className={`marquee-track-1 ${styles.track}`}>
          {items.map((item, i) => (
            <div key={i} className={styles.item}>
              <span>{item}</span>
              <span className={styles.dot}>•</span>
            </div>
          ))}
        </div>
      </div>
      
      <div className={`${styles.marquee} ${styles.marqueeReverse}`}>
        <div className={`marquee-track-2 ${styles.track} ${styles.textOutline}`}>
          {items.map((item, i) => (
            <div key={`rev-${i}`} className={styles.item}>
              <span>{item}</span>
              <span className={styles.dot}>•</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
