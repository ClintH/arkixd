export function sortTopProjects(allProjects: any, limit: number) {
  return [...allProjects]
    .sort(
      (a, b) =>
        new Date(b.data.year).valueOf() -
        new Date(a.data.year).valueOf()
    )
    .slice(0, limit);
}