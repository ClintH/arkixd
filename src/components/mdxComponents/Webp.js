import React from "react";
import {useStaticQuery, graphql} from "gatsby";
const Webp = ({src, title, ...props}) => {
  const allVideo = useStaticQuery(graphql`
  {
    allFile(filter: { extension: { eq: "webp" } }) {
      edges {
        node {
          publicURL
          name
          relativePath
        }
      }
    }
  }
`).allFile.edges;
  let node = allVideo.find(n => n.node.relativePath === src);
  let url = '';
  if (node == null) {
    console.log('Warning could not find media: ' + src);
  } else {
    url = node.node.publicURL;
  }
  //const url =path; // `/images/${path}`;
  // <video autoplay src="/images/2018/ix-skill-2-1.webm" />
  return (
    <figure>
      <img
        alt={title}
        src={url}
        title={title}
      />
      {title &&
        <figcaption>{title}</figcaption>
      }
    </figure>);
};
export default Webp;

