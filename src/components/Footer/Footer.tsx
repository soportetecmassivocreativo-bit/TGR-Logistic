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
              <a href="https://www.tiktok.com/@tgrlogisticservices?_r=1" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className={styles.tiktokIcon}>
                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
              <a href="https://www.threads.net/@tgrlogisticservices" target="_blank" rel="noopener noreferrer" aria-label="Threads">
                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                  <path d="M12.186 24.004c-3.179 0-5.834-.997-7.892-2.964-2.008-1.92-3.044-4.567-3.08-7.873C1.177 9.774 2.27 7.027 4.464 4.978 6.634 2.951 9.53 1.83 13.083 1.83c3.488 0 6.31 1.053 8.388 3.13 2.057 2.057 3.09 4.795 3.07 8.139-.02 3.32-.98 6.002-2.853 7.973-1.97 2.072-4.664 3.08-8.006 2.997-2.613-.065-4.733-.787-6.297-2.146-1.564-1.358-2.346-3.195-2.324-5.461.022-2.235.842-4.041 2.436-5.367 1.594-1.326 3.693-1.989 6.239-1.989.516 0 1.066.027 1.637.08v-1.63c0-1.472-.375-2.62-1.116-3.414-.741-.794-1.802-1.196-3.155-1.196-1.309 0-2.327.356-3.026 1.057-.699.701-1.077 1.677-1.124 2.903H4.492c.045-2.28.847-4.186 2.387-5.66C8.419.98 10.514.238 13.096.238c2.582 0 4.677.742 6.234 2.204 1.557 1.462 2.346 3.447 2.346 5.897v7.508c0 .873.18 1.547.534 2.008.354.461.85.698 1.474.706.721 0 1.295-.262 1.708-.78.413-.518.62-1.25.62-2.18h2.382c0 1.58-.458 2.898-1.362 3.921-.904 1.023-2.14 1.535-3.676 1.535-1.332 0-2.378-.396-3.111-1.178-.733-.782-1.124-1.87-1.163-3.238-1.002 1.15-2.23 2.01-3.655 2.56-1.425.55-2.95.82-4.544.802zm.428-4.856c1.398 0 2.61-.39 3.606-1.16 1.006-.77 1.527-1.815 1.552-3.106v-.651c-.482-.072-.989-.108-1.51-.108-1.745 0-3.14.417-4.148 1.242-1.008.825-1.52 1.884-1.526 3.155 0 .847.28 1.507.834 1.965.554.458 1.282.663 2.192.663z"/>
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
