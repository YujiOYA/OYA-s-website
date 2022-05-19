const urlPrefix = process.env.GITHUB_ACTIONS ? "/github.io" : "";

module.exports = {
  // ...
  assetPrefix: urlPrefix,
  basePath: urlPrefix,
  trailingSlash: true,
  publicRuntimeConfig: { urlPrefix },
};
