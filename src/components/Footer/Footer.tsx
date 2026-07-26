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
              <a href="https://wa.me/584146968798" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>
          </div>

          <div className={styles.colLinks}>
            <h3>Servicios</h3>
            <ul>
              <li><a href="#features">Transporte Pesado</a></li>
              <li><a href="#compliance">Gestión Aduanera</a></li>
              <li><a href="#features">Logística Portuaria</a></li>
              <li><a href="#why-tgr">Distribución</a></li>
            </ul>
          </div>

          <div className={styles.colLinks}>
            <h3>Empresa</h3>
            <ul>
              <li><a href="#about">Nosotros</a></li>
              <li><a href="#fleet">Nuestra Flota</a></li>
              <li><a href="#contact">Políticas de Privacidad</a></li>
              <li><a href="#contact">Términos de Servicio</a></li>
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
