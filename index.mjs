import emoji from '/static/html/components/component_modules/emoji/emoji.mjs';
import task from '/static/html/components/component_modules/heap/index.mjs'

describe('task manager', async function () {
  this.timeout(10000);
  before(async function () {
    console.log('emoji', emoji('all'))
  });
  it('# set task before', function () {
    return new Promise(async (resolve, reject) => {
      task.get(true, 'await', '5', '','/test-heap', async (object)=>{
        object.callback({status:true})
      })
      resolve()
    })
  })
  it('# set task after', function () {
    return new Promise(async (resolve, reject) => {
      let response = await task.set(true, 'get test', '5', {
        test:"ok"
      },'/test-heap');
      (response.status)
      ? resolve()
      : reject()
    })
  })
})