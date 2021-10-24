import React from "react";
const Video = ({path, title, ...props}) => {
  const url = `/images/${path}`;
  // <video autoplay src="/images/2018/ix-skill-2-1.webm" />
  return (
    <figure className="video">
      <video
        autoplay
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

