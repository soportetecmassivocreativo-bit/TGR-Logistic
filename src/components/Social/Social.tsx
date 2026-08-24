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
          <a href="https://www.instagram.com/tgrlogisticservices/" target="_blank" rel="noopener noreferrer" className={`social-item ${styles.socialCard}`} data-cursor="Ir">
            <div className={styles.iconWrapper}>
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </div>
            <h3>Instagram</h3>
            <span className={styles.linkText}>@tgrlogisticservices</span>
          </a>

          <a href="https://www.tiktok.com/@tgrlogisticservices?_r=1" target="_blank" rel="noopener noreferrer" className={`social-item ${styles.socialCard}`} data-cursor="Ir">
            <div className={styles.iconWrapper}>
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg>
            </div>
            <h3>TikTok</h3>
            <span className={styles.linkText}>@tgrlogisticservices</span>
          </a>

          <a href="https://www.threads.net/@tgrlogisticservices" target="_blank" rel="noopener noreferrer" className={`social-item ${styles.socialCard}`} data-cursor="Ir">
            <div className={styles.iconWrapper}>
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="currentColor"><path fillRule="evenodd" clipRule="evenodd" d="M12.186 24.004c-3.179 0-5.834-.997-7.892-2.964-2.008-1.92-3.044-4.567-3.08-7.873C1.177 9.774 2.27 7.027 4.464 4.978 6.634 2.951 9.53 1.83 13.083 1.83c3.488 0 6.31 1.053 8.388 3.13 2.057 2.057 3.09 4.795 3.07 8.139-.02 3.32-.98 6.002-2.853 7.973-1.97 2.072-4.664 3.08-8.006 2.997-2.613-.065-4.733-.787-6.297-2.146-1.564-1.358-2.346-3.195-2.324-5.461.022-2.235.842-4.041 2.436-5.367 1.594-1.326 3.693-1.989 6.239-1.989.516 0 1.066.027 1.637.08v-1.63c0-1.472-.375-2.62-1.116-3.414-.741-.794-1.802-1.196-3.155-1.196-1.309 0-2.327.356-3.026 1.057-.699.701-1.077 1.677-1.124 2.903H4.492c.045-2.28.847-4.186 2.387-5.66C8.419.98 10.514.238 13.096.238c2.582 0 4.677.742 6.234 2.204 1.557 1.462 2.346 3.447 2.346 5.897v7.508c0 .873.18 1.547.534 2.008.354.461.85.698 1.474.706.721 0 1.295-.262 1.708-.78.413-.518.62-1.25.62-2.18h2.382c0 1.58-.458 2.898-1.362 3.921-.904 1.023-2.14 1.535-3.676 1.535-1.332 0-2.378-.396-3.111-1.178-.733-.782-1.124-1.87-1.163-3.238-1.002 1.15-2.23 2.01-3.655 2.56-1.425.55-2.95.82-4.544.802zm.428-4.856c1.398 0 2.61-.39 3.606-1.16 1.006-.77 1.527-1.815 1.552-3.106v-.651c-.482-.072-.989-.108-1.51-.108-1.745 0-3.14.417-4.148 1.242-1.008.825-1.52 1.884-1.526 3.155 0 .847.28 1.507.834 1.965.554.458 1.282.663 2.192.663z"/></svg>
            </div>
            <h3>Threads</h3>
            <span className={styles.linkText}>@tgrlogisticservices</span>
          </a>
        </div>
      </div>
    </section>
  );
}
