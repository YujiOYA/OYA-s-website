const urlPrefix = process.env.GITHUB_ACTIONS ? '/' + pf : ''

module.exports = {
  assetPrefix: urlPrefix,
  basePath: urlPrefix,
  trailingSlash: true,
  publicRuntimeConfig: { urlPrefix },  // ★コレ
}