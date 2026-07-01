'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import styles from './Services.module.css';
import { useGsap } from '@/hooks/useGsap';
import { animations } from '@/utils/animations';
import { Truck, ShieldCheck, Ship, MapPin, Package, Clock } from 'lucide-react';

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);

  useGsap(() => {
    if (sectionRef.current) {
      animations.staggerFadeInUp('.service-card', 0.1);
    }
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  };

  const services = [
    {
      title: 'Transporte Pesado',
      desc: 'Gandolas, camiones y plataformas especiales diseñadas para mover carga sobredimensionada en carreteras nacionales.',
      icon: <Truck size={32} />,
      className: `${styles.cardLarge} ${styles.hasImage}`,
      image: '/images/service_transporte.png'
    },
    {
      title: 'Distribución Nacional',
      desc: 'Despliegues coordinados de entrega puerta a puerta en los principales centros industriales de Venezuela.',
      icon: <MapPin size={32} />,
      className: `${styles.cardMedium} ${styles.hasImage}`,
      image: '/images/service_distribucion.png'
    },
    {
      title: 'Rastreo 24/7',
      desc: 'Tecnología GPS integrada y reportes constantes. Sabemos exactamente dónde está tu mercancía en cada kilómetro.',
      icon: <Clock size={32} />,
      className: `${styles.cardLarge} ${styles.hasImage}`,
      image: '/images/service_rastreo.png'
    }
  ];

  return (
    <section id="services" className={`${styles.services} tech-grid`} ref={sectionRef}>
      <div className={`container ${styles.container}`}>
        <div className={styles.header}>
          <div className={styles.badge}>Nuestros Servicios</div>
          <h2 className={styles.title}>Soluciones a medida para cada <span className="text-lime">desafío logístico</span>.</h2>
        </div>

        <div className={styles.bentoGrid}>
          {services.map((svc, i) => (
            <div 
              key={i} 
              className={`service-card ${styles.card} ${svc.className}`}
              onMouseMove={handleMouseMove}
              data-cursor="VER"
            >
              {svc.image && (
                <div className={styles.cardBgImage}>
                  <Image 
                    src={svc.image} 
                    alt={svc.title} 
                    fill 
                    unoptimized={true}
                    className={styles.image}
                  />
                  <div className={styles.imageOverlay}></div>
                </div>
              )}
              <div className={styles.cardGlow}></div>
              <div className={styles.iconWrapper}>{svc.icon}</div>
              <div className={styles.cardContent}>
                <h3>{svc.title}</h3>
                <p>{svc.desc}</p>
              </div>
              <div className={styles.arrow}>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
