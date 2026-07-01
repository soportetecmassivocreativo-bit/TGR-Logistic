'use client';

import React from 'react';
import styles from './Social.module.css';
import { useGsap } from '@/hooks/useGsap';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Social() {
  useGsap(() => {
    gsap.fromTo('.social-item', 
      { y: 40, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.8, 
        stagger: 0.15,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '#social',
          start: 'top 75%'
        }
      }
    );
  }, []);

  return (
    <section id="social" className={`section ${styles.social}`}>
      <div className={`container ${styles.container}`}>
        <div className={`social-item ${styles.header}`}>
          <div className={styles.badge}>Novedades</div>
          <h2 className={styles.title}>
            ¡Seguinos en <span className="text-lime">Redes</span>!
          </h2>
          <p className={styles.description}>
            Seguinos en nuestras redes sociales y enterate de las últimas noticias, rutas nacionales, búsquedas laborales y novedades operativas.
          </p>
        </div>

        <div className={styles.socialGrid}>
          <a href="https://instagram.com/tgrlogistics" target="_blank" rel="noopener noreferrer" className={`social-item ${styles.socialCard}`} data-cursor="Ir">
            <div className={styles.iconWrapper}>
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </div>
            <h3>Instagram</h3>
            <span className={styles.linkText}>@tgrlogistics</span>
          </a>

          <a href="https://facebook.com/tgrlogistics" target="_blank" rel="noopener noreferrer" className={`social-item ${styles.socialCard}`} data-cursor="Ir">
            <div className={styles.iconWrapper}>
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </div>
            <h3>Facebook</h3>
            <span className={styles.linkText}>TGR Logistics Services C.A.</span>
          </a>

          <a href="https://linkedin.com/company/tgrlogistics" target="_blank" rel="noopener noreferrer" className={`social-item ${styles.socialCard}`} data-cursor="Ir">
            <div className={styles.iconWrapper}>
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </div>
            <h3>LinkedIn</h3>
            <span className={styles.linkText}>Red Profesional</span>
          </a>
        </div>
      </div>
    </section>
  );
}
