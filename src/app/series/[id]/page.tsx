import { getAllPosts } from '@/lib/api'
import ArticleCard from '@/components/ArticleCard'
import Layout from '@/components/Layout'
import { notFound } from 'next/navigation'

async function getSeriesPosts(id: string) {
  const allPosts = await getAllPosts()
  const seriesPosts = allPosts.filter(post => post.tags?.includes(id))
  
  if (seriesPosts.length === 0) return null
  
  // 获取系列信息
  const seriesInfo = {
    react: {
      title: "React高级模式系列",
      description: "深入探讨React高级组件模式和最佳实践"
    },
    typescript: {
      title: "TypeScript全指南",
      description: "从基础到高级的TypeScript完整学习路径"
    },
    nextjs: {
      title: "Next.js实战系列",
      description: "探索Next.js的各种高级用法和优化技巧"
    }
  }[id]

  return {
    title: seriesInfo?.title || id,
    description: seriesInfo?.description || '',
    posts: seriesPosts
  }
}

export default async function SeriesDetailPage({ 
  params 
}: { 
  params: { id: string } 
}) {
  const seriesData = await getSeriesPosts(params.id)
  
  if (!seriesData) {
    notFound()
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <header className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">{seriesData.title}</h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            {seriesData.description}
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-8">
          {seriesData.posts.map(post => (
            <ArticleCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </Layout>
  )
}