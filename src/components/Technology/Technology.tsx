'use client';

import React, { useRef, useEffect, useState } from 'react';
import styles from './Technology.module.css';
import { useGsap } from '@/hooks/useGsap';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Counter = ({ end, suffix = '', duration = 2.5 }: { end: number, suffix?: string, duration?: number }) => {
  const [count, setCount] = useState(0);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!counterRef.current) return;
    
    ScrollTrigger.create({
      trigger: counterRef.current,
      start: 'top 80%',
      once: true,
      onEnter: () => {
        gsap.to({ val: 0 }, {
          val: end,
          duration: duration,
          ease: 'power2.out',
          onUpdate: function() {
            setCount(Math.ceil(this.targets()[0].val));
          }
        });
      }
    });
  }, [end, duration]);

  return (
    <span ref={counterRef}>
      {count}{suffix}
    </span>
  );
};

export default function Technology() {
  const sectionRef = useRef<HTMLElement>(null);

  useGsap(() => {
    gsap.fromTo('.tech-text', 
      { y: 30, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.8, 
        stagger: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '#technology',
          start: 'top 70%'
        }
      }
    );
  }, []);

  return (
    <section id="technology" className={`section ${styles.technology}`} ref={sectionRef}>
      <div className={`container ${styles.container}`}>
        <div className={styles.textContent}>
          <h2 className={`tech-text ${styles.title}`}>
            Tecnología e <span className="text-lime">impacto ambiental</span>
          </h2>
          <p className={`tech-text ${styles.description}`}>
            Nuestra política de renovación a lo largo del tiempo nos ha permitido actualmente contar con una moderna y potente flota de unidades; las cuales puestas a disposición de nuestros clientes logran satisfacer todos los requerimientos del mercado logístico venezolano.
          </p>
          <p className={`tech-text ${styles.description}`}>
            Esta decisión contribuye significativamente a la reducción de la huella de carbono y al menor impacto ambiental, al incorporar tecnologías más eficientes y vehículos que cumplen con estándares de emisiones estrictos, reafirmando nuestro compromiso con la sostenibilidad.
          </p>
        </div>

        <div className={styles.statsGrid}>
          <div className={`tech-text ${styles.statCard}`}>
            <h3 className={styles.statValue}>
              <Counter end={95} suffix="%" />
            </h3>
            <p className={styles.statLabel}>Eficiencia on time</p>
          </div>
          
          <div className={`tech-text ${styles.statCard}`}>
            <h3 className={styles.statValue}>
              <Counter end={50} suffix="+" />
            </h3>
            <p className={styles.statLabel}>Unidades a disposición</p>
          </div>
          
          <div className={`tech-text ${styles.statCard}`}>
            <h3 className={styles.statValue}>
              <Counter end={300} suffix="+" />
            </h3>
            <p className={styles.statLabel}>Viajes por mes</p>
          </div>
        </div>
      </div>
    </section>
  );
}
