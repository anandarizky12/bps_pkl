module.exports = {
  reactStrictMode: true,
}
module.exports = {
  async rewrites() {
    return [
      {
        // type: LOAD_ARTICLES,
        source: '/api/:slug*',
        destination: 'https://pooling-api.herokuapp.com/api/:slug*' // Proxy to Backend
      }
    ]
  }
}
