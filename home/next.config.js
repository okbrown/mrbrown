const { BLOG_URL } = process.env

module.exports = {
  basePath: '/',
  rewrites() {
    return [
      {
        source: '/',
        destination: `${BLOG_URL}/`,
      },
      {
        source: '/:path*',
        destination: `${BLOG_URL}/:path*`,
      },
    ]
  },
}
