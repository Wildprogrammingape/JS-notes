// 数组常用 method
const arr = ["Banana", "Orange", "Apple", "Mango"];

// toString() 数组转字符串
const s = arr.toString();
console.log(s, typeof s);  // 'Banana,Orange,Apple,Mango'   string
console.log(s.substring(0,6));  // 'Banana'

// push()   添加新元素到数组最后， 返回新数组长度
// pop()    将数组最后一个元素弹出，并返回该元素
// shift()  弹出数组第一个元素，并返回该元素

const myarr = [2, 4, 6, 8, 10];
console.log(myarr.push(12), myarr); // 6 [ 2, 4, 6, 8, 10, 12 ]
console.log(myarr.pop(), myarr);    // 12 [ 2, 4, 6, 8, 10 ]
console.log(myarr.shift(), myarr);  // 2 [ 4, 6, 8, 10 ]

// join() 将数组 以某种方式连接成字符串
const fruits = ["Banana", "Orange", "Apple", "Mango"];

let fruitstring = fruits.join(' ');
console.log(fruitstring);   // 'Banana Orange Apple Mango'       将数组元素用空格连接

fruitstring = fruits.join(',');
console.log(fruitstring);   // 'Banana,Orange,Apple,Mango'       将数组元素用逗号连接

fruitstring = fruits.join('');
console.log(fruitstring);   // 'BananaOrangeAppleMango'          将数组元素直接连接

// reverse()  反转数组元素,改变原数组
fruits.reverse();
console.log(fruits);   // [ 'Mango', 'Apple', 'Orange', 'Banana' ]



// include(value, index)  是否有该元素,从index处往后开始找，不包含index
console.log(myarr.includes(6));   // true
console.log(myarr.includes(6,2));  // false


// slice(start, end) 切片数组
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log(animals.slice(2));      //  ["camel", "duck", "elephant"]
console.log(animals.slice(2, 4));   //  ["camel", "duck"]


// concate() 合并数组
const arr1 = [0,1,2];
const arr2 = [3,4,5];
const arr3 = arr1.concat(arr2);
console.log(arr3);                  // [ 0, 1, 2, 3, 4, 5 ]



// sort() 按照字母顺序(A-Z -...- a-z)进行排序，将内容作为字符串, sort方式改变原数组
// sort(compareFunction) 比较函数比较(a-b)<0, 则a排在前面，即数组升序


// example 1 -sort strings
const names = ['Long','Barry','chunli','mario'];
names.sort();
console.log(names);     // [ 'Barry', 'Long', 'chunli', 'mario' ]

names.reverse();        // reverse颠倒顺序，和sort搭配使用获得从z-a的反向顺序
console.log(names);     // [ 'mario', 'chunli', 'Long', 'Barry' ]



// example 2 -sorting numbers
const array1 = [10,5,0,40,10,60,20,70];
// arr1.sort();  只会sort number的第一个数，所以该方法不可用

//对array进行sort的正确方法:
array1.sort((a,b) => a - b);
console.log(array1);                // [0,  5, 10, 10,20, 40, 60, 70]


// 直接sort实验
const array2 = [10,5,0,40,10,60,20,70];
array2.sort();
console.log(array2);   // [0, 10, 10, 20,40,  5, 60, 70]






















// example - sorting objects 比较两个连续的值，需要换顺序就 return 正值，不需要就负值，什么都不做就是0
const obj1 = [
    {name: 'mario', score: 50},
    {name: 'mushroom', score: 30},
    {name: 'mario', score: 70},
    {name: 'red shells', score: 60},
];

obj1.sort((a,b) =>{
    if (a.score > b.score){
        return -1;
    }
    else if(a.score < b.score){
        return 1;
    }
    else{
        return 0;
    }
});

console.log(obj1);

// [{ name: 'mario', score: 70 },
// { name: 'red shells', score: 60 },
// { name: 'mario', score: 50 },
// { name: 'mushroom', score: 30 }]

// 简介版本
obj1.sort((a,b) => b.score - a.score);