const fs = require('fs')
const path = require('path')
const baseDataPath = '../static/Data'

let tailwindDirectives = []

const getAllFiles = (dirPath, arrayOfFiles) => {
  let files = fs.readdirSync(dirPath)
  arrayOfFiles = arrayOfFiles || []
  files.forEach((file) => {
    if (fs.statSync(`${dirPath}/${file}`).isDirectory()) {
      getAllFiles(`${dirPath}/${file}`, arrayOfFiles)
    } else {
      arrayOfFiles.push(path.join(__dirname, dirPath, '/', file))
    }
  })
  return arrayOfFiles
}

try {
  const allJsonFilePaths = getAllFiles(baseDataPath)

  allJsonFilePaths.forEach((path) => {
    let fileData = fs.readFileSync(path)
    let jsonData = JSON.parse(fileData)
    let stringResult = JSON.stringify(jsonData)
    tailwindDirectives.push(stringResult.match(/[^<>"'`\\s]*[^<>"'`\\s:]/g))
  })
  console.log(tailwindDirectives)
} catch
  (e) {
  console.log(e)
}

exports.getTailwindDirectivesFromData = () => {

}
