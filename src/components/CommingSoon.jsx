import KradoButton from './KradoButton';

export default function CommingSoon() {
  return (
    <section
      style={{
        minHeight: '80vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 'var(--krado-spacing-xl, 2rem)',
        textAlign: 'center',
        backgroundColor: 'var(--krado-color-surface-secondary, #f5f7fa)',
      }}
    >
      <div
        style={{
          maxWidth: '800px',
        }}
      >
        <h1
          style={{
            fontSize: 'var(--krado-font-size-4xl, 3.5rem)',
            fontWeight: 'var(--krado-font-weight-bold, 700)',
            color: 'var(--krado-color-text-primary, #1a1a1a)',
            marginBottom: 'var(--krado-spacing-lg, 1rem)',
            lineHeight: 'var(--krado-line-height-heading, 1.2)',
          }}
        >
          Krado Life Design System
        </h1>

        <p
          style={{
            fontSize: 'var(--krado-font-size-lg, 1.25rem)',
            color: 'var(--krado-color-text-secondary, #666)',
            marginBottom: 'var(--krado-spacing-xl, 2rem)',
            lineHeight: 'var(--krado-line-height-relaxed, 1.6)',
          }}
        >
          A comprehensive design system with reusable components, design tokens, and best practices for building consistent and scalable user interfaces.
          We're building the documentation and component library. Stay tuned for updates on colors, typography, spacing, and reusable components.
        </p>


        <div
          style={{
            marginTop: 'var(--krado-spacing-3xl, 4rem)',
            paddingTop: 'var(--krado-spacing-2xl, 2rem)',
            borderTop: '1px solid var(--krado-color-border, #e5e7eb)',
          }}
        >
          <h3
            style={{
              fontSize: 'var(--krado-font-size-sm, 0.875rem)',
              fontWeight: 'var(--krado-font-weight-semibold, 600)',
              color: 'var(--krado-color-text-secondary, #666)',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              marginBottom: 'var(--krado-spacing-md, 1rem)',
            }}
          >
            Features Coming Soon
          </h3>
          <ul
            style={{
              display: 'flex',
              gap: 'var(--krado-spacing-2xl, 2rem)',
              justifyContent: 'center',
              listStyle: 'none',
              flexWrap: 'wrap',
              fontSize: 'var(--krado-font-size-sm, 0.875rem)',
              color: 'var(--krado-color-text-secondary, #666)',
            }}
          >
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
