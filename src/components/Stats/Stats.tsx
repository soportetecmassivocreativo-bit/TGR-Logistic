'use client';

import React, { useRef } from 'react';
import styles from './Stats.module.css';
import Image from 'next/image';
import { useGsap } from '@/hooks/useGsap';
import gsap from 'gsap';

export default function Stats() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgWrapperRef = useRef<HTMLDivElement>(null);
  
  useGsap(() => {
    const stats = gsap.utils.toArray('.stat-number');
    
    stats.forEach((statItem) => {
      const stat = statItem as HTMLElement;
      const target = parseFloat(stat.getAttribute('data-target') || '0');
      
      gsap.to(stat, {
        innerHTML: target,
        duration: 2.0,
        snap: { innerHTML: 1 },
        ease: 'power3.out',
        scrollTrigger: {
          trigger: stat,
          start: 'top 85%',
        },
      });
    });

    if (sectionRef.current && bgWrapperRef.current) {
      gsap.fromTo(bgWrapperRef.current, 
        { yPercent: -15 },
        {
          yPercent: 15,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
          }
        }
      );
    }
  }, []);

  const statItems = [
    { number: '3', suffix: 'º', label: 'Aniversario' },
    { number: '500', suffix: '+', label: 'Despachos Completados' },
    { number: '50', suffix: '+', label: 'Grandes Clientes' },
    { number: '24', suffix: '/7', label: 'Operaciones de Puerto' },
  ];

  return (
    <section className={styles.stats} ref={sectionRef}>
      <div className={styles.bgContainer}>
        <div className={styles.bgWrapper} ref={bgWrapperRef}>
          <Image 
            src="/images/stats_bg.png" 
            alt="Puerto marítimo" 
            fill 
            unoptimized={true}
            className={styles.bgImage} 
          />
        </div>
        <div className={styles.overlay}></div>
      </div>
      
      <div className={`container ${styles.container}`}>
        <div className={styles.grid}>
          {statItems.map((item, i) => (
            <div key={i} className={styles.statItem}>
              <div className={styles.numberWrapper}>
                <span className={`stat-number ${styles.number}`} data-target={item.number}>0</span>
                <span className={styles.suffix}>{item.suffix}</span>
              </div>
              <p className={styles.label}>{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
