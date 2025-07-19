import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">关于博客</h3>
            <p className="text-gray-600">
              专注分享前端开发技术，记录学习过程中的思考和解决方案。
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">快速链接</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 hover:text-gray-900">首页</Link>
              </li>
              <li>
                <Link href="/series" className="text-gray-600 hover:text-gray-900">系列文章</Link>
              </li>
              <li>
                <Link href="/tags" className="text-gray-600 hover:text-gray-900">标签</Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-gray-900">关于我</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">联系我</h3>
            <ul className="space-y-2">
              <li><a href="mailto:your@email.com" className="text-gray-600 hover:text-gray-900">Email</a></li>
              <li><a href="https://github.com/yourusername" className="text-gray-600 hover:text-gray-900">GitHub</a></li>
              <li><a href="https://twitter.com/yourusername" className="text-gray-600 hover:text-gray-900">Twitter</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t text-center text-gray-500">
          <p>© {new Date().getFullYear()} Michael&apos;s Tech Blog. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}