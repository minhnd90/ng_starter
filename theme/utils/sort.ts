import type { MdxFile } from 'nextra/types'

export const sortDate = (a: MdxFile, b: MdxFile): number => {
  if (!a.frontMatter?.date || !b.frontMatter?.date) return -1

  return (
    new Date(b.frontMatter.date).getTime() -
    new Date(a.frontMatter.date).getTime()
  )
}

export const sortOrder = (a: MdxFile, b: MdxFile): number => {
  if (!a.frontMatter?.order || !b.frontMatter?.order) return -1
  return a.frontMatter.order - b.frontMatter.order
}
