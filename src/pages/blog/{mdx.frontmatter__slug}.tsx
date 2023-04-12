import { graphql, PageProps } from 'gatsby';
import * as React from 'react';
import Layout from '../../components/layout';
import Seo from '../../components/seo';
import Post from '../../components/Post';

type BlogDataType = PageProps & {
  data: {
    mdx: {
      frontmatter: {
        title: string;
        date: string;
      };
    };
  };
};

const BlogPost = ({ data, children }: BlogDataType) => {
  return (
    <Layout>
      <Post meta={data.mdx.frontmatter}> {children} </Post>
    </Layout>
  );
};

export const query = graphql`
  # Under the hood, Gatsby makes the id value of the data layer node (mdx files) available to use as a query variable
  query BlogQuery($id: String) {
    # mdx is used to get a single node versus allMdx for all of the available nodes
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
    }
  }
`;

export const Head = ({ data }: BlogDataType) => (
  <Seo pageTitle={data.mdx.frontmatter.title} />
);

export default BlogPost;
