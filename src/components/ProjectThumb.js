import * as React from "react"
// import {useStaticQuery, graphql} from "gatsby"
import {Link} from "gatsby"
import {getImage} from "gatsby-plugin-image"
import {BgImage} from "gbimage-bridge"
//import BackgroundImage from 'gatsby-background-image'
import PlaceholderImage from './PlaceholderImage';
/*
light: #feb8c5
dark: #e4022d
duotone: { highlight: "#f00e2e", shadow: "#192550" }
*/
const ProjectThumb = (props) => {

  // const {placeholderImage} = useStaticQuery(
  //   graphql`
  //     query {
  //       placeholderImage: file(relativePath: { eq: "blank-project.jpg" }) {
  //         childImageSharp {
  //           gatsbyImageData(
  //             placeholder: BLURRED
  //             formats: [AUTO, WEBP, AVIF]
  //             transformOptions: { 
  //               fit: COVER, 
  //             }
  //           )
  //         }
  //       }
  //     }
  //   `
  // )

  const project = props.value;
  // Set these values by editing "siteMetadata" in gatsby-config.js
  //const author = data.site.siteMetadata?.author
  //const social = data.site.siteMetadata?.social
  const title = project.frontmatter.title || project.fields.slug
  const fm = project.frontmatter;
  //console.log(getImage(fm.image));
  // let img = '';
  // if (fm.image)
  //   img = <GatsbyImage alt={title} image={getImage(fm.image)} />

  let bgImage = '';
  if (fm.image)
    bgImage = getImage(fm.image);// convertToBgImage(getImage(fm.image));
  else
    bgImage = getImage(PlaceholderImage());// convertToBgImage(getImage(placeholderImage));

  //`filter(grayscale(100%) contrast(1) blur(var(--blur)))`,
  // console.log(fm);
  let bgStack = [
    `linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 115, 142, 1))`,
    bgImage,
  ];

  return (
    <BgImage
      style={{
        backgroundBlendMode: "screen"
      }}
      className="projectThumb"
      image={bgStack}
    >
      <article>
        <div className="creators">{fm.creators}</div>
        <div className="header">
          <h3 className="headerOnImage">
            <Link to={project.fields.slug} itemProp="url">
              <span itemProp="headline">{title}</span>
            </Link>
          </h3>
        </div>
        <div style={{
          flexGrow: 1
        }}></div>
        <div
          dangerouslySetInnerHTML={{
            __html: fm.subTitle || fm.description,
          }}
        >
        </div>
      </article>
    </BgImage>
  )
}

export default ProjectThumb
