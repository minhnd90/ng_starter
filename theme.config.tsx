import Footer from './components/footer'
import type { NextraBlogTheme } from './theme'

const themeConfig: NextraBlogTheme = {
  footer: <Footer />,
  head: ({ title, meta }) => (
    <>
      {meta.tag && <meta name="keywords" content={meta.tag} />}
      {meta.author && <meta name="author" content={meta.author} />}
    </>
  ),
}

export default themeConfig
