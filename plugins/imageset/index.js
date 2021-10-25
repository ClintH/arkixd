var visit = require("unist-util-visit");
import {select} from 'unist-util-select'
import {selectAll} from 'unist-util-select'

module.exports = ({markdownAST}, pluginOptions) => {
  visit(markdownAST, "list", node => {
    // Do stuff with heading nodes
    //console.log(node);

    select("image", node => {
      console.log(n);
    });
    // for (let li of node.children) {
    //   console.log(li);

    //   for (let subLi of li.children) {
    //     console.log('--');
    //     console.log(subLi);
    //     console.log('--');
    //   }
    // }
  })
  return markdownAST
}