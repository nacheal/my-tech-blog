import { getAllPosts } from '@/lib/api'
import Link from 'next/link'
import Layout from '@/components/Layout'

async function getSeriesData() {
  const allPosts = await getAllPosts()
  
  // 按标签分组创建系列
  const series = [
    {
      id: 'react',
      title: "React高级模式系列",
      description: "深入探讨React高级组件模式和最佳实践",
      postCount: allPosts.filter(post => post.tags?.includes('react')).length
    },
    {
      id: 'typescript',
      title: "TypeScript全指南",
      description: "从基础到高级的TypeScript完整学习路径",
      postCount: allPosts.filter(post => post.tags?.includes('typescript')).length
    },
    {
      id: 'nextjs',
      title: "Next.js实战系列",
      description: "探索Next.js的各种高级用法和优化技巧",
      postCount: allPosts.filter(post => post.tags?.includes('nextjs')).length
    }
  ]
  
  return { series }
}

export default async function SeriesPage() {
  const { series } = await getSeriesData()

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <header className="mb-12 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">系列文章</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            系统化的学习路径，深入掌握特定技术领域
          </p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {series.map((seriesItem) => (
            <Link 
              key={seriesItem.id}
              href={`/series/${seriesItem.id}`}
              className="border rounded-lg p-6 hover:shadow-md transition-shadow"
            >
              <h2 className="text-xl font-semibold mb-2">{seriesItem.title}</h2>
              <p className="text-gray-600 mb-4">{seriesItem.description}</p>
              <div className="text-sm text-gray-500">
                {seriesItem.postCount} 篇文章
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  )
}