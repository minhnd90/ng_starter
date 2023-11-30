import Link from 'next/link'
import type { ReactElement } from 'react'
import { useBlogContext } from './blog-context'
import ThemeSwitch from './theme-switch'
import { collectPostsAndNavs } from './utils/collect'

export default function Nav(): ReactElement {
  const { opts, config } = useBlogContext()
  const { navPages } = collectPostsAndNavs({ opts, config })

  return (
    <div className="nav-bar">
      <div className="nav-items">
        {navPages.map(page => {
          const name = page.frontMatter?.title || page.name
          return page.active
            ? <span key={page.route} className="active">{name}</span>
            : <Link key={page.route} href={page.route}>{name}</Link>
        })}
        {config.navs?.map(nav => <Link key={nav.url} href={nav.url}>{nav.name}</Link>)}
      </div>
      {config.darkMode && <ThemeSwitch />}
    </div>
  )
}
