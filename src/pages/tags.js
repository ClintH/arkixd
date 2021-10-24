import React from 'react';
import {graphql} from 'gatsby';
import {Link} from 'gatsby';
import kebabCase from 'lodash.kebabcase';
import Layout from '../components/Layout';

const TagsPage = ({data, location}) => {
  const siteTitle = 'Tags';
  const tags = data.allMdx.group;

  return (
    <Layout location={location} title={siteTitle}>
      <div className="narrow">
        <h1>Tags</h1>
        <ul className="taglist">
          {tags.map(tag => (
            <li key={tag.fieldValue}>
              <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                {tag.fieldValue} ({tag.totalCount})
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}

export default TagsPage;

export const pageQuery = graphql`
  query AllTagsQuery {
    allMdx(
      filter: { frontmatter: { templateKey: { eq: "project-post" } } }
    ) {    
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
