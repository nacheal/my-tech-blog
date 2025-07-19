import { processMarkdown } from '@/lib/markdown'

async function getPost(slug) {
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

export async function generateStaticParams() {
  const fs = await import('fs/promises')
  const path = await import('path')
  
  const postsDirectory = path.join(process.cwd(), 'posts')
  const filenames = await fs.readdir(postsDirectory)
  
  return filenames.map(filename => ({
    slug: filename.replace(/\.md$/, '')
  }))
}

export async function generateMetadata({ params }) {
  const post = await getPost(params.slug)
  
  if (!post) {
    return {
      title: '文章未找到',
      description: '请求的文章不存在'
    }
  }
  
  return {
    title: post.metadata.title,
    description: post.metadata.description,
    openGraph: {
      title: post.metadata.title,
      description: post.metadata.description,
      images: [
        {
          url: post.metadata.image || 'https://yourblog.com/default-og.jpg',
          width: 800,
          height: 600,
          alt: post.metadata.title,
        }
      ]
    }
  }
}

export default async function Post({ params }) {
  const post = await getPost(params.slug)
  
  if (!post) {
    return <div>文章未找到</div>
  }
  
  return (
    <article className="prose lg:prose-xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">{post.metadata.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </article>
  )
}