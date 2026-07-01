'use client';

import React, { useRef } from 'react';
import styles from './Hero.module.css';
import Image from 'next/image';
import { useGsap } from '@/hooks/useGsap';
import gsap from 'gsap';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const bgImageRef = useRef<HTMLDivElement>(null);
  
  useGsap(() => {
    // Reveal timeline - synced with preloader
    const tl = gsap.timeline({ delay: 2.0 }); 
    
    tl.fromTo(bgImageRef.current, 
      { scale: 1.2, opacity: 0 }, 
      { scale: 1, opacity: 1, duration: 2, ease: 'power3.out' }
    )
    .fromTo('.hero-title-line', 
      { y: 120, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1.2, stagger: 0.15, ease: 'power4.out' },
      '-=1.6'
    )
    .fromTo('.hero-subtitle',
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' },
      '-=0.8'
    )
    .fromTo('.hero-cta',
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' },
      '-=0.6'
    );

    // Parallax scroll on bg image
    if (heroRef.current && bgImageRef.current) {
      gsap.to(bgImageRef.current, {
        yPercent: 15,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true
        }
      });
    }
  }, []);

  return (
    <section id="home" className={styles.hero} ref={heroRef}>
      <div className={styles.background}>
        <div className={styles.imageWrapper} ref={bgImageRef}>
          <Image 
            src="/images/hero_day_truck_new5.png"
            alt="Flota de gandolas Mack blancas con logo oficial de TGR Logistics"
            fill
            priority
            unoptimized={true}
            className={styles.image}
          />
        </div>
        <div className={styles.overlay}></div>
      </div>

      {/* Title overlay */}
      <div className={styles.titleBlock}>
        <div className={styles.titleEyebrow}>
          <span className={`${styles.eyebrowLine} hero-subtitle`}>Logística de Carga Pesada</span>
        </div>
        <h1 className={styles.heroTitle}>
          <span className={`${styles.titleLine} hero-title-line`}>Transporte</span>
          <span className={`${styles.titleLine} ${styles.titleLineAccent} hero-title-line`}>Garantizado</span>
          <span className={`${styles.titleLine} hero-title-line`}>& Confiable</span>
        </h1>
        <p className={`${styles.heroDescription} hero-subtitle`}>
          Soluciones integrales de transporte terrestre en Venezuela.<br />
          Flota moderna · Rutas nacionales · Entrega segura.
        </p>
      </div>

      <div className={`${styles.bottomActions} hero-cta`}>
        <a href="#contact" className="awwwards-btn awwwards-btn-secondary" data-cursor="COTIZAR">
          Solicitar cotización
        </a>
        <a href="#about" className="awwwards-btn awwwards-btn-secondary" data-cursor="CONOCER">
          Conoce más
        </a>
      </div>
    </section>
  );
}
