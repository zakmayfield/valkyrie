import * as React from 'react';
import { Link, PageProps, graphql } from 'gatsby';
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';
import Seo from '../components/seo';

type NameType = {
  name: string
}

type BlogDataType = PageProps & {
  data: {
    allFile?: {
      nodes: NameType[];
    };
  };
}

const BlogPage = ({ data }: BlogDataType) => {
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

        <div>
          <ul>
            {data.allFile?.nodes.map((node: any) => (
              <li key={node.name}>{node.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query AllFile {
    allFile {
      nodes {
        name
      }
    }
  }
`;

export default BlogPage;

export const Head = () => <Seo pageTitle='Blog' />;
