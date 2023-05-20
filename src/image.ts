// type Props = {
//   frontmatter: {
//     image?: string
//   }
//   file: string
// }

// type Desire = {
//   size?: string
// };

// export const getCssImgFromProps = (d: Props, desire: Desire) => {
//   const p = getImgSrcFromProps(d, desire);
//   if (p === undefined) return;
//   return `url(${p})`
// }

// export const getImgSrcFromProps = (d: Props, desire: Desire) => {
//   // d.file is full absolute path to the MD file being processed.

//   const img = d.frontmatter.image;
//   if (img === undefined) return;
//   return getImageSrc(img, d.file, desire);
// }

// export const getImageSrc = (v: string, refPath: string, desire: Desire) => {
//   //console.log(`v: ${v} refPath: ${refPath}`);
//   const basePath = '/src/pages';
//   const basePathPos = refPath.indexOf(basePath);

//   // Yields: /exhibitions/2021-studio-i/index.md
//   const suffixPath = refPath.substring(basePathPos + basePath.length);

//   // Yields: /exhibitions/2021-studio-i/
//   const dir = suffixPath.substring(0, 1 + suffixPath.lastIndexOf('/'));

//   const size = desire.size;
//   if (size !== undefined) {
//     const dotPos = v.lastIndexOf('.');
//     const preExt = v.substring(0, dotPos);
//     const ext = v.substring(dotPos);

//     v = preExt + '-' + size + ext;
//   }

//   // Yields: /images/exhibitions/2021-studio-i/someimg.jpg
//   const imagePath = '/images' + dir + v;

//   return imagePath;
// }