import Link from 'next/link'
import { useRouter } from 'next/router'
import type { ReactElement, ReactNode } from 'react'
import { BasicLayout } from './basic-layout'
import { useBlogContext } from './blog-context'
import { MDXTheme } from './mdx-theme'
import { collectPostsAndNavs } from './utils/collect'
import getTags from './utils/get-tags'

export function PostsLayout({ children }: { children: ReactNode }): ReactElement {
  const { config, opts } = useBlogContext()
  const { posts } = collectPostsAndNavs({ config, opts })
  const router = useRouter()
  const { type } = opts.frontMatter
  const tagName = type === 'tag' ? router.query.tag : null

  const postList = posts.map(post => {
    if (tagName) {
      const tags = getTags(post)
      if (!Array.isArray(tagName) && !tags.includes(tagName)) {
        return null
      }
    } else if (type === 'tag') {
      return null
    }

    const postTitle = post.frontMatter?.title || post.name
    const date: Date | null = post.frontMatter?.date ? new Date(post.frontMatter.date) : null
    const description = post.frontMatter?.description

    return (
      <div key={post.route} className="post-item">
        <h3>
          <Link href={post.route}>{postTitle}</Link>
        </h3>
        {description && (
          <p className="post-description">
            {description}
            {config.readMore && (
              <Link href={post.route} passHref legacyBehavior>
                <a className="post-item-more">{config.readMore}</a>
              </Link>
            )}
          </p>
        )}
        {date && <time className="time" dateTime={date.toISOString()}>{date.toDateString()}</time>}
      </div>
    )
  })
  return (
    <BasicLayout>
      <MDXTheme>
        <div className="posts">{children}</div>
      </MDXTheme>
      {postList}
    </BasicLayout>
  )
}
