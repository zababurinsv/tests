import emoji from '/static/html/components/component_modules/emoji/emoji.mjs';
import task from '/static/html/components/component_modules/heap/index.mjs'

describe('task manager', async function () {
  this.timeout(10000);
  before(async function () {
    console.log('emoji', emoji('all'))
  });
  describe('case №1', async function () {
    it('# set task before', function () {
      return new Promise(async (resolve, reject) => {
        let response = {}
        let request = [];
        [2, 5, 3, 9].forEach((element, index, array)=>{
          request.push(task.set(true, `get test ${index}`, '5', {
            test:element
          },'/test-heap'));
        });
        await task.get(true, 'await', '5', '','/test-heap', async (object)=>{
          object.callback({status:true})
        })
        resolve()
      })
    })
    it('# set task after', function () {
      return new Promise(async (resolve, reject) => {
        let response = {}
        let request = [];
        [2, 5, 3, 9].forEach((element, index, array)=>{
          request.push(task.set(true, `get test ${index}`, '5', {
            test:element
          },'/test-heap'));
        });
        response = await Promise.all(request);
        (response)
        ? resolve()
        : reject()
      })
    })
  })
})