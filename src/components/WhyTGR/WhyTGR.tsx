'use client';

import React, { useRef } from 'react';
import styles from './WhyTGR.module.css';
import { useGsap } from '@/hooks/useGsap';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ShieldCheck, Clock, MapPin, Satellite, Bell, DollarSign } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function WhyTGR() {
  const sectionRef = useRef<HTMLElement>(null);

  useGsap(() => {
    gsap.fromTo('.why-block',
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.9,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '#why-tgr',
          start: 'top 75%'
        }
      }
    );
  }, []);

  return (
    <section id="why-tgr" className={styles.section} ref={sectionRef}>
      <div className="container">

        {/* Section header */}
        <div className={`why-block ${styles.header}`}>
          <div className={styles.badge}>¿Por qué TGR?</div>
          <h2 className={styles.title}>
            Razones sólidas para <span className="text-lime">confiar en nosotros</span>
          </h2>
        </div>

        {/* Block 1: Cobertura Nacional */}
        <div className={`why-block ${styles.block} ${styles.blockReverse}`}>
          <div className={styles.blockContent}>
            <div className={styles.blockIcon}><MapPin size={28} /></div>
            <h3 className={styles.blockTitle}>Cobertura Nacional Integral</h3>
            <p className={styles.blockDesc}>
              Nuestra extensa red logística nos permite ofrecer un servicio verdaderamente nacional, llegando a cada rincón de Venezuela.
            </p>
            <ul className={styles.featureList}>
              <li>Rutas optimizadas que conectan todas las regiones del país</li>
              <li>Servicio incluso en zonas de difícil acceso</li>
              <li>Flota especializada para suministrar estatus de avance de su carga</li>
            </ul>
          </div>
          <div className={styles.blockVisual}>
            <div className={styles.mapCard}>
              <div className={styles.mapBadge}>🇻🇪 Venezuela</div>
              <div className={styles.mapStats}>
                <div className={styles.mapStat}>
                  <span className={styles.mapStatNum}>23</span>
                  <span className={styles.mapStatLabel}>Estados cubiertos</span>
                </div>
                <div className={styles.mapStat}>
                  <span className={styles.mapStatNum}>300+</span>
                  <span className={styles.mapStatLabel}>Viajes al mes</span>
                </div>
                <div className={styles.mapStat}>
                  <span className={styles.mapStatNum}>95%</span>
                  <span className={styles.mapStatLabel}>Cumplimiento</span>
                </div>
              </div>
              <div className={styles.routeDots}>
                <span className={styles.dot} style={{top:'15%', left:'75%'}} />
                <span className={styles.dot} style={{top:'48%', left:'90%'}} />
                <span className={styles.dot} style={{top:'82%', left:'78%'}} />
                <span className={styles.dot} style={{top:'84%', left:'50%'}} />
                <span className={styles.dot} style={{top:'82%', left:'20%'}} />
                <svg className={styles.routeLines} viewBox="0 0 300 200">
                  <polyline points="225,30 270,96 234,164 150,168 60,164" fill="none" stroke="#d4ff00" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.65"/>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Block 2: Seguridad */}
        <div className={`why-block ${styles.block}`}>
          <div className={styles.blockVisual}>
            <div className={styles.securityCards}>
              <div className={styles.secCard}>
                <ShieldCheck size={24} className={styles.secIcon} />
                <div>
                  <h4>Personal Altamente Capacitado</h4>
                  <p>Conductores profesionales con formación especializada en manejo defensivo y gestión de crisis supervisan personalmente cada envío.</p>
                </div>
              </div>
              <div className={styles.secCard}>
                <Clock size={24} className={styles.secIcon} />
                <div>
                  <h4>Monitoreo Constante</h4>
                  <p>Vigilancia 24/7 de cada unidad de transporte para detectar y responder inmediatamente ante cualquier anomalía.</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.blockContent}>
            <div className={styles.blockIcon}><ShieldCheck size={28} /></div>
            <h3 className={styles.blockTitle}>Seguridad Garantizada en el Traslado</h3>
            <p className={styles.blockDesc}>
              En TGR cada carga es tratada con el más alto nivel de protección. Nuestros procesos de seguridad cubren desde la carga hasta la entrega final.
            </p>
            <ul className={styles.featureList}>
              <li>Conductores con licencias vigentes y formación continua</li>
              <li>Sistemas GPS activos en toda la flota</li>
              <li>Protocolos de respuesta ante emergencias</li>
              <li>Seguros de carga disponibles</li>
            </ul>
          </div>
        </div>

        {/* Block 3: Puntualidad */}
        <div className={`why-block ${styles.block} ${styles.blockReverse}`}>
          <div className={styles.blockContent}>
            <div className={styles.blockIcon}><Clock size={28} /></div>
            <h3 className={styles.blockTitle}>Puntualidad y Cumplimiento de Plazos</h3>
            <p className={styles.blockDesc}>
              El tiempo es un recurso valioso para su negocio. En TGR entendemos que cada minuto cuenta y diseñamos nuestras operaciones para maximizar la puntualidad.
            </p>
            <ul className={styles.featureList}>
              <li>Planificación logística avanzada que optimiza rutas y tiempos de entrega</li>
              <li>Flexibilidad para atender envíos urgentes y de última hora</li>
              <li>Cumplimiento riguroso de los plazos acordados</li>
              <li>Sistemas de seguimiento GPS que confirman tiempos de llegada en tiempo real</li>
            </ul>
          </div>
          <div className={styles.blockVisual}>
            <div className={styles.punctualityBoard}>
              <div className={styles.pbHeader}>
                <span className={styles.pbDot} />
                Panel de Despacho TGR
              </div>
              {[
                { route: 'Punto Fijo → Caracas', eta: 'En ruta', status: 'on-time' },
                { route: 'Maracaibo → Valencia', eta: 'A tiempo', status: 'on-time' },
                { route: 'Barquisimeto → Maracaibo', eta: 'En destino', status: 'delivered' },
                { route: 'Puerto Cabello → Maturín', eta: 'En ruta', status: 'on-time' },
              ].map((r, i) => (
                <div key={i} className={styles.pbRow}>
                  <span className={styles.pbRoute}>{r.route}</span>
                  <span className={`${styles.pbStatus} ${styles[r.status]}`}>{r.eta}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Block 4: Trazabilidad y Costos */}
        <div className={`why-block ${styles.twoColRow}`}>
          <div className={styles.infoCard}>
            <div className={styles.infoCardIcon}><Satellite size={28} /></div>
            <h3>Trazabilidad en el Servicio</h3>
            <p>Nuestra inversión en tecnología nos permite ofrecerle total transparencia y control sobre sus envíos en cada etapa del proceso.</p>
            <div className={styles.infoFeature}>
              <Bell size={16} />
              <div>
                <strong>Alertas y Reportes</strong>
                <span>Notificaciones inmediatas sobre el estado de los envíos e incidencias.</span>
              </div>
            </div>
            <div className={styles.infoFeature}>
              <Satellite size={16} />
              <div>
                <strong>Localización Satelital</strong>
                <span>Seguimiento GPS en tiempo real de cada unidad de transporte.</span>
              </div>
            </div>
          </div>
          <div className={styles.infoCard}>
            <div className={styles.infoCardIcon}><DollarSign size={28} /></div>
            <h3>Costos Competitivos y Transparencia</h3>
            <p>El transporte terrestre es la opción más económica para la movilización de carga en Venezuela. En TGR vamos más allá.</p>
            <ul className={styles.featureList}>
              <li>Tarifas claras y detalladas desde el principio</li>
              <li>Sin costos ocultos ni cargos sorpresa</li>
              <li>Optimización de rutas para reducir costos operativos</li>
              <li>Flota propia que elimina intermediarios</li>
            </ul>
            <div className={styles.econBadge}>Economía sin sorpresas</div>
          </div>
        </div>

      </div>
    </section>
  );
}
