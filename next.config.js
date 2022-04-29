const urlPrefix = process.env.GITHUB_ACTIONS ? '/pr' : ''

module.exports = {
  // ...
  assetPrefix: urlPrefix,
  basePath: urlPrefix,
  trailingSlash: true,
  publicRuntimeConfig: { urlPrefix }, 
};