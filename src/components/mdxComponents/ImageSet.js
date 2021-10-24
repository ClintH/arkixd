import React from "react"

const ImageSet = (props) => {
  //const children = props.children;

  const findImg = (n, acculm) => {
    if (typeof n === 'string') return false;
    if (n.props?.mdxType === 'img') {
      acculm.push(n);
      return acculm;
    }

    //console.log('class name: ' + n.props.className);
    //console.log(n);
    if (n.props) {
      if (n.props.className === 'gatsby-resp-image-wrapper') {
        acculm.push(n);
        return acculm;
      };
    }

    //console.log(n);
    if (n.children.props) {
      if (Array.isArray(n.children.props.children)) {
        for (let c of n.children.props.children) {
          findImg(c, acculm);
        }
      } else findImg(n.children.props.children, acculm);
    }
    return acculm;
  }

  //  console.log(children);

  let images = [];
  findImg(props, images);

  //console.log('images', images);
  //children.props.children.forEach(n => findImg(n, images));

  // let key = 'imgset-key';
  // let letKeyIndex = 0;
  // images.forEach(img => img.key = key + letKeyIndex++);
  // console.log(images);

  return (
    <section className="imageSet">
      {images.map((img, index) => {
        return (
          <li key={index}>{img}</li>
        )
      })}
    </section>
  )
}

export default ImageSet