import * as React from "react";
import {Link} from "gatsby";
import {MDXProvider} from "@mdx-js/react";//"gatsby-plugin-mdx"
import Header from './mdxComponents/Header';
import ImageSet from './mdxComponents/ImageSet';
import MauVideo from "./mdxComponents/MauVideo";
import Video from "./mdxComponents/Video";
import Seo from './Seo';

const Layout = ({location, title, children}) => {
  const shortcodes = {Header, ImageSet, Video, MauVideo};
  const rootPath = `${__PATH_PREFIX__}/`;
  const isRootPath = location.pathname === rootPath;
  let header;
  if (isRootPath) {
    header = (
      <div className="title blendedLinks">
        <span className="linkHome">Arkixd.</span> Works from the <a href="about">interaction design bachelor programme</a> at Malmö University.
        <div className="subTitle">
          Browse <a href="projects/">projects</a>, read <a href="about">about the programme</a> or how to <a href="collaborate">collaborate</a>.
        </div>
      </div>
    );
  } else {
    header = (
      <Link className="linkHome" to="/">
        Arkixd.
      </Link>
    );
  }

  return (
    <div name="top" className="globalWrapper" data-is-root-path={isRootPath}>
      <Seo title={title} />
      <header className="globalHeader">{header}</header>
      <main>
        <MDXProvider components={shortcodes}>
          {children}
        </MDXProvider>
      </main>
      <footer className="globalFooter blendedLinks">
        <p>
          <a href="#top">&uarr;</a>
        </p>
        <p>
          <a className="linkHome" href="/">Arkixd</a>. <a href="/projects/">projects</a>, <a href="/about">about</a>, <a href="/collaborate">collaborate</a>.
        </p>
      </footer>
    </div>
  );
};

export default Layout;
