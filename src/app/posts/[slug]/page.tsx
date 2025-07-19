import { processMarkdown } from '@/lib/markdown'
import Layout from '@/components/Layout'
import PostHeader from '@/components/PostHeader'
import PostFooter from '@/components/PostFooter'
import { notFound } from 'next/navigation'
import { getPost } from '@/lib/api'

interface Props {
  params: Promise<{ slug?: string }>; // Updated to be a Promise
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params; // Await the params object

  if (!slug) {
    notFound()
  }

  const post = await getPost(slug)

  if (!post) {
    notFound()
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <article className="prose lg:prose-xl max-w-4xl flex-grow">
            <PostHeader 
              title={post.title}
              date={post.date}
              tags={post.tags}
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