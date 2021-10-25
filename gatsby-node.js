const kebabCase = require('lodash.kebabcase');
const path = require(`path`)
const {createFilePath} = require(`gatsby-source-filesystem`)

exports.createPages = async ({graphql, actions, reporter}) => {
  const {createPage} = actions

  // Define templates
  const projectTemplate = path.resolve(`./src/templates/ProjectPage.js`)
  const tagTemplate = path.resolve("src/templates/Tags.js")

  const projectResult = await graphql(
    `{
      projectRemark: allMdx(
        limit: 1000
        filter: { frontmatter: { templateKey: { eq: "project-post" }}},
        ) {
          nodes {
            id
            fields {
              slug
            }
            frontmatter {
              templateKey
              title
              subTitle
              course
              year
              creators
              yearLevel
              tags 
              image {
                childImageSharp {
                  gatsbyImageData(layout:FIXED)
                }
              }
            }
          }
      }
      tagsGroup: allMdx(limit: 2000) {
          group(field: frontmatter___tags) {
            fieldValue
          }
        }
      }
    `
  );

  if (projectResult.errors) {
    reporter.panicOnBuild(
      `There was an error loading projects`,
      projectResult.errors
    )
    return
  }

  // Get all markdown blog posts sorted by date
  // const result = await graphql(
  //   `
  //     {
  //       allMarkdownRemark(
  //         sort: { fields: [frontmatter___date], order: ASC }
  //         limit: 1000
  //       ) {
  //         nodes {
  //           id
  //           fields {
  //             slug
  //           }
  //         }
  //       }
  //     }
  //   `
  // )

  // if (result.errors) {
  //   reporter.panicOnBuild(
  //     `There was an error loading your blog posts`,
  //     result.errors
  //   )
  //   return
  // }

  const projectNodes = projectResult.data.projectRemark.nodes

  // Create project pages
  if (projectNodes.length > 0) {
    projectNodes.forEach((project) => {
      //if (project.fields == null) console.log(project);
      createPage({
        path: project.fields.slug,
        component: projectTemplate,
        context: {
          id: project.id
        },
      })
    })
  }

  // Extract tag data from query
  const tags = projectResult.data.tagsGroup.group;

  // Create tag pages
  tags.forEach(tag => {
    createPage({
      path: `/tags/${kebabCase(tag.fieldValue)}/`,
      component: tagTemplate,
      context: {
        tag: tag.fieldValue,
      },
    })
  })
}

exports.onCreateNode = ({node, actions, getNode}) => {
  const {createNodeField} = actions

  if (node.internal.type === `MarkdownRemark` || node.internal.type === `Mdx`) {
    let slug = createFilePath({node, getNode})
    if (node.frontmatter.templateKey === 'project-post') slug = '/projects' + slug;

    createNodeField({
      name: 'slug',
      node: node,
      value: slug,
    })

    createNodeField({
      name: 'id',
      node: node,
      value: slug.replaceAll('/', '-'),
    })

    // Fix pathing for frontmatter images
    if (node.frontmatter?.image.startsWith('/images/')) {
      let url = node.frontmatter.image;
      //node.frontmatter.image = `${__dirname}/src${url}`;
      //url = '/test-img.jpg';
      //node.frontmatter.image = `../../../src${url}`;

      // ../img.jpg = /content/projects
      // ../../img.jpg = /content

      let lastSlash = url.lastIndexOf('/');

      node.frontmatter.image = 'images' + url.substring(lastSlash);
      console.log('Url: ' + url + ' -> ' + node.frontmatter.image);

      //node.frontmatter.image = '../../../src' + url;

    }
  }
  // else if (node.internal.type === `ImageSharp`) {
  //   // ImageSharp
  //   const relativeFilePath = createFilePath({
  //     node,
  //     getNode,
  //     basePath: "/images/",
  //   });
  //   console.log('Rel:' + relativeFilePath);
  // }
}

exports.createSchemaCustomization = ({actions}) => {
  const {createTypes} = actions

  // Explicitly define the siteMetadata {} object
  // This way those will always be defined even if removed from gatsby-config.js

  //image: File @fileByRelativePath
  //
  // Also explicitly define the Markdown frontmatter
  // This way the "MarkdownRemark" queries will return `null` even when no
  // blog posts are stored inside "content/blog" instead of returning an error
  createTypes(`
    type SiteSiteMetadata {
      siteUrl: String
    }

    type Mdx implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }

    type Frontmatter {
      title: String
      subTitle: String
      description: String
      image: File @fileByRelativePath
    }

    type Fields {
      slug: String
      id: String
    }
  `)
}
