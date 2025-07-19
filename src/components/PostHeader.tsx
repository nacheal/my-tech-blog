import Link from 'next/link'
import { formatDate } from '@/lib/utils'

interface PostHeaderProps {
  title: string
  date: string
  tags: string[]
  readingTime?: string
}

export default function PostHeader({ title, date, tags, readingTime }: PostHeaderProps) {
  return (
    <header className="mb-8">
      <h1 className="text-3xl md:text-4xl font-bold mb-2">{title}</h1>
      
      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
        <time dateTime={date}>{formatDate(date)}</time>
        {readingTime && <span>· {readingTime}</span>}
      </div>
      
      {tags?.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {tags.map(tag => (
            <Link 
              key={tag} 
              href={`/tags/${tag}`}
              className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-sm"
            >
              #{tag}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}