const fs = require('node:fs')
const path = require('node:path')

module.exports = function (options) {
  const album = options.data.root.album
  if (album.home) return ''

  const albumFile = album.url || album.path || ''
  const albumDir = path.dirname(albumFile).replace(/^\.$/, '')

  const descPath = path.join(process.cwd(), 'gallery', albumDir, 'description.md')
  try {
    const content = fs.readFileSync(descPath, 'utf-8').trim()
    return content
  } catch (e) {
    return ''
  }
}
