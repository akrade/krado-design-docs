import React from 'react';
import PropTypes from 'prop-types';

const KradoButton = ({
  children,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  onClick,
  ...props
}) => {
  const baseStyles = {
    padding: size === 'large' ? 'var(--krado-spacing-md, 12px) var(--krado-spacing-lg, 24px)' : size === 'small' ? 'var(--krado-spacing-xs, 6px) var(--krado-spacing-sm, 12px)' : 'var(--krado-spacing-sm, 8px) var(--krado-spacing-md, 16px)',
    fontSize: size === 'large' ? 'var(--krado-font-size-lg, 1.125rem)' : size === 'small' ? 'var(--krado-font-size-sm, 0.875rem)' : 'var(--krado-font-size-md, 1rem)',
    borderRadius: 'var(--krado-border-radius-md, 6px)',
    border: 'none',
    fontWeight: 'var(--krado-font-weight-medium, 500)',
    transition: 'var(--krado-transition-base, all 0.2s ease)',
    opacity: disabled ? 0.6 : 1,
    cursor: disabled ? 'not-allowed' : 'pointer',
  };

  const variantStyles = {
    primary: {
      backgroundColor: 'var(--krado-color-primary, #0066cc)',
      color: 'var(--krado-color-surface-primary, #fff)',
    },
    secondary: {
      backgroundColor: 'var(--krado-color-surface-secondary, #e5e7eb)',
      color: 'var(--krado-color-text-primary, #1a1a1a)',
    },
  };

  const buttonStyles = {
    ...baseStyles,
    ...variantStyles[variant] || variantStyles.primary,
  };

  return (
    <button
      style={buttonStyles}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

KradoButton.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

export default KradoButton;
