import { defineConfig } from 'astro/config';
import image from "@astrojs/image";
import mdx from "@astrojs/mdx";
//import {astroImageTools} from "astro-imagetools";

import {imagesPlugin} from "./tools/images-plugin";

export default defineConfig({
  vite: {
    plugins: [
      imagesPlugin()
    ]
  },
  integrations: [
    // astroImageTools,
    image(), 
    mdx()
  ]
});