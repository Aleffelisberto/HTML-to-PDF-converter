const Reader = require('./classes/Reader')
const Processor = require('./classes/Processor')
const Table = require('./classes/Table')
const HtmlParser = require('./classes/HtmlParser')
const Writer = require('./classes/Writer')
const PDFWriter = require('./classes/PDFWriter')

main = async () => {
    const reader = new Reader()

    // Read data from the sheets
    const data = reader.read('./file.csv')

    // Format data to write on tables
    const processedData = Processor.process(data)

    // Create a table with the processed data
    const users = new Table(processedData)

    // Get a ejs file with the table data
    const ejsTableFile = await HtmlParser.parse(users)

    // Generate a HTML file with the table
    const writer = new Writer()
    writer.write(ejsTableFile, Date.now() + '.html')

    PDFWriter.writePDF(Date.now() + '.pdf', ejsTableFile)
}

main()