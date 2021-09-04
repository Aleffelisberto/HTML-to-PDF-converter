const fs = require('fs')

class Reader {
    read(filepath) {
        try {
            const content = fs.readFileSync(filepath, "utf-8")
            return content
        } catch(e) {
            console.log(e)
            return undefined
        }
    }
}

module.exports = Reader