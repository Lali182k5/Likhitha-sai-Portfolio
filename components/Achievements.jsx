'use client';

import { motion } from 'framer-motion';
import styles from '../styles/Achievements.module.css';

export default function Achievements() {
  const achievements = [
 
    {
      title: 'GitHub Foundations Certification',
      issuer: 'GitHub',
      description: 'Demonstrated foundational knowledge of Git, GitHub workflows, and version control practices.',
      date: '2025',
      credentialUrl: 'https://www.credly.com/badges/796118ad-b7d0-45b8-84ae-ea7633a1af01/public_url',
    },
    {
      title: 'Azure Data Scientist Associate',
      issuer: 'Microsoft',
      description: ' Certified in designing and implementing data science solutions on Azure.',
      date: '2025',
      credentialUrl: 'https://learn.microsoft.com/api/credentials/share/en-us/LikhithaSaiEdupalli-4996/B67E4161CABF67A3?sharingId=2A3061146F5D1F27',
    },
    {
      title: 'Azure AI Fundamentals',
      issuer: 'Microsoft',
      description: 'Validated understanding of AI workloads, machine learning, computer vision, NLP, and responsible AI.',
      date: '2024',
      credentialUrl: 'https://learn.microsoft.com/en-gb/users/likhithasaiedupalli-4996/credentials/4f159775625c8cb9',
    },
       {
      title: 'Data Analysis with Python',
      issuer: 'freeCodeCamp',
      description: 'Completed hands-on data analysis projects using NumPy, Pandas, Matplotlib, and Seaborn.',
      date: '2023',
      credentialUrl: 'https://www.freecodecamp.org/certification/fcc73ab05f2-08e7-4949-8b9b-5cce56badf86/data-analysis-with-python-v7',
    },

  
  ];

  return (
    <section id="achievements" className={styles.achievementsSection}>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        CERTIFICATIONS
      </motion.h2>

      <div className={styles.achievementList}>
        {achievements.map((item, index) => (
          <motion.div
            key={index}
            className={styles.achievementCard}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <h3>{item.title}</h3>
            <p><strong>Issuer:</strong> {item.issuer}</p>
            <p>{item.description}</p>
            <span><strong>Year:</strong> {item.date}</span>
            <br />
            <a
              href={item.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.credentialLink}
            >
              View Credential →
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
