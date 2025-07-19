import { getAllPosts } from '@/lib/api'
import ArticleCard from '@/components/ArticleCard'
import Layout from '@/components/Layout'
import { notFound } from 'next/navigation'

interface PageProps {
  params: {
    tag: string
  }
}

async function getTagPosts(tag: string) {
  const allPosts = await getAllPosts()
  const tagPosts = allPosts.filter(post => post.tags?.includes(tag))
  
  if (tagPosts.length === 0) return null
  
  return {
    tag,
    posts: tagPosts
  }
}

export default async function TagDetailPage({ 
  params 
}: { 
  params: { tag: string } 
}) {
  const tagData = await getTagPosts(params.tag)
  
  if (!tagData) {
    notFound()
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <header className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            标签: <span className="text-blue-600">#{tagData.tag}</span>
          </h1>
          <p className="text-xl text-gray-600">
            共 {tagData.posts.length} 篇文章
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-8">
          {tagData.posts.map(post => (
            <ArticleCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </Layout>
  )
}