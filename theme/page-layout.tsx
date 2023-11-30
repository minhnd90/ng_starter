import type { ReactNode } from 'react'
import { BasicLayout } from './basic-layout'
import { MDXTheme } from './mdx-theme'

export const PageLayout = ({ children }: { children: ReactNode }) => {
  return (
    <BasicLayout>
      <MDXTheme>
        <div className="page">{children}</div>
      </MDXTheme>
    </BasicLayout>
  )
}
