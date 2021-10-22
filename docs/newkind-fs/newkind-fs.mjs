let data = {}
describe('FS', async function () {
    this.timeout(10000);
    before(async function () { });
    describe('IDBFS', async function () {
        it('Save File', function () {
            return new Promise(async (resolve, reject) => {
                events.send('/fs__save_file', { }, (event) => {
                    data = event.data
                })
                resolve(false)
            })
        })
        it('Remove File', function () {
            return new Promise(async (resolve, reject) => {
                events.send('/fs__remove_file', { }, (event) => {
                    console.log('data on the page', event)
                })
                resolve(false)
            })
        })
        it('Rename File', function () {
            return new Promise(async (resolve, reject) => {
                events.send('/fs__rename_file', { }, (event) => {
                    console.log('data on the page', event)
                })
                resolve(false)
            })
        })
        it('Load FS', function () {
            return new Promise(async (resolve, reject) => {
                events.send('/fs__load_file', { }, (event) => {
                    console.log('data on the page', event)
                })
                resolve(false)
            })
        })
        it('Save FS', function () {
            return new Promise(async (resolve, reject) => {
                events.send('/fs__save_file', { }, (event) => {
                    console.log('data on the page', event)
                })
                resolve(false)
            })
        })
        it('cwd', function () {
            return new Promise(async (resolve, reject) => {
                events.send('/fs__cwd', { }, (event) => {
                    console.log('data on the page', event)
                })
                resolve(false)
            })
        })
        it('create data', function () {
            return new Promise(async (resolve, reject) => {
                events.send('/fs__create_data', { }, (event) => {
                    console.log('data on the page', event)
                })
                resolve(false)
            })
        })
    })
    describe('WORKERFS', async function () {
        it('mount fs', function () {
            return new Promise(async (resolve, reject) => {
                events.send('/fs__mount', { }, (event) => {
                    console.log('data on the page', event)
                })
                resolve(false)
            })
        })
        it('upload file', function () {
            return new Promise(async (resolve, reject) => {
                events.send('/fs__upload_file', { }, (event) => {
                    console.log('data on the page', event)
                })
                resolve(false)
            })
        })
    })
})