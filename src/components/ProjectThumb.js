import * as React from "react";
import {Link} from "gatsby";
import {getImage} from "gatsby-plugin-image";

const BgImage = (props) => { 
  let url = null;
  if (props.image) {
    const image = getImage(props.image); 
    let urls = [];
    const urlSets = image.images.sources.map(s=>s.srcSet);
    urlSets.forEach(s=>urls.push(...s.split(',\n')));
    const filteredUrls = urls.filter(u=>u.indexOf('.avif') < 0);
    
    if (filteredUrls.length === 0) url = urls[0];
    else url = filteredUrls[0];

    if (url === null || urls.length === 0) {
      console.log(urlSets);
      throw Error('No image urls!');
    } 
    url = url.substring(0, url.indexOf(' '));
  } else url ='/blank-project.jpg';

  return (
    <div
      style={{
        backgroundRepeat: 'no-repeat',
        backgroundBlendMode: 'screen',
        backgroundSize: 'cover',
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 115, 142, 1)), url(${url})`,
      }}
      >
      {props.children}
    </div>
  );
};

/*
light: #feb8c5
dark: #e4022d
duotone: { highlight: "#f00e2e", shadow: "#192550" }
*/
const ProjectThumb = (props) => {
  const project = props.value;
  const title = project.frontmatter.title || project.fields.slug;
  const fm = project.frontmatter;

  const creators = fm.creators.indexOf(',') > 0 ? '' : fm.creators;

  //`filter(grayscale(100%) contrast(1) blur(var(--blur)))`,
  return (
    <BgImage
      className="projectThumb"
      image={fm.image}
    >
      <article>
        <div className="creators">{creators}</div>
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
  );
};

export default ProjectThumb;
