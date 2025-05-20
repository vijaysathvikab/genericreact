import React from 'react';

const Text = ({ children, size = 'base', weight = 'normal', color = 'text-primary', style, ...props }) => {
  const textStyle = {
    fontSize: size === 'sm' ? '0.875rem' : size === 'lg' ? '1.125rem' : '1rem',
    fontWeight: weight,
    color: `var(--${color}, inherit)`,
    ...style
  };
  return <p style={textStyle} {...props}>{children}</p>;
};

export default Text;
