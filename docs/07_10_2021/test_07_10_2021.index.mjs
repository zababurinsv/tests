let data = {}
describe('Задание', async function () {
    this.timeout(10000);
    before(async function () { });
    describe('Форма №1', async function () {
        it('Получить данные из файла data.json', function () {
            return new Promise(async (resolve, reject) => {
                events.send('/get_data', { }, (event) => {
                    data = event.data
                })
                resolve(false)
            })
        })
        it('вывести данные на страницу', function () {
            return new Promise(async (resolve, reject) => {
                events.send('/send_data', {data: data}, (event) => {
                    console.log('data on the page', event)
                })
                resolve(false)
            })
        })
        it('обработчики для добавления выбранного товара в корзину', function () {
            return new Promise(async (resolve, reject) => {
                events.send('/set_listener', {data: data}, (event) => {
                    console.log('listener on the page', event)
                })
                resolve(false)
            })
        })
        it('читать исходный файл каждые 15 сек и одновременно менять курс доллара (вручную) на значение от 20 до 80', function () {
            return new Promise(async (resolve, reject) => {
                events.send('/set_timeout', {data: data}, (event) => {
                    console.log('set_timeout on the page', event)
                })
                resolve(false)
            })
        })
        it('цена увеличилось или уменьшилась подтсветить красным или зелёным', function () {
            return new Promise(async (resolve, reject) => {
                events.send('/up_down_price', {data: data}, (event) => {
                    console.log(event)
                })
                resolve(false)
            })
        })
    })
    describe('Корзина', async function () {
        it('рассчет общей суммы', function () {
            return new Promise(async (resolve, reject) => {
                events.send('/calculate_sum', {data: data}, (event) => {
                    console.log(event)
                })
                resolve(false)
            })
        })
        it('обновление цены товара', function () {
            return new Promise(async (resolve, reject) => {
                events.send('/update_price', {data: data}, (event) => {
                    console.log(event)
                })
                resolve(false)
            })
        })
    })
})