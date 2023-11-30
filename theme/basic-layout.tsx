import type { ReactNode } from 'react'
import { useRef } from 'react'
import { useBlogContext } from './blog-context'
import { HeadingContext } from './mdx-theme'
import HeadTag from '@/components/headTag'
import Nav from './nav'

export const BasicLayout = ({ children }: { children: ReactNode }) => {
  const { config, opts } = useBlogContext()
  const ref = useRef<HTMLHeadingElement>(null)
  return (
    <>
      <HeadTag frontMatter={opts.frontMatter} />
      <Nav />
      <HeadingContext.Provider value={ref}>
        {children}
        {config.footer}
      </HeadingContext.Provider>
    </>
  )
}
