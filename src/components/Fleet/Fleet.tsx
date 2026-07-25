'use client';

import React, { useRef } from 'react';
import styles from './Fleet.module.css';
import Image from 'next/image';
import { useGsap } from '@/hooks/useGsap';
import gsap from 'gsap';

export default function Fleet() {
  const pinContainerRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  useGsap(() => {
    const slider = sliderRef.current;
    const pinContainer = pinContainerRef.current;

    if (!slider || !pinContainer) return;

    const calculateScroll = () => {
      const horizontalDistance = slider.scrollWidth - window.innerWidth;
      return Math.max(0, horizontalDistance);
    };

    const tl = gsap.to(slider, {
      x: () => -calculateScroll(),
      ease: 'none',
      scrollTrigger: {
        trigger: pinContainer,
        pin: true,
        scrub: 1,
        start: 'top top',
        end: () => `+=${calculateScroll() * 1.15}`,
        invalidateOnRefresh: true,
      }
    });

    return () => {
      tl.scrollTrigger?.kill();
    };
  }, []);

  const fleetData = [
    {
      id: 1,
      title: 'Transporte de Maquinaria Pesada',
      image: '/images/machinery_transfer_road.jpg',
      desc: 'Traslado especializado de maquinaria industrial de gran tonelaje en carreteras nacionales con escolta y amarres certificados.',
      specs: [
        { label: 'Tipo', val: 'Maquinaria Pesada' },
        { label: 'Rastreo', val: 'GPS Satelital 24/7' },
        { label: 'Ejes', val: 'Reforzados (Multieje)' },
        { label: 'Permisología', val: 'Al Día - INTT' }
      ]
    },
    {
      id: 2,
      title: 'Carga en Plataforma Baja',
      image: '/images/machinery_loader_flatbed.jpg',
      desc: 'Plataformas de bajo perfil para el traslado seguro de equipos de construcción, cargadoras y vehículos de gran volumen.',
      specs: [
        { label: 'Capacidad', val: '40+ Toneladas' },
        { label: 'Chasis', val: 'Plataforma Baja' },
        { label: 'Seguridad', val: 'Flejado Certificado' },
        { label: 'Cobertura', val: 'Nacional' }
      ]
    },
    {
      id: 3,
      title: 'Sobredimensionada CAT & Pesada',
      image: '/images/machinery_cat_excavator.jpg',
      desc: 'Transporte de excavadoras, maquinaria CAT y equipos sobredimensionados con personal certificado y permisos especiales vigentes.',
      specs: [
        { label: 'Tipo', val: 'Sobredimensionada' },
        { label: 'Largo', val: '15+ metros' },
        { label: 'Permisos', val: 'Especiales Activos' },
        { label: 'Personal', val: 'Certificado' }
      ]
    }
  ];

  return (
    <div className={styles.pinSection} ref={pinContainerRef}>
      <section id="fleet" className={styles.fleet}>
        <div className={styles.stickyWrapper}>

          {/* Header remains visible on top left of the pinned section */}
          <div className={styles.sectionHeader}>
            <div className={styles.badge}>Unidades</div>
            <h2 className={styles.title}>Satisfacción <span className="text-lime">Garantizada</span>.</h2>
            <p className={styles.description}>
              Sea cual sea su industria o tipo de mercancía, contamos con los vehículos y el conocimiento técnico para garantizar un transporte óptimo y seguro.
            </p>
          </div>

          {/* Horizontal slider container */}
          <div className={styles.slider} ref={sliderRef}>
            {fleetData.map((item) => (
              <div key={item.id} className={`fleet-card-item ${styles.card}`}>
                <div className={styles.imageWrapper}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    unoptimized={true}
                    className={styles.image}
                  />
                  <div className={styles.overlay}></div>
                </div>
                <div className={styles.content}>
                  <span className={styles.cardNumber}>0{item.id}</span>
                  <h3>{item.title}</h3>
                  <p className={styles.cardDesc}>{item.desc}</p>

                  <div className={styles.specsTable}>
                    {item.specs.map((spec, i) => (
                      <div key={i} className={styles.specRow}>
                        <span className={styles.specLabel}>{spec.label}</span>
                        <span className={styles.specVal}>{spec.val}</span>
                      </div>
                    ))}
                  </div>

                  <a href="#contact" className="awwwards-btn awwwards-btn-secondary" style={{ width: '100%', marginTop: 'auto' }} data-cursor="COTIZAR">
                    Cotizar Unidad
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}
