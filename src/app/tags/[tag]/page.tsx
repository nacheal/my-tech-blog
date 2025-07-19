// pages/blog/[slug].tsx

import type { Metadata } from "next"

interface Props {
  params: Promise<{ slug?: string }>; // Updated to be a Promise
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params; // Await the params object
  // ... rest of your generateMetadata logic
  return {
    title: `Blog Post: ${slug}`
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params; // Await the params object
  return (
    <div>
      <h1>Blog Post: {slug}</h1>
    </div>
  );
}
