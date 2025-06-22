'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/Home.module.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Home() {
  const [image, setImage] = useState('/images/Portfolio.jpeg');

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <section className={styles.homeSection}>
      <div className={styles.gap} />

      <motion.div
        className={styles.card}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
        viewport={{ once: true }}
      >
        <div className={styles.avatarContainer}>
          <label htmlFor="avatar-upload" className={styles.frame}>
            <img src={image} alt="Avatar" className={styles.avatar} />
          </label>
          <input
            id="avatar-upload"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            hidden
          />
        </div>

        <h1 className={styles.title}>Edupalli Likhitha Sai</h1>
        <h2 className={styles.subtitle}>
          Web Developer | Python & ML Enthusiast | Azure Certified
        </h2>

         <p className={styles.description}>
            Passionate about developing responsive and engaging web applications..
        </p>
        {/* 🔗 Social Links */}
        <div className={styles.socialIcons}>
          <a
            href="https://github.com/Lali182k5"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/likhitha-sai-edupalli-50ba5b2a1/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a href="mailto:likhithasai182k5@gmail.com" aria-label="Email">
            <FaEnvelope />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
