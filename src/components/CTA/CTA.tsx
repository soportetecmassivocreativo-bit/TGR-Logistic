'use client';

import React, { useRef } from 'react';
import styles from './CTA.module.css';
import { useGsap } from '@/hooks/useGsap';
import { animations } from '@/utils/animations';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function CTA() {
  const sectionRef = useRef<HTMLElement>(null);

  useGsap(() => {
    if (sectionRef.current) {
      animations.staggerFadeInUp('.cta-reveal', 0.1);
    }
  }, []);

  return (
    <section id="contact" className={`${styles.cta} tech-grid`} ref={sectionRef}>
      <div className={`container ${styles.container}`}>
        <div className={styles.content}>
          <h2 className={`cta-reveal ${styles.title}`}>
            Solicitar <span className={styles.textHighlight}>Cotización.</span>
          </h2>
          <p className={`cta-reveal ${styles.description}`}>
            Comunícate para recibir un presupuesto que se ajuste a tus necesidades de transporte de carga a nivel nacional. ¿Buscas crear una alianza comercial? Envíanos tu mensaje.
          </p>
          
          <div className={`cta-reveal ${styles.buttons}`}>
            <a href="mailto:Tgrlogisticserv@gmail.com" className="awwwards-btn awwwards-btn-primary" data-cursor="ESCRIBIR">
              Solicitar Cotización
            </a>
            <a href="https://wa.me/584146968798" target="_blank" rel="noopener noreferrer" className="awwwards-btn awwwards-btn-secondary" data-cursor="WHATSAPP">
              Contactar por WhatsApp
            </a>
          </div>
        </div>

        <div className={`cta-reveal ${styles.contactInfo}`}>
          <div className={styles.infoItem}>
            <div className={styles.iconWrapper}><Phone size={24} /></div>
            <div>
              <h4>Llámanos</h4>
              <p><a href="tel:+584146968798">0414-6968798</a></p>
            </div>
          </div>
          <div className={styles.infoItem}>
            <div className={styles.iconWrapper}><Mail size={24} /></div>
            <div>
              <h4>Escríbenos</h4>
              <p><a href="mailto:Tgrlogisticserv@gmail.com">Tgrlogisticserv@gmail.com</a></p>
            </div>
          </div>
          <div className={styles.infoItem}>
            <div className={styles.iconWrapper}><MapPin size={24} /></div>
            <div>
              <h4>Visítanos</h4>
              <p>Intercomunal Alí Primera, redoma del Taparo, Punto Fijo, Estado Falcón</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
