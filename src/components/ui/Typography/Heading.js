import React from 'react';

const Heading = ({ children, level = 1, style, ...props }) => {
  const Tag = `h${level}`;
  const headingStyle = {
    fontWeight: 600,
    marginBottom: '0.5em',
    lineHeight: 1.2,
    ...style
  };
  return <Tag style={headingStyle} {...props}>{children}</Tag>;
};

export default Heading;
