const urlPrefix = process.env.URL_PREFIX ? '/pr' : ''

module.exports = {
  // ...
  assetPrefix: urlPrefix,
  basePath: urlPrefix,
  trailingSlash: true,
  publicRuntimeConfig: { urlPrefix }, 
};