import React from "react"
import Layout from "../components/Layout"
import PropTypes from "prop-types"
import {Link, graphql} from "gatsby"
import ProjectGrid from '../components/ProjectGrid';

const Tags = ({pageContext, data, x}) => {
  const tag = pageContext.tag;
  const {edges, totalCount} = data.allMdx;
  let preamble = (totalCount === 1) ? 'One project with this tag. ' : totalCount + ' projects with this tag. '

  const location = `/tags/${tag}`;
  const title = `Projects tagged with '${tag}'`;
  const projects = edges.map(e => e.node);

  return (
    <Layout location={location} title={title}>
      <div className="narrow blendedLinks">
        <h1>{tag}</h1>
        <p>
          {preamble}
          <Link to="/tags">Browse tags.</Link>
        </p>
        {/* <ul>
          {edges.map(({node}) => {
            const {slug} = node.fields
            const {title} = node.frontmatter
            return (
              <li key={slug}>
                <Link to={slug}>{title}</Link>
              </li>
            )
          })}
        </ul> */}
        {/*
                This links to a page that does not yet exist.
                You'll come back to it!
              */}

      </div>
      <ProjectGrid projects={projects} />
    </Layout>
  )
}

Tags.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMdx: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }),
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}

export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    allMdx(
      limit: 2000
      sort: { fields: [frontmatter___year], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          ...ProjectThumbFragment
          fields {
            slug
            id
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`