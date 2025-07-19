import { processMarkdown } from '@/lib/markdown'
import fs from 'fs'
import path from 'path'

export async function getStaticProps({ params }) {
  const fullPath = path.join(process.cwd(), 'posts', `${params.slug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { metadata, content } = await processMarkdown(fileContents)
  return {
    props: {
      post: {
        metadata,
        content,
        slug: params.slug
      }
    }
  }
}

export async function getStaticPaths() {
  const postsDirectory = path.join(process.cwd(), 'posts')
  const filenames = fs.readdirSync(postsDirectory)
  
  return {
    paths: filenames.map(filename => ({
      params: {
        slug: filename.replace(/\.md$/, '')
      }
    })),
    fallback: false
  }
}

export default function Post({ post }) {
  console.log('pages-post')
  return (
    <article>
      <h1>{post.metadata.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </article>
  )
}