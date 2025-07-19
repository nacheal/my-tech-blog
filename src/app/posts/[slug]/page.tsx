import type { Metadata } from 'next'

type Props = {
  params: { slug: string }
}

export default function Page({ params }: Props) {
  return <h1>Post: {params.slug}</h1>
}

// 静态生成（可选）
export function generateStaticParams() {
  return [{ slug: 'post1' }, { slug: 'post2' }]
}

// 动态元数据（可选）
export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  return { title: `Post ${params.slug}` }
}