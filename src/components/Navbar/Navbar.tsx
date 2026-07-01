'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './Navbar.module.css';
import { Menu, X } from 'lucide-react';
import gsap from 'gsap';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      gsap.fromTo('.mobile-link-item', 
        { y: 40, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: 'power3.out', delay: 0.2 }
      );
    }
  }, [mobileOpen]);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`} ref={navRef}>
      <div className={`container ${styles.navPill}`}>
        <a href="#home" className={styles.logoLink} data-cursor="TGR">
          <Image 
            src="/images/logo.png" 
            alt="TGR Logistics Services C.A." 
            width={300} 
            height={85} 
            unoptimized={true}
            className={styles.logoImage} 
          />
        </a>

        {/* Desktop Nav */}
        <nav className={styles.desktopNav}>
          <ul className={styles.navLinks}>
            <li><a href="#home" className={styles.link} data-cursor="Ir a">Home</a></li>
            <li><a href="#about" className={styles.link} data-cursor="Ir a">Nosotros</a></li>
            <li><a href="#features" className={styles.link} data-cursor="Ir a">Servicios</a></li>
            <li><a href="#fleet" className={styles.link} data-cursor="Ir a">Unidades</a></li>
            <li><a href="#contact" className={styles.link} data-cursor="Ir a">Contacto</a></li>
          </ul>
        </nav>



        {/* Mobile Toggle */}
        <button 
          className={styles.mobileToggle} 
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle Menu"
          data-cursor="Menú"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <nav className={`${styles.mobileNav} ${mobileOpen ? styles.mobileOpen : ''}`}>
        <ul className={styles.mobileLinks}>
          <li className="mobile-link-item"><a href="#home" className={styles.mobileLink} onClick={() => setMobileOpen(false)}>Home</a></li>
          <li className="mobile-link-item"><a href="#about" className={styles.mobileLink} onClick={() => setMobileOpen(false)}>Nosotros</a></li>
          <li className="mobile-link-item"><a href="#features" className={styles.mobileLink} onClick={() => setMobileOpen(false)}>Servicios</a></li>
          <li className="mobile-link-item"><a href="#fleet" className={styles.mobileLink} onClick={() => setMobileOpen(false)}>Unidades</a></li>
          <li className="mobile-link-item"><a href="#contact" className={styles.mobileLink} onClick={() => setMobileOpen(false)}>Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
}
