import { processMarkdown } from '@/lib/markdown'
import Layout from '@/components/Layout'
import PostHeader from '@/components/PostHeader'
import PostFooter from '@/components/PostFooter'
// import TableOfContents from '@/components/TableOfContents'
import { notFound } from 'next/navigation'

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

export async function generateStaticParams() {
  const fs = await import('fs/promises')
  const path = await import('path')
  
  const postsDirectory = path.join(process.cwd(), 'posts')
  const filenames = await fs.readdir(postsDirectory)
  
  return filenames.map(filename => ({
    slug: filename.replace(/\.md$/, '')
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug)
  
  if (!post) {
    return {
      title: '文章未找到',
      description: '请求的文章不存在'
    }
  }
  
  return {
    title: `${post.metadata.title} | Michael's Tech Blog`,
    description: post.metadata.description,
    openGraph: {
      title: post.metadata.title,
      description: post.metadata.description,
      type: 'article',
      publishedTime: post.metadata.date,
      tags: post.metadata.tags,
      authors: ['Michael'],
      images: [
        {
          url: post.metadata.image || 'https://yourblog.com/default-og.jpg',
          width: 800,
          height: 600,
          alt: post.metadata.title,
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: post.metadata.title,
      description: post.metadata.description,
      images: [post.metadata.image || 'https://yourblog.com/default-og.jpg']
    }
  }
}

export default async function Post({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug)
  
  if (!post) {
    notFound()
  }
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* 主内容区 */}
          <article className="prose lg:prose-xl max-w-4xl flex-grow">
            <PostHeader 
              title={post.metadata.title}
              date={post.metadata.date}
              tags={post.metadata.tags}
              readingTime={post.metadata.readingTime}
            />
            
            <div 
              className="mt-8"
              dangerouslySetInnerHTML={{ __html: post.content }} 
            />
            
            <PostFooter />
          </article>
          
          {/* 侧边栏 */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="sticky top-24">
              {/* <TableOfContents content={post.content} /> */}
              
              <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold mb-2">关于作者</h3>
                <p className="text-sm text-gray-600">
                  Michael，前端开发工程师，热爱分享技术心得。
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </Layout>
  )
}