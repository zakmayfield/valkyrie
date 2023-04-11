import * as React from 'react';
import { Link, PageProps, graphql } from 'gatsby';
import Layout from '../../components/layout';
import { StaticImage } from 'gatsby-plugin-image';
import Seo from '../../components/seo';

type BlogType = {
  id: string;
  frontmatter: {
    date: string;
    title: string;
    slug: string;
  };
};

type BlogsDataType = PageProps & {
  data: {
    allMdx?: {
      nodes: BlogType[];
    };
  };
};

const BlogPage = ({ data }: BlogsDataType) => {
  return (
    <Layout>
      <h1 className='text-xl'>Blog</h1>

      <StaticImage
        alt='computer and coffee resting on a coffee shop table'
        src='../../images/computer.jpeg'
        placeholder='blurred'
        className='rounded-xl'
      />

      <div className='mt-5'>
        <h2 className='text-xl'>Coffee Havens Latest Blogs</h2>

        <div>
          <ul>
            {data.allMdx?.nodes.map((node: BlogType) => (
              <li key={node.id}>
                <Link to={`${node.frontmatter.slug}`}>
                  {node.frontmatter.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query AllMdx {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        id
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          slug
          title
        }
      }
    }
  }
`;

export default BlogPage;

export const Head = () => <Seo pageTitle='Blog' />;
