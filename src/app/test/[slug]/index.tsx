export default function BlogPost({ params }) {
  return (
    <div>
      <h1>Blog Post: {params.slug}</h1>
      <p>This is the content for blog post with slug: {params.slug}</p>
    </div>
  )
}

// 可选：生成静态参数
export async function generateStaticParams() {
  const posts = await fetch('https://api.example.com/posts').then(res => res.json())
  
  return posts.map(post => ({
    slug: post.slug
  }))
}