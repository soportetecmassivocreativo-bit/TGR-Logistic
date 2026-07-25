import React from 'react';
import Image from 'next/image';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.topBorder}></div>
      <div className={`container ${styles.container}`}>
        <div className={styles.grid}>
          
          <div className={styles.colBrand}>
            <a href="#home" className={styles.logoLink}>
              <Image 
                src="/images/logo.png" 
                alt="TGR Logistics Services C.A." 
                width={200} 
                height={57} 
                unoptimized={true}
                className={styles.logoImage} 
              />
            </a>
            <p className={styles.description}>
              Empresa líder en logística y transporte de carga pesada. Soluciones integrales de puerto a destino en toda Venezuela.
            </p>
            <div className={styles.social}>
              <a href="https://www.instagram.com/tgrlogisticservices/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
              <a href="https://www.tiktok.com/@tgrlogisticservices" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className={styles.tiktokIcon}>
                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
            </div>
          </div>

          <div className={styles.colLinks}>
            <h3>Servicios</h3>
            <ul>
              <li><a href="#services">Transporte Pesado</a></li>
              <li><a href="#services">Gestión Aduanera</a></li>
              <li><a href="#services">Logística Portuaria</a></li>
              <li><a href="#services">Distribución</a></li>
            </ul>
          </div>

          <div className={styles.colLinks}>
            <h3>Empresa</h3>
            <ul>
              <li><a href="#about">Nosotros</a></li>
              <li><a href="#fleet">Nuestra Flota</a></li>
              <li><a href="#home">Políticas de Privacidad</a></li>
              <li><a href="#home">Términos de Servicio</a></li>
            </ul>
          </div>

          <div className={styles.colLinks}>
            <h3>Contacto</h3>
            <ul className={styles.contactList}>
              <li>Intercomunal Ali Primera, redoma del taparo, via moruy, Punto Fijo, Estado Falcón</li>
              <li><a href="mailto:Tgrlogisticserv@gmail.com">Tgrlogisticserv@gmail.com</a></li>
              <li><a href="tel:+584146968798">0414-6968798</a></li>
              <li>J-503448040</li>
            </ul>
          </div>

        </div>

        <div className={styles.bottomBar}>
          <p>&copy; {currentYear} TGR Logistics Services C.A. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
