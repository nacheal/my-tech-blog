import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gray-800 hover:text-gray-600">
          Michael&apos;s Tech Blog
        </Link>
        
        <nav className="hidden md:flex space-x-8">
          <Link href="/" className="text-gray-600 hover:text-gray-900">首页</Link>
          {/* <Link href="/series" className="text-gray-600 hover:text-gray-900">系列文章</Link>
          <Link href="/tags" className="text-gray-600 hover:text-gray-900">标签</Link> */}
          <Link href="/about" className="text-gray-600 hover:text-gray-900">关于</Link>
        </nav>
        
        <div className="md:hidden">
          {/* 移动端菜单按钮 */}
          <button className="text-gray-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}