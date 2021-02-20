const { BLOG_URL } = process.env

module.exports = {
  rewrites(a, b, c, d) {

    console.log('param a: ', a)
    console.log('param b: ', b)
    console.log('param c: ', c)
    console.log('param d: ', d)

    return [
      {
        source: '/blog',
        destination: `${BLOG_URL}/`,
      },
      {
        source: '/blog/:path*',
        destination: `${BLOG_URL}/:path*`,
      },
    ]
  },
}
