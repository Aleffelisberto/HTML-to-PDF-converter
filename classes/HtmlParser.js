const ejs = require('ejs')

class HtmlParser {
    static async parse(table) {
        try {
            const ejsTableFile = await ejs.renderFile('./table.ejs', {
                tableHeader: table.header,
                tableBody: table.rows
            })
            
            return ejsTableFile
        } catch(e) {
            console.log(e)
            return undefined
        }
    }
}

module.exports = HtmlParser