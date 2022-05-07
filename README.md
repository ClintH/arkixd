
# Directory structure

## public

Static files, not processed by Astro. These are copied directly to output. It's also the destination for the image processing script.

## src

Source templates, layouts, Markdown and full-resolution images.

* `src\components`: reusable components
* `src\layouts`: layouts
* `src\images`: raw, full-size images
* `src\pages`: MD content
* `src\styes`: CSS

# Developing 

Astro auto-reloading dev server:

```
npm run dev
```

# Building

```
// Builds static files, ready for deploy
npm run build

// Serves up built files for testing prior to deploy
npm run preview
```


Image processing. This processes all the images in `./src`, creating size variations and dumping, maintaining paths to `./public/images`. This is needs to be run manually when images have been added/changed.

```
npm run images
```

Clean:

```
// Removes Astro build files
npm run clean

// Removes generated images
npm run images:clean
```

# Deploy

Deployment to Netlify (assumes `netlify-cli` is installed and logged in)

```
// Push to preview
npm run deploy

// Deploy build
npm run publish
```