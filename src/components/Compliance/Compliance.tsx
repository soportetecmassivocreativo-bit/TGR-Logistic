'use client';

import React, { useRef } from 'react';
import styles from './Compliance.module.css';
import { useGsap } from '@/hooks/useGsap';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Truck, UserCheck, AlertTriangle, Thermometer, Package, FlaskConical, Users, TrendingUp, Globe, Star } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Compliance() {
  const sectionRef = useRef<HTMLElement>(null);

  useGsap(() => {
    gsap.fromTo('.compliance-block',
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.12,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '#compliance',
          start: 'top 75%'
        }
      }
    );
  }, []);

  const cargoTypes = [
    {
      icon: <Thermometer size={24} />,
      title: 'Productos Alimenticios',
      desc: 'Transporte refrigerado y con control de temperatura para mantener la cadena de frío.'
    },
    {
      icon: <Package size={24} />,
      title: 'Materiales de Construcción y Carga Suelta o Contenerizada',
      desc: 'Equipos especializados para cargas pesadas y voluminosas con manejo seguro.'
    },
    {
      icon: <FlaskConical size={24} />,
      title: 'Mercancías y Materiales Químicos de Manejo Peligrosas',
      desc: 'Personal certificado y vehículos adaptados según normativas de seguridad.'
    }
  ];

  const normativeItems = [
    {
      icon: <Truck size={22} />,
      title: 'Flota Registrada',
      desc: 'Todos nuestros vehículos cumplen con los requisitos legales establecidos por el INTT y cuentan con los permisos correspondientes para operar en todo el territorio nacional.'
    },
    {
      icon: <UserCheck size={22} />,
      title: 'Personal Certificado',
      desc: 'Conductores con licencias y permisos según el tipo de carga y capacitación continua en normativas de transporte terrestre venezolano.'
    },
    {
      icon: <AlertTriangle size={22} />,
      title: 'Seguridad Regulatoria',
      desc: 'Estricto apego a las normativas de seguridad vial, límites de carga y protocolos de transporte de mercancías especiales.'
    }
  ];

  const experiencePoints = [
    { icon: <TrendingUp size={18} />, text: 'Alta experiencia en el sector logístico nacional' },
    { icon: <Globe size={18} />, text: 'Conocimiento profundo de las particularidades del mercado venezolano' },
    { icon: <Users size={18} />, text: 'Adaptación constante a las cambiantes condiciones del país' },
    { icon: <Star size={18} />, text: 'Cartera de clientes fieles que avalan nuestra calidad de servicio' }
  ];

  return (
    <section id="compliance" className={styles.section} ref={sectionRef}>
      <div className="container">

        {/* Block 1: Versatilidad de Carga */}
        <div className={`compliance-block ${styles.versatilityBlock}`}>
          <div className={styles.sectionLabel}>Versatilidad en Tipos de Carga</div>
          <h2 className={styles.blockTitle}>
            Para <span className="text-lime">toda industria</span>, tenemos la solución
          </h2>
          <p className={styles.blockDesc}>
            Sea cual sea su industria o tipo de mercancía, contamos con los vehículos y el conocimiento técnico para garantizar un transporte óptimo y seguro.
          </p>
          <div className={styles.cargoGrid}>
            {cargoTypes.map((c, i) => (
              <div key={i} className={styles.cargoCard}>
                <div className={styles.cargoIcon}>{c.icon}</div>
                <div>
                  <h4>{c.title}</h4>
                  <p>{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Block 2: Cumplimiento Normativo + Experiencia */}
        <div className={`compliance-block ${styles.normativeRow}`}>
          <div className={styles.normativeBlock}>
            <div className={styles.sectionLabel}>Cumplimiento Normativo</div>
            <h2 className={styles.blockTitle}>
              Operamos dentro del <span className="text-lime">marco legal</span>
            </h2>
            <p className={styles.blockDesc}>
              Al elegir TGR Logistic Services C.A., usted trabaja con una empresa que opera dentro del marco legal, evitando riesgos de sanciones o interrupciones en sus operaciones.
            </p>
            <div className={styles.normCards}>
              {normativeItems.map((n, i) => (
                <div key={i} className={styles.normCard}>
                  <div className={styles.normIcon}>{n.icon}</div>
                  <div>
                    <h4>{n.title}</h4>
                    <p>{n.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.experienceBlock}>
            <div className={styles.sectionLabel}>Experiencia y Confianza</div>
            <h2 className={styles.blockTitle}>
              En el Mercado <span className="text-lime">Venezolano</span>
            </h2>
            <p className={styles.blockDesc}>
              La trayectoria habla por sí misma. Múltiples operaciones exitosas nos respaldan:
            </p>
            <div className={styles.expList}>
              {experiencePoints.map((e, i) => (
                <div key={i} className={styles.expItem}>
                  <div className={styles.expIcon}>{e.icon}</div>
                  <span>{e.text}</span>
                </div>
              ))}
            </div>
            <div className={styles.expQuote}>
              Aliado clave para mantener su cadena de suministro funcionando de manera impecable incluso en los momentos más difíciles.
            </div>
          </div>
        </div>

        {/* Atención Personalizada */}
        <div className={`compliance-block ${styles.attentionBlock}`}>
          <div className={styles.attentionContent}>
            <div className={styles.sectionLabel}>Atención Personalizada y Soporte Continuo</div>
            <h2 className={styles.attentionTitle}>
              No somos simples transportistas, <span className="text-lime">somos sus aliados logísticos</span>
            </h2>
            <p className={styles.blockDesc}>
              En TGR Logistic Services C.A. entendemos que cada cliente tiene necesidades únicas. Por eso ofrecemos un servicio completamente personalizado.
            </p>
            <div className={styles.attentionList}>
              {[
                'Ejecutivo de cuenta dedicado para cada cliente',
                'Asesoría especializada para optimizar sus procesos logísticos',
                'Comunicación constante durante todo el proceso de transporte',
                'Capacidad de respuesta inmediata ante imprevistos',
                'Flexibilidad para adaptarnos a cambios de última hora'
              ].map((item, i) => (
                <div key={i} className={styles.attentionItem}>
                  <span className={styles.attentionCheck}>✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.attentionCTA}>
            <div className={styles.ctaBox}>
              <h3>¿Listo para comenzar?</h3>
              <p>Contáctenos hoy y reciba una cotización personalizada sin compromiso.</p>
              <a href="#contact" className="awwwards-btn awwwards-btn-primary" data-cursor="COTIZAR">
                Solicitar Cotización
              </a>
              <a href="tel:+58" className={styles.phoneLink}>
                O llámenos directamente
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
