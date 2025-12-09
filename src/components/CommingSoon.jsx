import KradoButton from './KradoButton';
import styles from '../styles/components/CommingSoon.module.css';

export default function CommingSoon() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          Krado Life Design System
        </h1>

        <p className={styles.description}>
          A comprehensive design system with reusable components, design tokens, and best practices for building consistent and scalable user interfaces.
        </p>

        <div className={styles.footer}>
          <h3 className={styles.featureTitle}>
            Features Coming Soon
          </h3>
          <ul className={styles.featureList}>
            <li>✓ Component Library</li>
            <li>✓ Design Tokens</li>
            <li>✓ Documentation</li>
            <li>✓ Best Practices</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
