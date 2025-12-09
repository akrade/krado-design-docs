import React from 'react';
import PropTypes from 'prop-types';

const KradoHeader = ({
  children,
  as = 'h1',
  level = 1,
  size = 'default',
  ...props
}) => {
  const Component = as;

  const fontSizes = {
    1: 'var(--krado-font-size-3xl, 2.5rem)',
    2: 'var(--krado-font-size-2xl, 2rem)',
    3: 'var(--krado-font-size-xl, 1.5rem)',
    4: 'var(--krado-font-size-lg, 1.25rem)',
    5: 'var(--krado-font-size-md, 1rem)',
    6: 'var(--krado-font-size-sm, 0.875rem)',
  };

  const styles = {
    fontSize: fontSizes[level] || fontSizes[1],
    fontWeight: level <= 2 ? 'var(--krado-font-weight-bold, 700)' : 'var(--krado-font-weight-semibold, 600)',
    lineHeight: 'var(--krado-line-height-heading, 1.2)',
    margin: `var(--krado-spacing-lg, 1rem) 0`,
    color: 'var(--krado-color-text-primary, #1a1a1a)',
  };

  return (
    <Component style={styles} {...props}>
      {children}
    </Component>
  );
};

KradoHeader.propTypes = {
  children: PropTypes.node.isRequired,
  as: PropTypes.string,
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  size: PropTypes.string,
};

export default KradoHeader;
