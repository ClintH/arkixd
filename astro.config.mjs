import { defineConfig } from 'astro/config';
import image from "@astrojs/image";
import mdx from "@astrojs/mdx";
import { remarkImg} from './tools/remarkImg.mjs';

export default defineConfig({
  output: "static",
  build: {
    format: `file`
  },
  markdown: {
    remarkPlugins: [ remarkImg ]
  },
  integrations: [
    image(), 
    mdx()
  ]
});