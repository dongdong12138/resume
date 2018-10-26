var APP_ID = 'Od1rxG0lrchLp9pRPPyyELe2-gzGzoHsz';
var APP_KEY = 'jCXVMsw3GsgJsnhbO4sDOwnS';

AV.init({
    appId: APP_ID,
    appKey: APP_KEY
});

var query = new AV.Query('Message');
query.find().then(function (messages) {
    // 更新成功
    console.log(messages)
    console.log(messages[0].attributes)
    console.log(messages[1].attributes)
    let array = messages.map((item) => item.attributes)
    array.forEach((item) => {
        let li = document.createElement('li')
        li.innerText = `${item.name}: ${item.content}`
        messageList.appendChild(li)
    })
}, function (error) {
    // 异常处理
    alert('提交失败，请改天来留言')
}).then(() => { }, (error) => {
    console.log(error)
})

/*
// 创建 TestObject 表
var X = AV.Object.extend('dong');
// 在表中创建一行数据
var o = new X();
// 数据内容是 words: 'Hello World!' 保存
// 如果保存成功，则运行 alert('')
o.save({
  words: 'Fuck World!',
  name: '淑芬',
  age: '23'
}).then(function(object) {
  alert('LeanCloud Rocks!');
})
*/

postMessageForm.addEventListener('submit', function (e) {
    e.preventDefault()
    let content = postMessageForm.querySelector('input[name=content]').value
    let name = postMessageForm.querySelector('input[name=name]').value
    var Message = AV.Object.extend('Message');
    var message = new Message();
    message.save({
        'content': content,
        'name': name
    }).then(function (object) {
        let li = document.createElement('li')
        li.innerText = `${object.attributes.name}: ${object.attributes.content}`
        messageList.appendChild(li)
        postMessageForm.querySelector('input[name=content]').value = ''
        postMessageForm.querySelector('input[name=name]').value = ''
    })
})