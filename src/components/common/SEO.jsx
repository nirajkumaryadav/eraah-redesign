import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const SEO = ({ title, description, keywords, image }) => {
  const siteTitle = "Eraah - AI Solutions for NGOs";
  const defaultDescription = "AI-powered tools and solutions designed specifically for NGOs and mission-driven organizations.";
  const defaultKeywords = "AI, NGO, artificial intelligence, data analysis, nonprofit technology";
  const siteUrl = "https://eraah.org";
  const defaultImage = `${siteUrl}/images/eraah-social-card.jpg`;

  return (
    <Helmet>
      <title>{title ? `${title} | ${siteTitle}` : siteTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta name="keywords" content={keywords || defaultKeywords} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={title || siteTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:image" content={image || defaultImage} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={siteUrl} />
      <meta name="twitter:title" content={title || siteTitle} />
      <meta name="twitter:description" content={description || defaultDescription} />
      <meta name="twitter:image" content={image || defaultImage} />
    </Helmet>
  );
};

export default SEO;