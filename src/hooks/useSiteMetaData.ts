import { useStaticQuery, graphql } from 'gatsby';

export const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query SiteMetadata {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return data.site.siteMetadata.title
};
