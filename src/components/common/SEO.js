import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = ({ title, description, image, url }) => {
  const siteTitle = 'StyleStore';
  const defaultDescription = 'Your one-stop shop for stylish products.';
  const defaultImage = '/logo.png';
  const siteUrl = 'https://stylestore.com';

  return (
    <Helmet>
      <title>{title ? `${title} | ${siteTitle}` : siteTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta property="og:title" content={title || siteTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:image" content={image || defaultImage} />
      <meta property="og:url" content={url || siteUrl} />
      <meta property="twitter:card" content="summary_large_image" />
    </Helmet>
  );
};

export default SEO;
