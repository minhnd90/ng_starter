import Head from 'next/head'
import { FrontMatter } from 'nextra/types'

export default function HeadTag({ frontMatter }: { frontMatter: FrontMatter }) {
  const meta = {
    title: frontMatter.title || 'Next.js Blog Starter Kit',
    description: frontMatter.description || 'Clone and deploy your own Next.js portfolio in minutes.',
    image: frontMatter.image || '/images/default-social-image.png',
    tag: frontMatter.tag || 'Next.js, React, TypeScript, Portfolio, Blog',
    author: frontMatter.author || 'MinhND',
  }
  return (
    <Head>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <meta property="og:site_name" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:image" content={meta.image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@yourname" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={meta.image} />
      <meta name="keywords" content={meta.tag} />
      <meta name="author" content={meta.author} />
    </Head>
  )
}
