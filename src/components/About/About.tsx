'use client';

import React, { useRef } from 'react';
import styles from './About.module.css';
import Image from 'next/image';
import { useGsap } from '@/hooks/useGsap';
import { animations } from '@/utils/animations';

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useGsap(() => {
    if (sectionRef.current) {
      animations.staggerFadeInUp('.about-reveal');
    }
    if (imageRef.current) {
      animations.clipPathReveal(imageRef.current);
    }
  }, []);

  const specs = [
    { label: 'Sede Principal', val: 'Punto Fijo, Falcón' },
    { label: 'Especialidad', val: 'Transporte de Carga Pesada' },
    { label: 'Experiencia', val: '3+ Años en el Mercado' },
    { label: 'Cobertura', val: 'Nacional' }
  ];

  return (
    <section id="about" className={`${styles.about} tech-grid`} ref={sectionRef}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.content}>
          <div className={`about-reveal ${styles.badge}`}>Nosotros</div>
          <h2 className={`about-reveal ${styles.title}`}>
            El Mejor Transporte Terrestre <span className="text-lime">Seguro y Puntual</span> de toda Venezuela
          </h2>
          <p className={`about-reveal ${styles.description}`}>
            En TGR Logistic Services entendemos que cada envío representa la confianza de nuestros clientes. Por eso, nos hemos consolidado como líderes en el transporte terrestre nacional, ofreciendo soluciones integrales que garantizan que su carga llegará a destino de manera segura y puntual.
          </p>

          <div className={`about-reveal ${styles.specsGrid}`}>
            {specs.map((s, i) => (
              <div key={i} className={styles.specItem}>
                <span className={styles.specLabel}>{s.label}</span>
                <span className={styles.specValue}>{s.val}</span>
              </div>
            ))}
          </div>

          <div className={`about-reveal`} style={{ marginTop: '2rem' }}>
            <a href="#fleet" className="awwwards-btn awwwards-btn-primary" data-cursor="VER">
              Explorar Unidades
            </a>
          </div>
        </div>

        <div className={styles.imageWrapper}>

          <div className={styles.imageContainer} ref={imageRef}>
            <div className={styles.scanLine}></div>
            <div className={styles.techBadge}>
              <span className={styles.pulseDot}></span>
              FLOTA ACTIVA EN RUTA
            </div>
            <Image
              src="/images/about_transport_clean.png"
              alt="Gandola pesada transportando carga industrial en carretera"
              fill
              unoptimized={true}
              className={styles.image}
            />
            <div className={styles.floatingCard}>
              <h3>Transporte Pesado Especializado</h3>
              <p>Manejamos cargas sobredimensionadas con la máxima seguridad y eficiencia.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
