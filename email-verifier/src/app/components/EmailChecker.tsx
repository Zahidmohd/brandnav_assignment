import Image from 'next/image';
import React from 'react';
import styles from './EmailChecker.module.css';

interface EmailCheckerProps {
  onVerify?: (email: string) => void;
  backgroundImage?: string;
}

const EmailChecker: React.FC<EmailCheckerProps> = ({
  onVerify = () => {},
  backgroundImage = 'https://dashboard.codeparrot.ai/api/assets/Z4pBKRgaGNOSvObp'
}) => {
  const [email, setEmail] = React.useState('');

  const handleVerify = () => {
    onVerify(email);
  };

  return (
    <div className={styles.heroSection}>
      <div className={styles.backgroundBlur} />
      <div className={styles.hero}>
        <div className={styles.heroText}>
          <div className={styles.text}>
            <h1 className={styles.title}>Email Checker and Verifier</h1>
          </div>
          <div className={styles.subtext}>
            <p className={styles.subtitle}>
              Reduce bounce rate and improve your email marketing performance with our verifier.
            </p>
          </div>
        </div>
        <div className={styles.inputField}>
          <input
            type="email"
            placeholder="Enter an email to verify"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.input}
          />
          <button onClick={handleVerify} className={styles.verifyButton}>
            Verify
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmailChecker;

