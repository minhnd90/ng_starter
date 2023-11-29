import Link from 'next/link';
import { MdxFile, PageMapItem } from 'nextra/types';

export default function TopMenu({ route, pageMap }: {
  route: string;
  pageMap: PageMapItem[]
}) {
  const menuItems = (pageMap
    .filter(item => (item.kind !== 'Meta'))
    .map(item => item.kind === 'Folder'
      ? item.children.find(item => item.kind === 'MdxPage' && item.name === 'index')
      : item) as MdxFile[])
    .sort((a, b) => a.frontMatter?.order - b.frontMatter?.order)

  return (
    <>
      {menuItems.map((item) =>
        item ? <Link
          key={item.route}
          className={route === item.route ? 'active' : ''}
          href={item.route}>
          {item.frontMatter?.title}
        </Link> : '')
      }
    </>
  )
}
