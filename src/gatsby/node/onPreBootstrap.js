const fs = require("fs")

module.exports = ({ reporter }, options) => {
  let contentPath = options.contentPath || "content/"

  if (!contentPath.endsWith("/")) {
    contentPath += "/"
  }

  if (!fs.existsSync(contentPath)) {
    reporter.info(`creating the ${contentPath} directory with sample data`)
    fs.mkdirSync(contentPath)
    fs.mkdirSync(`${contentPath}images`)
    fs.mkdirSync(`${contentPath}publications`)

    const filesToCopy = [
      "profile.yaml",
      "projects.yaml",
      "education.yaml",
      "publications.yaml",
      "social.yaml",
      "work-history.yaml",
      "images/*",
      "publications/*",
    ]

    filesToCopy.forEach(file =>
      fs.copyFileSync(
        `${__dirname}/../../../content/${file}`,
        `${contentPath}${file}`
      )
    )
  }
}
