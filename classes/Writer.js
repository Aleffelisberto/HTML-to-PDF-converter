const fs = require('fs')

class Writer {
    write(htmlTable, filename) {
        try {
            fs.writeFileSync(filename, htmlTable)
        } catch(e) {
            console.log(e)
        }
    }
}

module.exports = Writer