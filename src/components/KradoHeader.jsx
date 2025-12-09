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
    1: '2.5rem',
    2: '2rem',
    3: '1.5rem',
    4: '1.25rem',
    5: '1rem',
    6: '0.875rem',
  };

  const styles = {
    fontSize: fontSizes[level] || fontSizes[1],
    fontWeight: level <= 2 ? 700 : 600,
    lineHeight: 1.2,
    margin: '1rem 0',
    color: '#1a1a1a',
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
