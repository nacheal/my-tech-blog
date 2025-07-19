export default function PostFooter() {
  return (
    <footer className="mt-12 pt-8 border-t">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="font-semibold mb-2">觉得文章有帮助？</h3>
          <p className="text-sm text-gray-600">
            欢迎在评论区留言或通过社交媒体分享
          </p>
        </div>
        <div className="flex space-x-4">
          {/* 社交媒体分享按钮 */}
          <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
            <span className="sr-only">Twitter</span>
            {/* 这里放Twitter图标 */}
          </button>
          <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
            <span className="sr-only">LinkedIn</span>
            {/* 这里放LinkedIn图标 */}
          </button>
        </div>
      </div>
    </footer>
  )
}