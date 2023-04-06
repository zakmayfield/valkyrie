import * as React from 'react';
import { useSiteMetadata } from '../hooks/useSiteMetaData';

interface SeoProps {
  pageTitle: string;
}

const Seo = ({ pageTitle }: SeoProps) => {
  const siteTitle = useSiteMetadata();

  return (
    <title>
      {siteTitle} | {pageTitle}
    </title>
  );
};

export default Seo;
