import { type ContentData } from 'vitepress'
import { format } from 'date-fns'

export function transformPost(item: ContentData): ContentData {
  let title = item.frontmatter.title ? item.frontmatter.title : item.url
  let ret = title.match(/\/([^\/]+)\.html+$/)
  if (ret) title = ret[1]
  item.frontmatter.title = title
  return {
    ...item,
    url: item.url,
    frontmatter: {
      ...item.frontmatter,
      created: format(item.frontmatter.date || new Date(), 'yyyy-MM-dd'),
      updated: item.frontmatter.updated
        ? format(item.frontmatter.updated, 'yyyy-MM-dd')
        : undefined,
      topicIndex: /\/topics\/[a-zA-Z0-9\-]+\/index\.html/.test(item.url),
    },
  }
}

export function sortPost(a: ContentData, b: ContentData): number {
  return new Date(b.frontmatter.date).valueOf() > new Date(a.frontmatter.date).valueOf() ? 1 : -1
}
