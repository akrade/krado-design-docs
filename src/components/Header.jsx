import KradoHeader from './KradoHeader';
import KradoButton from './KradoButton';

export default function Header() {
  return (
    <header
      style={{
        padding: 'var(--krado-spacing-lg, 1rem) var(--krado-spacing-xl, 2rem)',
        backgroundColor: 'var(--krado-color-surface-primary, #fff)',
        borderBottom: '1px solid var(--krado-color-border, #eee)',
        boxShadow: 'var(--krado-shadow-sm, 0 1px 2px rgba(0,0,0,0.05))',
      }}
    >
      <nav
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        <KradoHeader as="h1" level={1} style={{ margin: 0, fontSize: '1.5rem' }}>
          Krado Life
        </KradoHeader>
        <div style={{ display: 'flex', gap: 'var(--krado-spacing-md, 1rem)' }}>
          <a
            href="https://github.com/akrade/krado-design-docs"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: 'var(--krado-font-size-sm, 0.875rem)',
              color: 'var(--krado-color-text-secondary, #666)',
            }}
          >
            GitHub
          </a>
          <a
            href="https://x.com/akradeco"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: 'var(--krado-font-size-sm, 0.875rem)',
              color: 'var(--krado-color-text-secondary, #666)',
            }}
          >
            Twitter
          </a>
        </div>
      </nav>
    </header>
  );
}
