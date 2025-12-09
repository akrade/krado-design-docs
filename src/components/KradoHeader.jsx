import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/components/KradoHeader.module.css';

const KradoHeader = ({
  children,
  as = 'h1',
  level = 1,
  size = 'default',
  ...props
}) => {
  const Component = as;
  const sizeMap = {
    1: 'h1',
    2: 'h2',
    3: 'h3',
    4: 'h4',
    5: 'h5',
    6: 'h6',
  };

  const className = [styles.heading, styles[sizeMap[level]]].filter(Boolean).join(' ');

  return (
    <Component className={className} {...props}>
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
