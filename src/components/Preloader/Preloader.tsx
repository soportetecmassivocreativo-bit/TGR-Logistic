'use client';

import React, { useEffect, useState } from 'react';
import styles from './Preloader.module.css';
import gsap from 'gsap';

export default function Preloader() {
  const [isComplete, setIsComplete] = useState(false);
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const counterObj = { value: 0 };
    const tl = gsap.timeline({
      onComplete: () => setIsComplete(true),
    });

    // Animate percentage
    tl.to(counterObj, {
      value: 100,
      duration: 1.8,
      ease: 'power3.inOut',
      onUpdate: () => {
        setPercentage(Math.floor(counterObj.value));
      }
    });

    // Progress bar animation synced
    tl.to('.progress-bar', {
      width: '100%',
      duration: 1.8,
      ease: 'power3.inOut',
    }, 0);

    // Title characters reveal
    tl.fromTo('.preloader-char', 
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.05, ease: 'power3.out' },
      0.2
    );

    // Fade out and slide up panels
    tl.to('.preloader-container', {
      yPercent: -100,
      duration: 1.2,
      ease: 'power4.inOut',
    }, '+=0.2');

  }, []);

  if (isComplete) return null;

  const title = "TGR LOGISTICS";

  return (
    <div className={`preloader-container ${styles.preloader}`}>
      <div className={styles.techBackground}></div>
      <div className={styles.content}>
        <div className={styles.logoWrapper}>
          <div className={styles.logo}>
            {title.split("").map((char, index) => (
              <span key={index} className="preloader-char" style={{ display: 'inline-block' }}>
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </div>
        </div>
        
        <div className={styles.middleSection}>
          <div className={styles.progressContainer}>
            <div className={`progress-bar ${styles.progressBar}`}></div>
          </div>
          <div className={styles.percentage}>
            {percentage.toString().padStart(3, '0')}%
          </div>
        </div>

        <div className={styles.techDetails}>
          <span>SYS.STATUS: LOADING...</span>
          <span>EST.TIME: 1.8S</span>
        </div>
      </div>
    </div>
  );
}
