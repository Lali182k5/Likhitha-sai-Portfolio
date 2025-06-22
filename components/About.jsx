'use client';

import { motion } from 'framer-motion';
import styles from '../styles/About.module.css';

export default function About() {
  return (
    <section id="about" className={styles.aboutSection}>
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        About Me
      </motion.h2>

      <motion.div
        className={styles.aboutCard}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <p className={styles.aboutText}>
          I'm <strong>Edupalli Likhitha Sai</strong> currently pursuing a B.Tech in <strong>Computer Science and Technology</strong> with a CGPA of 8.8.
          I have solid foundation in <strong>Python and Java programming</strong>,<strong>web technologies</strong>, and <strong>machine learning</strong>, and also have a knowledge in cloud platforms like <strong>Microsoft Azure</strong>.
          <br /><br />
          I'm proficient in <strong>ReactJS</strong>, <strong>Node.js</strong>, <strong>Streamlit</strong>, and <strong>RESTful APIs</strong>. With a strong focus on writing clean, scalable code and a passion for intelligent systems, I continuously strive to grow as a developer and contribute effectively to forward-thinking teams.
        </p>
      </motion.div>
    </section>
  );
}
