import emoji from '/static/html/components/component_modules/emoji/emoji.mjs';
import task from '/static/html/components/component_modules/heap/index.mjs'
import isEmpty from '/static/html/components/component_modules/isEmpty/isEmpty.mjs'

describe('task manager', async function () {
  this.timeout(10000);
  before(async function () {
    console.log('emoji', emoji('moon'))
  });
  describe('case №1', async function () {
    it('# set task before', function () {
      return new Promise(async (resolve, reject) => {
       let res = await task.get(true, 'await', '5', '','/test-heap', async (object)=>{
          object.callback({status:true})
        })
        console.log('response №1', res)
        resolve(res)
      })
    })
    it('# set task after', function () {
      return new Promise(async (resolve, reject) => {
        let request = [];
        [2, 5, 3, 9].forEach((element, index, array)=>{
          request.push(task.set(true, `get test ${index}`, '5', {
            test:element
          },'/test-heap'));
        });
       let response = await Promise.all(request); 
       (!isEmpty(response))
        ? resolve()
        : reject()
      })
    })
  })
  describe('case №2', async function () {
    it('# set task before', function () {
      return new Promise(async (resolve, reject) => {
        // let response = {}
        // let request = [];
        // [2, 5, 3, 9].forEach((element, index, array)=>{
          // request.push(task.set(true, `get test ${index}`, '5', {
            // test:element
          // },'/test-heap'));
        // });
        // await task.get(true, 'await', '5', '','/test-heap', async (object)=>{
          // object.callback({status:true})
        // })
        resolve()
      })
    })
    it('# set task after', function () {
      return new Promise(async (resolve, reject) => {
        // let response = {}
        // // let request = [];
        // // [2, 5, 3, 9].forEach((element, index, array)=>{
        //   // request.push(task.set(true, `get test ${index}`, '5', {
          // //   test:element
        //   // },'/test-heap'));
        // // });
        // // response = await Promise.all(request);
        // // (response)
        // // ? resolve()
        // : reject()
        resolve()
      })
    })
  })
  describe('* case №3', async function () {
    it('** task list', function () {
      return new Promise(async (resolve, reject) => {
        task.list()  
        resolve()
      })
    })
    it('** task close', function () {
      return new Promise(async (resolve, reject) => {
        task.close(true,`close`,'5',{},'/test-heap')
        resolve()
      })
    })
  })
})