const { Transform } = require('stream')

class Filter extends Transform {

    constructor() {
        super({
            readableObjectMode: true,
            writableObjectMode: true
        })
    }

    _transform(chunk, encoding, next) {
        if (this.has(chunk.name)) {
            return next(null, chunk)
        }
        console.log('##########2##########')
        next()
    }

    has(value) {
        return !!value
    }
}

module.exports = Filter