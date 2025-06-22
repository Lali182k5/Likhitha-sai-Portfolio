import { motion } from 'framer-motion';
import styles from '../styles/Skills.module.css';

export default function Skills() {
  const skills = ['Python', 'Java', 'HTML', 'CSS', 'React', 'Next.js', 'Node.js', 'SQL', 'Firebase'];

  return (
    <section id="skills" className={styles.skillsSection}>
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Skills
      </motion.h2>

      <div className={styles.skillsGrid}>
        {skills.map((skill, index) => (
          <motion.div
            key={skill}
            className={styles.skillCard}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
}