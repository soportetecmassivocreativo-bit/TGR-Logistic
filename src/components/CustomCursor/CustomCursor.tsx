'use client';

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import styles from './CustomCursor.module.css';

export default function CustomCursor() {
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorRingRef = useRef<HTMLDivElement>(null);
  const [hoverText, setHoverText] = useState('');
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    // Check if device is desktop
    const checkDevice = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkDevice();
    window.addEventListener('resize', checkDevice);

    if (window.innerWidth < 1024) return;

    const cursorDot = cursorDotRef.current;
    const cursorRing = cursorRingRef.current;

    if (!cursorDot || !cursorRing) return;

    // Set initial positions
    gsap.set(cursorDot, { xPercent: -50, yPercent: -50 });
    gsap.set(cursorRing, { xPercent: -50, yPercent: -50 });

    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const mouse = { x: pos.x, y: pos.y };

    const onMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;

      gsap.to(cursorDot, {
        x: mouse.x,
        y: mouse.y,
        duration: 0.1,
        ease: 'none',
      });
    };

    window.addEventListener('mousemove', onMouseMove);

    // Quick-setter with GSAP for smooth ring delay
    const xSet = gsap.quickSetter(cursorRing, 'x', 'px');
    const ySet = gsap.quickSetter(cursorRing, 'y', 'px');

    gsap.ticker.add(() => {
      const dt = 1.0 - Math.pow(1.0 - 0.15, gsap.ticker.deltaRatio());
      pos.x += (mouse.x - pos.x) * dt;
      pos.y += (mouse.y - pos.y) * dt;
      xSet(pos.x);
      ySet(pos.y);
    });

    // Hover effect listeners
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Find interactive elements
      const interactive = target.closest('a, button, [data-cursor]');
      if (interactive) {
        setIsHovering(true);
        const text = interactive.getAttribute('data-cursor');
        if (text) {
          setHoverText(text);
        }
        
        gsap.to(cursorRing, {
          scale: text ? 4 : 2,
          backgroundColor: text ? 'rgba(212, 255, 0, 0.9)' : 'rgba(212, 255, 0, 0.15)',
          borderColor: 'transparent',
          duration: 0.3,
          ease: 'power2.out',
        });
        
        gsap.to(cursorDot, {
          scale: 0,
          duration: 0.2,
        });
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactive = target.closest('a, button, [data-cursor]');
      if (interactive) {
        setIsHovering(false);
        setHoverText('');
        
        gsap.to(cursorRing, {
          scale: 1,
          backgroundColor: 'transparent',
          borderColor: 'var(--tgr-lime)',
          duration: 0.3,
          ease: 'power2.out',
        });
        
        gsap.to(cursorDot, {
          scale: 1,
          duration: 0.2,
        });
      }
    };

    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('resize', checkDevice);
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <>
      <div className={styles.cursorDot} ref={cursorDotRef}></div>
      <div className={`${styles.cursorRing} ${isHovering ? styles.hovering : ''}`} ref={cursorRingRef}>
        {hoverText && <span className={styles.hoverText}>{hoverText}</span>}
      </div>
    </>
  );
}
