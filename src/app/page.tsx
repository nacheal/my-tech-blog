import ArticleCard from '@/components/ArticleCard'
import { getAllPosts } from '@/lib/api'
import Layout from '@/components/Layout'

async function getData() {
  const allPosts = await getAllPosts()
  
  return {
    latestPosts: allPosts.slice(0, 3),
    featuredPosts: allPosts.filter(post => post.featured).slice(0, 3),
    series: [
      {
        title: "React高级模式系列",
        description: "深入探讨React高级组件模式和最佳实践",
        posts: allPosts
          .filter(post => post.tags.includes('react'))
          .slice(0, 4)
      },
      {
        title: "TypeScript全指南",
        description: "从基础到高级的TypeScript完整学习路径",
        posts: allPosts
          .filter(post => post.tags.includes('typescript'))
          .slice(0, 4)
      }
    ]
  }
}

export default async function Home() {
  const { latestPosts } = await getData()

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* 英雄区 */}
        <section className="my-12 text-center">
          <h1 className="text-4xl font-bold mb-4">欢迎来到我的技术博客</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            专注分享React、TypeScript、Node.js等前端技术，记录开发中的思考与解决方案
          </p>
        </section>

        {/* 最新文章 */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 border-b pb-2">最新文章</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestPosts.map(post => (
              <ArticleCard key={post.slug} post={post} />
            ))}
          </div>
        </section>

        {/* 其他部分保持不变 */}
        {/* ... */}
      </div>
    </Layout>
  )
}