import {useStaticQuery, graphql} from "gatsby";

const PlaceholderImage = () => {
  useStaticQuery(
    graphql`
    query {
      placeholderImage: file(relativePath: { eq: "blank-project.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
            transformOptions: { 
              fit: COVER, 
            }
          )
        }
      }
    }
  `);
}
export default PlaceholderImage;