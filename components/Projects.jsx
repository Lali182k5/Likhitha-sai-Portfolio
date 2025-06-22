'use client';

import { motion } from 'framer-motion';
import styles from '../styles/Projects.module.css';

export default function Projects() {
  const projects = [
    {
      title: 'Gemini Pro ATS Resume Tracker',
      description:
        'Web-based ATS using Python, FastAPI, Streamlit, Firebase to automate resume screening.',
      link: 'https://github.com/Lali182k5/Gemini_Pro_ATS_Resume_Tracker',
    },
    {
      title: 'Personal Fitness Tracker',
      description:
        'ML-powered app using Streamlit & Random Forest to predict calorie burn with real-time graphs.',
      link: 'https://github.com/Lali182k5/Personal-Fitness-Tracker',
    },
    {
      title: 'ID Card Generator',
      description:
        'A React app to create and download personalized ID cards from user input and uploaded photos.',
      link: 'https://github.com/Lali182k5/ID-CARD-GENERATOR',
    },
    {
      title: 'Automatic Number Plate Recognition (ANPR)',
      description:
        'Fast OCR-based plate detection using Python, OpenCV & Streamlit for smart recognition.',
      link: 'https://github.com/Lali182k5/Automatic-Number-Plate-Recognition-ANPR-System',
    },
    {
      title: 'Portfolio Website',
      description:
        'My personal portfolio built with Next.js, showcasing my projects, skills and achievements.',
      link: 'https://github.com/Lali182k5/Likhithasai-Portfolio'
    },
    {
      title: 'Patient Management System',
      description:
        'A web application for managing patient records, appointments, and medical history.',
      link: 'https://github.com/Lali182k5/Patient-Management-System',
    },
  ];

  return (
    <section id="projects" className={styles.projectsSection}>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h2>

      <div className={styles.projectGrid}>
        {projects.map((project, index) => (
          <motion.a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.projectCard}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
