
// 在全局中，this指向 Window(browser)对象
// 在strict模式下，this为undefined

// console.log(this);

// window (browser)
// undefined ('use strict')


// 在object的method中，this指向该object

// const user = {
//     firstName: "Long",
//     lastName: "Chen",
//     fullName(){
//         console.log(this);
//         console.log(`${this.firstName} ${this.lastName}`);
//     }
// };

// user.fullName();

// { firstName: 'Long', lastName: 'Chen', fullName: [Function: fullName] }
// Long Chen

// 箭头函数下的this 永远指向 Window

// const b = () => {
//     console.log(this);
// }

// b();

// window


// 用new关键字创建函数时，函数内的 this 指向该Object

function User(name) {
    this.name = name;
    console.log(this);
}

const newUser = new User("Long");

// User { name: 'Long' }