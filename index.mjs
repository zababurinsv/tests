import emoji from '/static/html/components/component_modules/emoji/emoji.mjs';
import events from '/static/html/components/component_modules/CustomEvent/index.mjs'


describe('develop tests', async function () {
  this.timeout(10000);

  before(async function () {
    console.log('emoji', emoji('all'))
  });

  it('# получить что то ', function () {
    return new Promise(async (resolve, reject) => {
      resolve(false)
    })
  })

  it('# получить что то ', function () {
    return new Promise(async (resolve, reject) => {
      resolve(false)
    })
  })
})