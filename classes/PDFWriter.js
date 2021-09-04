const html_pdf = require('html-pdf')

class PDFWriter {
    static writePDF(filename, htmlFile) {
        html_pdf.create(htmlFile, {}).toFile(filename, () => {})
    }
}

module.exports = PDFWriter