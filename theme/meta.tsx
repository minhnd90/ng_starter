import Link from 'next/link'
import type { ReactElement } from 'react'
import { useBlogContext } from './blog-context'
import { split } from './utils/get-tags'

export default function Meta(): ReactElement {
  const { opts, config } = useBlogContext()
  const { author, date, tag } = opts.frontMatter
  const tags = tag ? split(tag) : []

  const tagsEl = tags.map(t => (
    <Link key={t} href="/tags/[tag]" as={`/tags/${t}`} passHref legacyBehavior>
      <a className="">{t}</a>
    </Link>
  ))

  const dateObj = date ? new Date(date) : null
  return (
    <div className="meta-wrapper">
      <div className="meta">
        {author}
        {author && date && ','}
        {dateObj && (
          <time dateTime={dateObj.toISOString()}>
            {config.dateFormatter?.(dateObj) || dateObj.toDateString()}
          </time>
        )}
        {(author || date) && (tags.length > 0) && <span className="nx-px-1">•</span>}
        {tagsEl}
      </div>
      <div className="tags">{tagsEl}</div>
    </div>
  )
}
