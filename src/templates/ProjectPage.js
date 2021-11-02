import * as React from "react";
import {graphql} from "gatsby";
import {getImage} from "gatsby-plugin-image";
import {MDXRenderer} from 'gatsby-plugin-mdx';
// import {BgImage, convertToBgImage} from "gbimage-bridge"
// import BackgroundImage from 'gatsby-background-image';
import Layout from "../components/Layout";
import PlaceholderImage from '../components/PlaceholderImage';

const ProjectPageTemplate = ({children, mdxScope, data, ...props}) => {
  const location = props.location;
  const fm = data.mdx.frontmatter;
  //console.log(fm);
  // let bgImage = '';
  // if (fm.image)
  //   bgImage = convertToBgImage(getImage(fm.image));// convertToBgImage(getImage(fm.image));
  // else
  //   bgImage = convertToBgImage(getImage(PlaceholderImage()));// convertToBgImage(getImage(placeholderImage));

  // //let ph = PlaceholderImage();
  // //console.log('placeholder: ', ph);
  // let bgImagePath = fm.image.childImageSharp.fluid.src;
  // let bgStack = [
  //   `linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 115, 142, 1))`,
  //   bgImage,
  // ];

  //const ph = PlaceholderImage();
  //console.log(' Ph', ph);
  const img = (fm.image === null) ? getImage(PlaceholderImage()) : fm.image.childImageSharp.gatsbyImageData;
  //console.log(img);
  //console.log('images: ', img.images);
  let bgImagePath = (fm.image === null) ? '/blank-project.jpg' : img.images.fallback.src;
  //console.log('bgImagePath: ' + bgImagePath);
  const tags = () => {
    if (fm.tags) {
      return (
        <div className="projectTagList">
          Tagged with:
          <ul className="commaList blendedLinks">
            {fm.tags.map(tag => {
              return (
                <li key={tag}>
                  <a href={'/tags/' + tag}>{tag}</a>
                </li>
              )
            })}
          </ul>
        </div>);
    } else {
      return <p />
    }
  }

  return (
    <Layout location={location} title={fm.title}>
      <article
        className="projectPage"
        itemScope
        itemType="http://schema.org/Article"
      >

        <div className="headerBleed"
          style={{
            backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 115, 142, 0.7)), url(\'' + bgImagePath + '\')'
          }}>
          <header>
            <h2>{fm.creators}</h2>
            <h1 className="headerOnImage" itemProp="headline">{fm.title}</h1>
          </header>
        </div>

        <div className="projectBody">
          <h2>{fm.subTitle}</h2>
          <MDXRenderer>{data.mdx.body}</MDXRenderer>
        </div>
        {/* <section
          dangerouslySetInnerHTML={{__html: project.html}}
          itemProp="project-body"
          className="projectBody"
        /> */}

        <hr />
        <footer>
          <h3>{fm.year} {fm.course}</h3>
          {tags()}
        </footer>
      </article>
    </Layout >
  )
}

export default ProjectPageTemplate

export const pageQuery = graphql`
  query ProjectById(
    $id: String!
  ) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        title
        subTitle
        tags
        creators
        year
        course
        image {
          childImageSharp {
            gatsbyImageData(layout:FIXED)
          }
        }
      }
    }
  }
`
