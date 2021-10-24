import * as React from "react"
import {graphql} from "gatsby"
import ProjectThumb from '../components/ProjectThumb';
import Layout from "../components/Layout"

const IndexPage = ({data, location}) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMdx.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <p>
          No projects?
        </p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <div className="thumbGrid">
        {posts.map(post => {
          return (
            <div className="thumbGridItem" key={post.fields.slug}>
              <ProjectThumb value={post} />
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export default IndexPage

export const projectThumbFragment = graphql`
fragment ProjectThumbFragment on Mdx {
  fields {
    slug
    id
  }
  frontmatter {
    title
    subTitle
    year
    course
    creators
    image {
      childImageSharp {
        gatsbyImageData(
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
          transformOptions: { 
            fit: COVER, 
            duotone: { highlight: "#feb8c5", shadow: "#e4022d", opacity: 10 } 
          }
         )
      }
    }  
  }
}
`;

//transformOptions: { fit: COVER, duotone: { highlight: "#d93f5c", shadow: "#400d16", opacity: 90 } }
//allMarkdownRemark
/*
light: #feb8c5
dark: #e4022d
*/
export const pageQuery = graphql`
query {
  site {
    siteMetadata {
      title
    }
  }
  allMdx (
    filter: { frontmatter: { templateKey: { eq: "project-post" }}},
    limit: 9,
    sort: { fields: [frontmatter___year], order: DESC }) {
    nodes {
      ...ProjectThumbFragment
     
    }
  }
}
`

/*
 excerpt
      fields {
        slug
      }
      frontmatter {
        title
        subTitle
        year
        course
        creators
        image {
          childImageSharp {
            gatsbyImageData(
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
              transformOptions: {
                fit: COVER,
                duotone: { highlight: "#feb8c5", shadow: "#e4022d", opacity: 10 }
              }
             )
          }
        }
      }
*/