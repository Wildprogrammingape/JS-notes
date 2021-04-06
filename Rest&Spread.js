// 两个ES6的operator:  Rest 和 Spread
// Rest: ... 将传递的参数变成数组，用于参数数量不清楚的情况
// Spread: ... 将数组或对象变成individual component，作用和Rest相反

// Rest 的用法：

const double = (...nums) => {
    console.log(nums);
}

double(1,2,3,4,5);

//[1, 2, 3, 4, 5]

const doubleArray = (...nums) => { // nums此时就变成了数组array,即可用nums.map()对数组进行处理
    console.log(nums);
    return nums.map((num) => num * 2); 
};

const result = doubleArray(2,4,6,8);
console.log(result);

// [2, 4, 6, 8]
// [4, 8, 12, 16]



// Spread的用法

// 用于数组
const people = ['Long', 'Barry', 'Curry'];
const all = ['mario', ...people];
console.log(all);

//["mario", "Long", "Barry", "Curry"]

// 用于对象
const person = {name: 'Long', age: 25};
const person1 = {...person, job: 'Front end developer'};
console.log(person1);

//{name: "Long", age: 25, job: "Front end developer"}



// Set类似于数组，但只有非重复数值。是reference type，如object array date
// Set 和array不同， 有自己的property和method

const nameArray = ['Long', 'Chen', 'Mario'];
const uniqueSet = new Set(['Long', 'Chen', 'Mario']); // 创建一个set()

console.log(uniqueSet);

// {"Long", "Chen", "Mario"}

// 将set转换为array, 用spread ... 的方式
uniqueNameArray = [...uniqueSet];
console.log(uniqueNameArray);

// ["Long", "Chen", "Mario"]

//简洁的将数组array转化为不带重复的数组：
const duplicateArray = ['Mario', 'Long', 'Long', 'Barry'];
const uniqueArray = [...new Set(duplicateArray)];

console.log(uniqueArray);

//["Mario", "Long", "Barry"]


// Set的常用 property和method:
const ages = new Set([25, 30, 18, 35]);
ages.add(100);
ages.delete(30);

console.log(ages, ages.size, ages.has(25));

// {25, 18, 35, 100} 4 true

// Set也是可遍历的，因此可用forEach
ages.forEach((data) => {
  console.log(data);
})

// 25
// 18
// 35
// 100


// Symbol 是 primitive type， 该数据类型永不重复，常用于Object的property中，因为对象的property/key是不可重复的，不然会overrite

const symbolOne = Symbol('hello');
const symbolTwo = Symbol('hello'); // 创建两个内容相同的symbol

console.log(symbolOne == symbolTwo, symbolOne, symbolTwo);

// false Symbol(hello) Symbol(hello)  虽然内容一样，但是两个symbol不同


// 用于Object的property
const LongChen = {};

LongChen.age = 24;

LongChen.hobby = 'code';
LongChen.hobby = 'basketball';

console.log(LongChen);

// {age: 24, hobby: "basketball"}  之前的hobby property就被覆盖了

LongChen.symbolOne = 'value of symbol one';
LongChen.symbolTwo = 'value of symbol two';
console.log(LongChen);

// {age: 24, hobby: "basketball", symbolOne: "value of symbol one", symbolTwo: "value of symbol two"}
