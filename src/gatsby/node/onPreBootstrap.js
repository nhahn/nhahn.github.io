const fs = require("fs")

module.exports = ({ reporter }, options) => {
  let contentPath = options.contentPath || "content/"

  if (!contentPath.endsWith("/")) {
    contentPath += "/"
  }

  if (fs.existsSync(contentPath)) {
    reporter.info(`copying publications to static directory`)

    const filesToCopy = ["publications"]
    filesToCopy.forEach(file =>
      fs.cpSync(
        `${contentPath}${file}`,
        `static/${file}`
      , {recursive: true})
    )
  }
  
}
