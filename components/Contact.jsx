'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import styles from '../styles/Contact.module.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: '',
  });

  const [status, setStatus] = useState('');
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSending(true);
    setStatus('');

    emailjs.send(
      'service_99k0d2l',
      'template_55chp98',
      {
        from_name: formData.user_name,
        from_email: formData.user_email,
        message: formData.message,
      },
      '_ghtMYqJ7fc3vpgFL'
    ).then(
      () => {
        setStatus('Message sent successfully!');
        setFormData({ user_name: '', user_email: '', message: '' });
        setIsSending(false);
      },
      () => {
        setStatus('Failed to send message. Please try again later.');
        setIsSending(false);
      }
    );
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <h2 className={styles.heading}>Get in Touch</h2>
      <div className={styles.container}>
        {/* Left Side - Contact Info */}
        <div className={styles.contactInfo}>
          <h3 className={styles.subHeading}>Contact Information</h3>
          <div className={styles.infoItem}>
            <div className={styles.iconWrapper}>
              {/* Email Icon */}
              <svg width="24" height="24" fill="white" viewBox="0 0 24 24"><path d="M4 4h16v16H4z" fill="none"/><path d="M20 6H4c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-8c0-1.1-.9-2-2-2zm0 2v.01H4V8h16zm-8 5L4 8.99V18h16v-9.01L12 13z"/></svg>
            </div>
            <div>
              <small className={styles.label}>Email</small><br />
              <strong><a href="mailto:likhithasai182k5@gmail.com" className={styles.link}>Email</a></strong>
            </div>
          </div>

          <div className={styles.infoItem}>
            <div className={styles.iconWrapper}>
              {/* LinkedIn Icon */}
              <svg width="24" height="24" fill="white" viewBox="0 0 24 24">
                <path d="M4.98 3.5A2.49 2.49 0 012 5.99a2.5 2.5 0 114.96-.01zM3 8h4v12H3zM8 8h4v1.72c.59-1.15 2.05-1.72 3.46-1.72 3.3 0 4 2.17 4 5v7h-4v-6.5c0-1.5-.03-3.44-2.1-3.44-2.1 0-2.42 1.64-2.42 3.34V20H8z"/>
              </svg>
            </div>
            <div>
              <small className={styles.label}>LinkedIn</small><br />
              <strong><a href="https://www.linkedin.com/in/likhitha-sai-edupalli-50ba5b2a1/" target="_blank" rel="noopener noreferrer" className={styles.link}>Connect on LinkedIn</a></strong>
            </div>
          </div>

          <div className={styles.infoItem}>
            <div className={styles.iconWrapper}>
              {/* GitHub Icon */}
              <svg width="24" height="24" fill="white" viewBox="0 0 24 24">
                <path d="M12 .5A12 12 0 000 12.4a12 12 0 008.21 11.43c.6.11.82-.26.82-.58v-2.2c-3.34.73-4-1.62-4-1.62-.55-1.4-1.33-1.77-1.33-1.77-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.23 1.84 1.23 1.07 1.83 2.8 1.3 3.48 1 .1-.79.42-1.3.76-1.6-2.66-.3-5.46-1.33-5.46-5.9 0-1.3.47-2.37 1.23-3.2-.13-.3-.54-1.52.12-3.18 0 0 1-.33 3.3 1.22a11.36 11.36 0 016 0c2.3-1.55 3.3-1.22 3.3-1.22.66 1.66.25 2.88.12 3.18.77.83 1.23 1.9 1.23 3.2 0 4.58-2.8 5.6-5.47 5.9.44.4.82 1.18.82 2.38v3.52c0 .32.22.7.82.58A12 12 0 0024 12.4 12 12 0 0012 .5z" />
              </svg>
            </div>
            <div>
              <small className={styles.label}>GitHub</small><br />
              <strong><a href="https://github.com/Lali182k5" target="_blank" rel="noopener noreferrer" className={styles.link}>View GitHub Profile</a></strong>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className={styles.formWrapper}>
          <h3 className={styles.subHeading}>Send a Message</h3>
          <motion.form
            className={styles.form}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <input
              type="text"
              name="user_name"
              placeholder="Your name"
              value={formData.user_name}
              onChange={handleChange}
              required
              className={styles.input}
              disabled={isSending}
            />

            <input
              type="email"
              name="user_email"
              placeholder="Your email"
              value={formData.user_email}
              onChange={handleChange}
              required
              className={styles.input}
              disabled={isSending}
            />

            <textarea
              name="message"
              placeholder="Your message"
              value={formData.message}
              onChange={handleChange}
              required
              className={styles.textarea}
              disabled={isSending}
            ></textarea>

            <button type="submit" className={styles.button} disabled={isSending}>
              {isSending ? 'Sending...' : 'Send Message'}
            </button>
          </motion.form>

          {status && (
            <motion.p
              className={styles.status}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {status}
            </motion.p>
          )}
        </div>
      </div>
    </section>
  );
}
