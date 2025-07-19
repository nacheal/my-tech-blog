import { processMarkdown } from '@/lib/markdown'
import Layout from '@/components/Layout'
import PostHeader from '@/components/PostHeader'
import PostFooter from '@/components/PostFooter'
import { notFound } from 'next/navigation'

interface Props {
  params: Promise<{ slug?: string }>; // Updated to be a Promise
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


export default async function PostPage({ params }: Props) {
  const restparams = await params
  console.log('restparams', restparams)
  const { slug = "" } = await params; // Await the params object
  const post = await getPost(slug)
  console.log('post', post)

  if (!post) {
    notFound()
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
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
          
          <aside className="lg:w-64 flex-shrink-0">
            <div className="sticky top-24">
              
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