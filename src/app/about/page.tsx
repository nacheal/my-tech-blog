import Layout from '@/components/Layout'

export default function AboutPage() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <header className="mb-12 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">关于我</h1>
            <p className="text-xl text-gray-600">
              技术爱好者 & 前端开发工程师
            </p>
          </header>

          <div className="prose lg:prose-xl mx-auto">
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">个人简介</h2>
              <div className="flex flex-col md:flex-row gap-8 items-center mb-6">
                <div className="w-32 h-32 rounded-full bg-gray-200 overflow-hidden">
                  {/* 替换为您的头像 */}
                  <div className="w-full h-full bg-gray-300"></div>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Michael</h3>
                  <p className="text-gray-600">
                    前端开发工程师 | React专家 | TypeScript爱好者
                  </p>
                </div>
              </div>
              <p className="mb-4">
                我是一名专注于前端开发的技术博主，有5年以上的Web开发经验，热爱分享技术知识和实践经验。
              </p>
              <p>
                在这个博客中，我会记录学习过程中的思考、解决实际问题的方案，以及各种技术探索。
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">技术栈</h2>
              <div className="flex flex-wrap gap-3">
                {['React', 'TypeScript', 'Next.js', 'Node.js', 'GraphQL', 'TailwindCSS'].map(tech => (
                  <span 
                    key={tech}
                    className="px-4 py-2 bg-gray-100 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">联系我</h2>
              <ul className="space-y-2">
                <li>
                  <a href="mailto:your@email.com" className="text-blue-600 hover:underline">
                    Email: your@email.com
                  </a>
                </li>
                <li>
                  <a href="https://github.com/yourusername" className="text-blue-600 hover:underline">
                    GitHub: @yourusername
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/yourusername" className="text-blue-600 hover:underline">
                    Twitter: @yourusername
                  </a>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  )
}