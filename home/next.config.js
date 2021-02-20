const { BLOG_URL } = process.env

module.exports = {
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
