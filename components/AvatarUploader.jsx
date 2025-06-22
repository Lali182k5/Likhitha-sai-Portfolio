'use client';

import { useState } from 'react';
import styles from '../styles/AvatarUploader.module.css';

export default function AvatarUploader() {
  const [image, setImage] = useState(null); // removed TypeScript type

  const handleChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className={styles.uploader}>
      <label className={styles.frame}>
        {image ? (
          <img src={image} alt="Avatar" className={styles.avatar} />
        ) : (
          <span className={styles.placeholder}>Upload Image</span>
        )}
        <input type="file" accept="image/*" onChange={handleChange} hidden />
      </label>
    </div>
  );
}
