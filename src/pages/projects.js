import React from 'react';
import {graphql} from 'gatsby';

import groupBy from 'lodash.groupby';
import Layout from '../components/Layout';
import ProjectGrid from '../components/ProjectGrid';

const ProjectsPage = ({data, location, title, children}) => {
  const siteTitle = 'Projects';

  const renderMap = (map) => {
    // Order projects in descending order (by year)
    const keys = Object.keys(map)
      .sort()
      .reverse();

    // Render each group as a grid
    const groups = keys.map(key => {
     return (
        <div key={key + '-container'}>
          <h2>{key}</h2>
          <ProjectGrid projects={map[key]} />
        </div>
      );
    });
    return groups;
  };

  const projects = data.allMdx.nodes;
  const byYear = groupBy(projects, x => x.frontmatter.year);

  return (
    <Layout location={location} title={siteTitle}>
      <div className="narrow">
        <h1>Projects</h1>
        {renderMap(byYear)}
      </div>
    </Layout>
  );
};

export default ProjectsPage;

export const pageQuery = graphql`
  query AllProjectsQuery {
    allMdx(
      sort: { order: DESC, fields: [frontmatter___year] }
      filter: { frontmatter: { templateKey: { eq: "project-post" } } }
    ) {    
      nodes {
        ...ProjectThumbFragment
      }
    }
  }
`;
