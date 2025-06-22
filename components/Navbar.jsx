"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import styles from '../styles/Navbar.module.css';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.logo}>
        <Link href="/">MyPortfolio</Link>
      </div>

      <div className={styles.hamburger} onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <ul className={`${styles.navLinks} ${menuOpen ? styles.open : ''}`}>
        <li onClick={closeMenu}><Link href="#home">Home</Link></li>
        <li onClick={closeMenu}><Link href="#about">About</Link></li>
        <li onClick={closeMenu}><Link href="#skills">Skills</Link></li>
        <li onClick={closeMenu}><Link href="#projects">Projects</Link></li>
        <li onClick={closeMenu}><Link href="#achievements">Achievements</Link></li>
        <li onClick={closeMenu}><Link href="#contact">Contact</Link></li>
        <li onClick={closeMenu}><Link href="#resume">Resume</Link></li>
      </ul>
    </nav>
  );
}
