import fs from 'fs/promises'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'posts')

export async function getAllPosts() {
  const fileNames = await fs.readdir(postsDirectory)
  
  const posts = await Promise.all(
    fileNames.map(async fileName => {
      const slug = fileName.replace(/\.md$/, '')
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = await fs.readFile(fullPath, 'utf8')
      const { data, content } = matter(fileContents)
      const { featured, tags } = data
      
      return {
        slug,
        ...data,
        excerpt: content.substring(0, 150) + '...',
        content,
        featured,
        tags
      }
    })
  )
  
  return posts.sort((a, b) => new Date(b.date) - new Date(a.date))
}