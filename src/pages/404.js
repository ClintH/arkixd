import * as React from "react";
import {graphql} from "gatsby";

import Layout from "../components/Layout";
import Seo from "../components/Seo";

const NotFoundPage = ({data, location}) => {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="404: Not Found" />
      <h1>Not Found</h1>
      <p>That page isn't found. A broken URL? A terrible bug? Who's to say.</p>
    </Layout>
  );
};

export default NotFoundPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
