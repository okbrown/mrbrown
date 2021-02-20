const { BLOG_URL } = process.env

module.exports = {
  basePath: '/',
  rewrites() {
    return [
      {
        source: '/blog',
        destination: `${BLOG_URL}`,
      },
      {
        source: '/blog/*',
        destination: `${BLOG_URL}/*`,
      }
    ]
  },
}
