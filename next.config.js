const urlPrefix = process.env.GITHUB_ACTIONS ? '/github.io' : ''

module.exports = {
  // ...
  assetPrefix: urlPrefix,
  basePath: urlPrefix,
  trailingSlash: true,
  publicRuntimeConfig: { urlPrefix },
  experimental: {
    optimizeFonts: true,
  },
  images: {
    domains: ['s3.us-west-2.amazonaws.com'],
  },
}
