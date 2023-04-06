import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../components/layout';
import Seo from '../components/seo';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <h1 className='text-xl'>Coffee Haven</h1>

      <StaticImage
        alt='Coffee beans'
        src='../images/coffee.jpeg'
        className='rounded-lg'
      />
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <Seo pageTitle='Home Page' />;
