import { ThemeProvider } from 'next-themes'
import type { NextraThemeLayoutProps } from 'nextra/types'
import type { ReactElement, ReactNode } from 'react'
import { ArticleLayout } from './article-layout'
import { BlogProvider } from './blog-context'
import { PageLayout } from './page-layout'
import { PostsLayout } from './posts-layout'
import type { LayoutProps } from './types'

const layoutMap = {
  post: ArticleLayout,
  page: PageLayout,
  posts: PostsLayout,
  tag: PostsLayout
}

const BlogLayout = ({ config, children, opts }: LayoutProps & { children: ReactNode }): ReactElement => {
  const type = opts.frontMatter.type || 'post'
  const Layout = layoutMap[type]
  if (!Layout) {
    throw new Error(`nextra-theme-blog does not support the layout type "${type}" It only supports "post", "page", "posts" and "tag"`)
  }
  return (
    <BlogProvider opts={opts} config={config}>
      <Layout>{children}</Layout>
    </BlogProvider>
  )
}

export default function Layout({ children, ...context }: NextraThemeLayoutProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <BlogLayout config={context.themeConfig} opts={context.pageOpts}>
        {children}
      </BlogLayout>
    </ThemeProvider>
  )
}

export { useTheme } from 'next-themes'
export { useBlogContext } from './blog-context'
export { getStaticTags } from './utils/get-tags'
export * from './types'
