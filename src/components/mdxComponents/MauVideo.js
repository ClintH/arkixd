import React from "react";
const MauVideo = ({id, title, ...props}) => {
  const url = `https://api.kaltura.nordu.net/p/326/sp/0/playManifest/entryId/${id}/format/url/flavorParamId/0/video.mp4`;

  return (
    <figure className="video">
      <video
        controls
        src={url}
        title={title}
      />
      {title &&
        <figcaption>{title}</figcaption>
      }
    </figure>);
};
export default MauVideo;

/**
 *
 * <figure>
<video controls src="https://api.kaltura.nordu.net/p/326/sp/0/playManifest/entryId/0_wn66oml6/format/url/flavorParamId/0/video.mp4"></video>
</figure>
 */