
module.exports = async function getVersion() {
  return new Promise((resolve, reject) => {
    try {
      require('child_process').exec('git rev-list HEAD --format=%s', function (err, stdout) {
        const startVersion = '1.0.0'
        const segments = startVersion.split('.')
        const majorRegex = /.+!:.+'/gi
        const minorRegex = /feat!?:.+/gi
        const patchRegex = /fix!?:.+/gi

        const version = {
          major: segments[0],
          minor: segments[1],
          patch: segments[2]
        }

        const commits = stdout.split('\n').filter(i => i.indexOf('commit') === -1)
        commits.forEach(c => {
          if (majorRegex.test(c)) {
            version.major++
          }
          if (minorRegex.test(c)) {
            version.minor++
          }
          if (patchRegex.test(c)) {
            version.patch++
          }
        })

        if (err) {
          reject(err)
        }

        resolve(`${version.major}.${version.minor}.${version.patch}`)

      })
    }
    catch (err) {
      reject(err)
    }
  })
}
