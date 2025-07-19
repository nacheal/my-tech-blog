import { remark } from 'remark'
import html from 'remark-html'
import matter from 'gray-matter'

export async function processMarkdown(content) {
  const { data, content: mdContent } = matter(content)
  const processedContent = await remark().use(html).process(mdContent)
  return {
    metadata: data,
    content: processedContent.toString()
  }
}