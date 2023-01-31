export function sortTopProjects(allProjects: any, limit: number) {
  return [...allProjects]
    .sort(
      (a, b) =>
        new Date(b.frontmatter.year).valueOf() -
        new Date(a.frontmatter.year).valueOf()
    )
    .slice(0, limit);
}