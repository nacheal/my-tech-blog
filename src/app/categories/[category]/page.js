import { getAllPosts } from '@/lib/api'
import ArticleCard from '@/components/ArticleCard'

export async function generateStaticParams() {
  const allPosts = await getAllPosts()
  const categories = new Set()
  
  allPosts.forEach(post => {
    post.tags?.forEach(tag => categories.add(tag.toLowerCase()))
  })
  
  return Array.from(categories).map(category => ({
    category
  }))
}

export async function generateMetadata({ params }) {
  return {
    title: `${params.category}相关文章`,
    description: `关于${params.category}的技术文章合集`
  }
}

export default async function CategoryPage({ params }) {
  const allPosts = await getAllPosts()
  const filteredPosts = allPosts.filter(post => 
    post.tags?.map(t => t.toLowerCase()).includes(params.category.toLowerCase())
  )
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">分类: {params.category}</h1>
      <div className="grid md:grid-cols-2 gap-8">
        {filteredPosts.map(post => (
          <ArticleCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  )
}