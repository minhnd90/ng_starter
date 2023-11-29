const path = require('path')
const withNextra = require('nextra')({
  theme: './theme/index.tsx',
  themeConfig: './theme.config.tsx'
})
module.exports = withNextra({
  output: 'export',
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    unoptimized: true,
  },
})
