import emoji from '/static/html/components/component_modules/emoji/emoji.mjs';
import events from '/static/html/components/component_modules/CustomEvent/index.mjs'

describe('task manager', async function () {
  this.timeout(10000);
  before(async function () {
    console.log('emoji', emoji('all'))
  });
  it('# set task before', function () {
    return new Promise(async (resolve, reject) => {
      resolve(false)
    })
  })
  it('# set task after', function () {
    return new Promise(async (resolve, reject) => {
      resolve(false)
    })
  })
})