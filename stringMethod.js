// String常用method
const s = "helloworld";

// indexOf() 索引
console.log(s.indexOf('l')); // 2

// lastIndexOf()
console.log(s.lastIndexOf('l')); // 8

// subString() 子字符串
console.log(s.substring(0,5));  // "hello"

// toLowerCase()  小写
const capital = 'HELLOWORLD';
console.log(capital.toLowerCase());  // 'helloworld'

// trim()   删除两侧空格
const stringWithSpace = '  string  with  space';
console.log(stringWithSpace.trim());  // 'string  with  space'

// charAt() 获取字符
// s[]      获取字符
console.log(s.charAt(0));       // 'h'
console.log(s[0]);              // 'h'

// split() 字符串 以某种方式分隔成数组
console.log("hello world".split(''));     // ['h','e','l','l','o','w','o','r','l','d']  直接分隔
console.log("hello world".split('l'));    // [ 'he', '', 'o wor', 'd' ]                 看到'l'就分隔
console.log("hello world".split(' '));    // [ 'hello', 'world' ]                       看到空格就分隔



// 用不到
console.log("hello world".split());       // [ 'hello world' ]    不带参数，直接转换成单一数组
console.log(["hello world"]);             // [ 'hello world' ]
