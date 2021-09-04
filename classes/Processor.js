class Processor {
    static process(data) {
        let lines = data.split(/\r\n|\r|\n/g)
        let rows = lines.map(line => line.split(','))

        return rows
    }
}

module.exports = Processor