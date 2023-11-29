import type { NextraThemeLayoutProps } from 'nextra/types'
import HeadTag from './components/headTag'
import TopMenu from './components/topMenu'

export default function Layout({ children, pageOpts, pageProps, themeConfig }: NextraThemeLayoutProps) {
  const { route, frontMatter, pageMap } = pageOpts

  return (
    <>
      <HeadTag frontMatter={frontMatter} />
      <TopMenu route={route} pageMap={pageMap} />
      <div>{children}</div>
    </>
  )
}
