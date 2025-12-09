import KradoHeader from './KradoHeader';
import KradoButton from './KradoButton';
import styles from '../styles/components/Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <KradoHeader as="h1" level={1} className={styles.logo}>
          Krado Life
        </KradoHeader>
        <div className={styles.links}>
          <a
            href="https://github.com/akrade/krado-design-docs"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            GitHub
          </a>
          <a
            href="https://x.com/akradeco"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            Twitter
          </a>
        </div>
      </nav>
    </header>
  );
}
