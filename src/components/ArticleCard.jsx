import Link from 'next/link'

export default function ArticleCard({ post }) {
  return (
    <div className="border rounded-lg overflow-hidden hover:shadow-lg transition">
      <Link href={`/posts/${post.slug}`}>
        <div className="h-48 bg-gray-200 flex items-center justify-center">
          {post?.metadata?.image ? (
            <img 
              src={post.metadata.image} 
              alt={post.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="text-gray-500">暂无图片</span>
          )}
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-lg mb-2">{post.title}</h3>
          <p className="text-gray-600 text-sm mb-3">{post.excerpt}</p>
          <div className="flex flex-wrap gap-2">
            {post.tags?.map(tag => (
              <span key={tag} className="text-xs bg-gray-100 px-2 py-1 rounded">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </div>
  )
}