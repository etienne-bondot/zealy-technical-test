/**
 * Injected by webpack's DefinePlugin, check the plugins section in `webpack/webpack.prod.js` and `webpack/webpack.dev.js` files
 */
export const isProduction = (): boolean => {
  return process.env.REACT_APP_ENV_NAME === 'prod'
}
