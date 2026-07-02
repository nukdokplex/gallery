const fs = require('node:fs')
const path = require('node:path')

module.exports = function (options) {
  const album = options.data.root.album
  if (album.home) return ''

  const descPath = path.join(process.cwd(), 'gallery', album.title, 'description.md')
  try {
    return fs.readFileSync(descPath, 'utf-8').trim()
  } catch (e) {
    return ''
  }
}
