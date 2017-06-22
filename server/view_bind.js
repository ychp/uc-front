const viewBinddings = (dirname) => {
  const yamlParser = require('js-yaml')
  const fs = require('mz/fs')

  try {
    const content = fs.readFileSync(`${dirname}/view_bind.yml`, 'utf8')
    var doc = yamlParser.safeLoad(content)
    console.log(doc)
    return doc
  } catch (e) {
    console.log(e)
  }
}

module.exports = viewBinddings