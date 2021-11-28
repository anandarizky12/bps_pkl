module.exports = {
  reactStrictMode: true,
}
module.exports = {
  async rewrites() {
    return [
      {
        // type: LOAD_ARTICLES,
        source: '/api/:slug*',
        destination: 'http://localhost:5000/api/:slug*' // Proxy to Backend
      }
    ]
  }
}
