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
        source: '/blog/$1',
        destination: `${BLOG_URL}/$1`,
      }
    ]
  },
}
