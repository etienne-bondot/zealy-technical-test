const path = require('path')

const baseDir = path.resolve('.')

const srcDir = path.join(baseDir, 'src')
const assetsDir = path.join(baseDir, 'src', 'assets')
const outputDir = path.join(baseDir, 'build')
const publicDir = path.join(baseDir, 'public')

module.exports = {
  assetsDir,
  baseDir,
  outputDir,
  publicDir,
  srcDir,
}
