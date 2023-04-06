import * as React from 'react';
import { Link, PageProps } from 'gatsby';
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';
import Seo from '../components/seo';

const AboutPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <h1 className='text-xl'>About Me</h1>

      <StaticImage
        alt='barista making pour over coffee in a coffee shop'
        src='../images/pourover.jpeg'
        placeholder='blurred'
        className='rounded-xl'
      />
    </Layout>
  );
};

export default AboutPage;

export const Head = () => <Seo pageTitle='About Me' />;
