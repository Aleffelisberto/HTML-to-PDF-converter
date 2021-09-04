class Table {
    constructor(data) {
        this.header = data[0]
        this.rows = data.slice(1)
    }

    //getters
    get countRows() {
        return this.rows.length
    }

    get countColumns() {
        return this.header.length
    }
}

module.exports = Table