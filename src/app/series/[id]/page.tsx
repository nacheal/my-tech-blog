import { processMarkdown } from '@/lib/markdown'
import Layout from '@/components/Layout'
import PostHeader from '@/components/PostHeader'
import PostFooter from '@/components/PostFooter'
// import TableOfContents from '@/components/TableOfContents'
import { notFound } from 'next/navigation'
import type { Metadata, ResolvingMetadata } from 'next'

interface Props {
  params: Promise<{ slug?: string }>; // Updated to be a Promise
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params; // Await the params object
  // ... rest of your generateMetadata logic
  return {
    title: `Blog Post: ${slug}`
  }
}

async function getPost(slug: string) {
  const fs = await import('fs/promises')
  const path = await import('path')
  
  try {
    const fullPath = path.join(process.cwd(), 'posts', `${slug}.md`)
    const fileContents = await fs.readFile(fullPath, 'utf8')
    return await processMarkdown(fileContents)
  } catch (error) {
    return null
  }
}


export default async function BlogPostPage({ params }: Props) {
  const { slug = "" } = await params; // Await the params object
  const post = await getPost(slug)
  console.log('post', post)
  return (
    <div>
      <h1>Blog Post: {slug}1</h1>
    </div>
  );
}