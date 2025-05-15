import React from 'react';

const Container = ({ children, fluid = false, style, ...props }) => {
  const containerStyle = {
    width: '100%',
    paddingRight: '15px',
    paddingLeft: '15px',
    marginRight: 'auto',
    marginLeft: 'auto',
    maxWidth: fluid ? '100%' : '1140px',
    ...style,
  };

  return (
    <div style={containerStyle} {...props}>
      {children}
    </div>
  );
};

export default Container;
