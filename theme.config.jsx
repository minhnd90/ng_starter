const YEAR = new Date().getFullYear()

const themeConfig = {
  footer: (
    <small style={{ display: 'block', marginTop: '8rem' }}>
      <time>{YEAR}</time> © MinhND.
      <a href="/feed.xml">RSS</a>
      <style jsx>{`
        a {
          float: right;
        }
        @media screen and (max-width: 480px) {
          article {
            padding-top: 2rem;
            padding-bottom: 4rem;
          }
        }
      `}</style>
    </small>
  ),
  navs: [
    {
      url: '/test',
      name: 'Test'
    }
  ]
}

export default themeConfig
