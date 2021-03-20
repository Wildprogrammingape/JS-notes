// async 代码可以理解为 start something now and finish it later 现在开始，晚点结束 (异步)
// JS是synchronous language同步的语言，从上到下执行代码
// JS也是single-thread单线程语言, 意思和上面一样， only run one statement/function at a time

// 缺点：如果JS代码有很多function，每个function要执行好几秒，因此上面的func会耽误下面func运行，这也是同步/单线程语言的缺点 (synchronous/single-thread)

// 因此 asyn异步用来解决这个问题，先发送request等得到数据再 callback,不影响下面function的运行


// 简单的例子:
// setTimeout里的callback function starts when the JS runs, 但是wait for 2s 才执行callback function并finish
// 这和sentHTTP request函数的原理相同

// console.log(1);
// console.log(2);

// setTimeout(() => {
//     console.log('callback function fired');
// }, 2000);

// console.log(3);
// console.log(4);

// 结果:   1  2  3  4 callback function fired    --  第三个函数并没有block下面的运行


// HTTP Requests
// 为什么要发送http request? -- 要从server或者database获取数据，获取数据的格式为JSON



// make HTTP Request例子：

// XMLHttpRequest在发送时有四个ready state:
// 0 -- unsent -- client created but open() not called
// 1 -- opened -- open() called
// 2 -- headers received -- send() called, and headers and status are avaiable
// 3 -- loading -- downloading, at this time responseText has partial data
// 4 -- done -- completed



// const request = new XMLHttpRequest();   

// request.addEventListener('readystatechange', () => { // 每次state change时 fire这个callback function
//     //console.log(request,request.readyState);
//     if (request.readyState === 4 && request.status === 200){
//         console.log(request.responseText);   // responseText property包含response的数据
//     } 
//     else if (request.readyState === 4){
//         console.log('can not fetch the data');
//     }
// });
    
// request.open('GET' , 'https://jsonplaceholder.typicode.com/todos/');
// request.send();



// 调用getTodo()这个函数，并传递callback function作为它的参数，getTodo将这个callback function作为参数，根据不同条件执行，最终调用该callback function

// const getTodos = (callback) =>{
//     const request = new XMLHttpRequest();   
//     request.addEventListener('readystatechange', () => { 
//         if (request.readyState === 4 && request.status === 200){
//             callback(undefined, request.responseText); 
//         } 
//         else if (request.readyState === 4){
//             callback('could not fetch data', undefined);
//         }
//     });
    
//     request.open('GET' , 'https://jsonplaceholder.typicode.com/todos/');
//     request.send();
// };

// getTodos((error, data) => {        // 调用getTodo函数，并将里面的 callback function作为参数
//     console.log('callback fired');
//     if (error){
//         console.log(error);
//     }
//     else{
//         console.log(data);
//     }
// });


// 加入async异步：

// const getTodos = (callback) =>{
//     const request = new XMLHttpRequest();   
//     request.addEventListener('readystatechange', () => { 
//         if (request.readyState === 4 && request.status === 200){
//             callback(undefined, request.responseText); 
//         } 
//         else if (request.readyState === 4){
//             callback('could not fetch data', undefined);
//         }
//     });
    
//     request.open('GET' , 'https://jsonplaceholder.typicode.com/todos/');
//     request.send();
// };

// console.log(1);
// console.log(2);

// getTodos((error, data) => {        // 调用getTodo函数，并将里面的 callback function作为参数
//     console.log('callback fired');
//     if (error){
//         console.log(error);
//     }
//     else{
//         console.log(data);
//     }
// });

// console.log(3);
// console.log(4);

// 执行流程 1 -- 2  -- getTodos() starts -- 3 -- 4 -- fire callback function when data returns
// 这就是所谓的asyn异步，getTodo() starts and finish later，让其他代码 run at the meantime, 而不会阻碍下面程序的运行






// JSON -- 本质是 像Object的String

// const getTodos = (callback) =>{
//     const request = new XMLHttpRequest();   
//     request.addEventListener('readystatechange', () => { 
//         if (request.readyState === 4 && request.status === 200){
//             const data = JSON.parse(request.responseText); // convert JSON string to object
//             callback(undefined, data); 
//         } 
//         else if (request.readyState === 4){
//             callback('could not fetch data', undefined);
//         }
//     });
    
//     request.open('GET' , 'example.json');
//     request.send();
// };

// getTodos((error, data) => {        // 调用getTodo函数，并将里面的 callback function作为参数
//     console.log('callback fired');
//     if (error){
//         console.log(error);
//     }
//     else{
//         console.log(data);
//     }
// });


// Promise Example, 当需要轮流调用不同resource的时候，要嵌套很多callback function，因此引入promise

// const getSomething = () => {
//     return new Promise((resolve, reject) => {
//         // fetch 
//         //resolve('some data');
//         reject('some error');
//     });
// };

// getSomething().then((data)=>{ // then里的callback function 在resolve的情况下执行，值为resolve里的内容
//     console.log(data);
// },(error) => {                     // 第二个callback function在reject的情况下执行
//     console.log(error);
// });

//另一种简介的写法，不用两个callback function作为参数，用.then.catch连接
// getSomething().then(data => {
//     console.log(data);
// }).catch(error => {
//     console.log(error);
// });





// Promise实际的例子

// const getTodos = (callback) =>{
//     const request = new XMLHttpRequest();   
//     request.addEventListener('readystatechange', () => { 
//         if (request.readyState === 4 && request.status === 200){
//             const data = JSON.parse(request.responseText); // convert JSON string to object
//             callback(undefined, data); 
//         } 
//         else if (request.readyState === 4){
//             callback('could not fetch data', undefined);
//         }
//     });
    
//     request.open('GET' , 'example.json');
//     request.send();
// };

// getTodos((error, data) => {        // 调用getTodo函数，并将里面的 callback function作为参数
//     console.log('callback fired');
//     if (error){
//         console.log(error);
//     }
//     else{
//         console.log(data);
//     }
// });




// fetch API  类似XMLHTTPRequest，但是更先进更方便使用
// promise 是 resolve if success， reject if error, 而 fetch 返回的就是promise
// fetch 的reject只会发生在network error时
// response.json() 返回的也是 promise，因此可以在return之后连接 .then

// fetch('example.json').then((response) =>{ // then for resolve
//     console.log('resolved', response); // response是fetch返回的object
//     return response.json();
// }).then((data) => {
//     console.log(data);
// }).catch((error) => { // catch for reject
//     console.log('rejected', error);
// });




// async & await 用来chain很多promise, 能将asynchronous code整合到一个function里，而且是async function，不影响下面程序执行
// async function返回的是promise

const getTodo = async() =>{       // async function返回的是promise
    
    const response = await fetch('example.json'); // await阻止赋值，直到后面的fetch resolve了
    const data = await response.json(); // response.json() 返回的也是 promise 

    return data;
};

getTodo()
    .then(data => console.log('resolved:', data));

