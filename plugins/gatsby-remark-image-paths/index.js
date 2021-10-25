/**
 * 
 * This plugin hacks the Markdown/MDX paths so images can be stored in
 * /src/images/, referenced in a MD tag as /images/...
 * or used in an IMG tag as /images/...
 * 
 * Otherwise the IMG tag and MD tag would need different paths, since the
 * image paths in MD are relative to the location of the MD file
 */
const visit = require('unist-util-visit');

module.exports = ({markdownAST, file}, pluginOptions) => {
  // console.log('file: ', file);
  // console.log(markdownAST);

  // visit(markdownAST, 'yaml', node => {
  //   console.log('yaml:');
  //   console.log(node);
  // });

  visit(markdownAST, 'image', node => {

    let url = node.url;
    if (url.startsWith('/images/')) {
      //url = '../../../src' + url;
      let lastSlash = url.lastIndexOf('/');
      node.url = 'images' + url.substring(lastSlash);
      //console.log('plugin url: ' + url + ' -> ' + node.url);

    }

  });

  return markdownAST;
};