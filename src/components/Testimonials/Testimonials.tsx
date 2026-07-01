'use client';

import React, { useRef } from 'react';
import styles from './Testimonials.module.css';
import { useGsap } from '@/hooks/useGsap';
import { animations } from '@/utils/animations';
import { Star } from 'lucide-react';

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);

  useGsap(() => {
    if (sectionRef.current) {
      animations.staggerFadeInUp('.testimonial-card', 0.2);
    }
  }, []);

  const testimonials = [
    {
      id: 1,
      quote: "Desde que trabajamos con TGR, nuestros tiempos de entrega en puerto han mejorado significativamente. Su gestión aduanera es impecable.",
      author: "Carlos Mendoza",
      company: "Importaciones Globales C.A.",
      rating: 5
    },
    {
      id: 2,
      quote: "Excelente servicio para carga pesada. Las gandolas siempre en perfecto estado y la comunicación es constante.",
      author: "María Alejandra Ruiz",
      company: "Construcciones del Centro",
      rating: 5
    },
    {
      id: 3,
      quote: "Confiamos toda nuestra distribución nacional a TGR. Su nivel de puntualidad y compromiso es exactamente lo que buscábamos.",
      author: "Roberto Gómez",
      company: "Distribuidora Alimentos R.G.",
      rating: 5
    }
  ];

  return (
    <section className={styles.testimonials} ref={sectionRef}>
      <div className={`container ${styles.container}`}>
        <div className={styles.header}>
          <div className={styles.badge}>Testimonios</div>
          <h2 className={styles.title}>Lo que dicen <span className="text-lime">nuestros clientes</span>.</h2>
        </div>

        <div className={styles.grid}>
          {testimonials.map((t) => (
            <div key={t.id} className={`testimonial-card ${styles.card}`}>
              <div className={styles.stars}>
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={20} fill="var(--tgr-lime)" color="var(--tgr-lime)" />
                ))}
              </div>
              <p className={styles.quote}>&ldquo;{t.quote}&rdquo;</p>
              <div className={styles.authorInfo}>
                <div className={styles.avatar}>{t.author.charAt(0)}</div>
                <div>
                  <h4 className={styles.author}>{t.author}</h4>
                  <p className={styles.company}>{t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
