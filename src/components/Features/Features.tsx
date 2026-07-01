'use client';

import React from 'react';
import styles from './Features.module.css';
import { Clock, Handshake, ShieldCheck, Settings, MapPin, Truck } from 'lucide-react';
import { useGsap } from '@/hooks/useGsap';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Features() {
  useGsap(() => {
    gsap.fromTo('.feature-card',
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '#features',
          start: 'top 80%'
        }
      }
    );
  }, []);

  const features = [
    {
      title: 'Cobertura Nacional',
      desc: 'Nuestra extensa red logística nos permite llegar a cada rincón de Venezuela con rutas optimizadas, incluso en zonas de difícil acceso.',
      icon: <MapPin size={32} />
    },
    {
      title: 'Compromiso Total',
      desc: 'Poniendo como prioridad todas las necesidades de nuestros clientes, respetando siempre los plazos y condiciones pactadas.',
      icon: <Handshake size={32} />
    },
    {
      title: 'Seguridad Garantizada',
      desc: 'Personal altamente capacitado en manejo defensivo y gestión de crisis. Monitoreo constante 24/7 de cada unidad de transporte.',
      icon: <ShieldCheck size={32} />
    },
    {
      title: 'Versatilidad de Carga',
      desc: 'Productos alimenticios, materiales de construcción, carga suelta, contenerizada y mercancías de manejo especial o peligroso.',
      icon: <Truck size={32} />
    },
    {
      title: 'Puntualidad',
      desc: 'Planificación logística avanzada que optimiza rutas y tiempos de entrega. Flexibilidad para atender envíos urgentes y de última hora.',
      icon: <Clock size={32} />
    },
    {
      title: 'Cumplimiento Normativo',
      desc: 'Flota registrada ante el INTT, personal con licencias certificadas y estricto apego a las normativas de seguridad vial venezolanas.',
      icon: <Settings size={32} />
    }
  ];

  return (
    <section id="features" className={`section ${styles.featuresSection}`}>
      <div className={`container ${styles.container}`}>
        <div className={styles.header}>
          <h2 className={`section-title ${styles.title}`}>
            TGR conecta todos los puntos de la <span className="text-lime">República</span>
          </h2>
          <p className={styles.subtitle}>
            Con más de 3 años en el mercado, nos consolidamos como especialistas en transporte de carga pesada y logística nacional. Conoce por qué las empresas líderes confían en nuestros servicios:
          </p>
        </div>

        <div className={styles.grid}>
          {features.map((item, index) => (
            <div key={index} className={`feature-card ${styles.card}`}>
              <div className={styles.iconWrapper}>
                {item.icon}
              </div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDesc}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
