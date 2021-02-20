const { BLOG_URL } = process.env

module.exports = {
  basePath: '/',
  rewrites() {
    return [
      {
        source: '/*',
        destination: `${BLOG_URL}/*`,
      }
    ]
  },
}
