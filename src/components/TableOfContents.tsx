import { useEffect, useState } from 'react'

export default function TableOfContents({ content }: { content: string }) {
  const [headings, setHeadings] = useState<{ id: string; text: string; level: number }[]>([])

  useEffect(() => {
    const parser = new DOMParser()
    const doc = parser.parseFromString(content, 'text/html')
    const headingElements = Array.from(doc.querySelectorAll('h2, h3'))
    
    const extractedHeadings = headingElements.map((heading) => ({
      id: heading.id,
      text: heading.textContent || '',
      level: parseInt(heading.tagName.substring(1))
    }))
    
    setHeadings(extractedHeadings)
  }, [content])

  if (headings.length === 0) return null

  return (
    <div className="hidden lg:block">
      <h3 className="text-sm font-semibold text-gray-900 mb-4">目录</h3>
      <ul className="space-y-2 text-sm text-gray-600 border-l border-gray-200 pl-4">
        {headings.map((heading) => (
          <li 
            key={heading.id}
            className={heading.level === 3 ? 'pl-4' : ''}
          >
            <a 
              href={`#${heading.id}`}
              className="hover:text-gray-900"
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}