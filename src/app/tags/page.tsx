import { getAllPosts } from '@/lib/api'
import Link from 'next/link'
import Layout from '@/components/Layout'

async function getTagsData() {
  const allPosts = await getAllPosts()
  const tagsMap = new Map<string, number>()

  // 统计每个标签的文章数量
  allPosts.forEach(post => {
    post.tags?.forEach(tag => {
      tagsMap.set(tag, (tagsMap.get(tag) || 0) + 1)
    })
  })

  // 转换为数组并按文章数量排序
  const tags = Array.from(tagsMap.entries())
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count)

  return { tags }
}

export default async function TagsPage() {
  const { tags } = await getTagsData()

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <header className="mb-12 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">所有标签</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            按主题分类浏览文章
          </p>
        </header>

        <div className="flex flex-wrap gap-4 justify-center">
          {tags.map((tag) => (
            <Link
              key={tag.name}
              href={`/tags/${tag.name}`}
              className="px-6 py-3 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors flex items-center"
            >
              <span>#{tag.name}</span>
              <span className="ml-2 text-sm bg-gray-300 text-gray-700 rounded-full px-2 py-0.5">
                {tag.count}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  )
}