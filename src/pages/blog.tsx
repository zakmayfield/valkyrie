import * as React from 'react';
import { Link, PageProps } from 'gatsby';
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';
import Seo from '../components/seo';

const BlogPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <h1 className='text-xl'>Blog</h1>

      <StaticImage
        alt='computer and coffee resting on a coffee shop table'
        src='../images/computer.jpeg'
        placeholder='blurred'
        className='rounded-xl'
      />

      <div className='mt-5'>
        <h2 className='text-xl'>Coffee Havens Latest Blogs</h2>
      </div>
    </Layout>
  );
};

export default BlogPage;

export const Head = () => <Seo pageTitle='Blog' />;
