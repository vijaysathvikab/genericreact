import React from 'react';

export const Row = ({ children, style, ...props }) => {
  const rowStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    marginRight: '-15px',
    marginLeft: '-15px',
    ...style
  };
  return <div style={rowStyle} {...props}>{children}</div>;
};

export const Col = ({ children, size, style, ...props }) => {
  const colStyle = {
    position: 'relative',
    width: '100%',
    paddingRight: '15px',
    paddingLeft: '15px',
    flex: size ? `0 0 ${size}%` : '1 0 0%',
    maxWidth: size ? `${size}%` : '100%',
    ...style
  };
  return <div style={colStyle} {...props}>{children}</div>;
};
