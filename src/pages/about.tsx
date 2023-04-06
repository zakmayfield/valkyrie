import * as React from 'react';
import { Link, PageProps } from 'gatsby';
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';

const AboutPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <h1 className='text-xl'>About Me</h1>

      <StaticImage alt='' src='' placeholder='blurred'></StaticImage>
    </Layout>
  );
};

export default AboutPage;

export const Head = () => <title>About Me</title>;
