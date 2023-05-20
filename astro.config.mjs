import { defineConfig, sharpImageService } from 'astro/config';
import mdx from "@astrojs/mdx";

export default defineConfig({
  output: "static",
  build: {
    format: `file`
  },
  experimental: {
    assets: true
  },
  image: {
    service: sharpImageService()
  },
  integrations: [
    mdx()
  ]
});