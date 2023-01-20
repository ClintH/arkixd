import {visit} from 'unist-util-visit';

export function remarkImg() {
  return function (tree, { data }) {
    visit(tree, "image", node => {
      const newNode = {
        type: `html`,
        value: `<div class="img"><img src="${node.url}" alt="${node.alt}" title="${node.title}" /></div>`
      }
      Object.assign(node, newNode);
    })
  };
}