const path = require('path')
const withNextra = require('nextra')('nextra-theme-blog', './theme.config.jsx')
module.exports = withNextra({
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
})
