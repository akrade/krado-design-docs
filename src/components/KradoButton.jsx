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
    padding: size === 'large' ? '12px 24px' : size === 'small' ? '6px 12px' : '8px 16px',
    fontSize: size === 'large' ? '1.125rem' : size === 'small' ? '0.875rem' : '1rem',
    borderRadius: '6px',
    border: 'none',
    fontWeight: 500,
    transition: 'all 0.2s ease',
    opacity: disabled ? 0.6 : 1,
    cursor: disabled ? 'not-allowed' : 'pointer',
  };

  const variantStyles = {
    primary: {
      backgroundColor: '#0066cc',
      color: '#fff',
    },
    secondary: {
      backgroundColor: '#e5e7eb',
      color: '#1a1a1a',
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
