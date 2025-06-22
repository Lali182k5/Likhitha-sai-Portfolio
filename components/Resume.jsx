import { motion } from 'framer-motion';
import styles from '../styles/Resume.module.css';

export default function Resume() {
  return (
    <section id="resume" className={styles.resumeSection}>
      <motion.h2 
        initial={{ opacity: 0, y: -30 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className={styles.resumeHeading}
      >
        Resume
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className={styles.resumeText}
      >
        Click below to view or download my resume.
      </motion.p>
      <motion.a 
        href="/Resume1.pdf" 
        target="_blank" 
        rel="noopener noreferrer" 
        className={styles.resumeLink}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
      >
        View Resume
      </motion.a>
    </section>
  );
}
