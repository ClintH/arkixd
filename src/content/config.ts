import {z, defineCollection} from 'astro:content';

const projectsCollection = defineCollection({
  type: 'content',
  schema: ({image}) => z.object({
    title: z.string(),
    tags: z.array(z.string()),
    image: image().refine((img) => img.width >= 80, {
      message: "Cover image must be at least 1080 pixels wide!",
    }),
    creators: z.array(z.string()).or(z.string()),
    year: z.number(),
    yearLevel: z.number(),
    course: z.string(),
    subTitle: z.string().optional(),
    youtubeID: z.string().optional()
  })
});


const exhibitionCollection = defineCollection({
  type: 'content',
  schema: ({image}) => z.object({
    year: z.number(),
    yearLevel: z.number(),
    title: z.string(),
    image: image().refine((img) => img.width >= 80, {
      message: "Cover image must be at least 1080 pixels wide!",
    }),
    priorityMax: z.number()
  })
})

const exhibitionContentCollection = defineCollection({
  type: 'content',
  schema: ({image}) => z.object({
    priority: z.number(),
    exhibition: z.string(),
    title: z.string(),
    tags: z.array(z.string()),
    image: image().refine((img) => img.width >= 80, {
      message: "Cover image must be at least 1080 pixels wide!",
    }),
    additionalImages: z.array(image()).optional(),
    creators: z.array(z.string()).or(z.string()),
    subTitle: z.string().optional(),
    youtubeID: z.string().optional()
  })
});

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  'projects': projectsCollection,
  'exhibitions': exhibitionCollection,
  'exhibition-content': exhibitionContentCollection
};