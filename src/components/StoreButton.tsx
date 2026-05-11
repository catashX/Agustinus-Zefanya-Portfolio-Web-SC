import React from 'react';
import styles from './StoreButton.module.css';
import { motion } from 'framer-motion';

interface StoreButtonProps {
  platform: 'android' | 'ios';
  href: string;
}

const StoreButton: React.FC<StoreButtonProps> = ({ platform, href }) => {
  const isAndroid = platform === 'android';
  
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.storeBtn}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className={styles.icon}>
        {isAndroid ? (
          <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
            <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L18.66,16.19C19.28,16.55 19.28,17.45 18.66,17.81L14.75,20.07L13.69,19.01L16.81,15.12M14.75,3.93L18.66,6.19C19.28,6.55 19.28,7.45 18.66,7.81L16.81,8.88L13.69,5L14.75,3.93M12.28,10.59L17.58,7.5L14.41,10.66L12.28,10.59Z" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
            <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
          </svg>
        )}
      </div>
      <div className={styles.text}>
        <span className={styles.smallText}>{isAndroid ? 'GET IT ON' : 'Download on the'}</span>
        <span className={styles.bigText}>{isAndroid ? 'Google Play' : 'App Store'}</span>
      </div>
    </motion.a>
  );
};

export default StoreButton;
