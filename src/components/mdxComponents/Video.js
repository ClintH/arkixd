import React from "react";
import { useStaticQuery, graphql } from "gatsby";
const Video = ({src, title, ...props}) => {
  const allVideo = useStaticQuery(graphql`
  {
    allFile(filter: { extension: { eq: "webm" } }) {
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
  let node = allVideo.find(n=>n.node.relativePath === src);
  let url ='';
  if (node == null) {
    console.log('Warning could not find media: ' + src);
  } else {
    url = node.node.publicURL;
  }
  //const url =path; // `/images/${path}`;
  // <video autoplay src="/images/2018/ix-skill-2-1.webm" />
  return (
    <figure className="video">
      <video
        muted
        autoPlay
        controls
        src={url}
        title={title}
      />
      {title &&
        <figcaption>{title}</figcaption>
      }
    </figure>);
};
export default Video;

