// forEach没有返回值

const a = [1, 2, 3];
const doubled = a.forEach((num, index) => {
  // 执行与 num、index 相关的代码
});

// doubled = undefined


// map有返回值，最终形成新数组，不更改原数组
const a = [1, 2, 3];
const doubled = a.map((num) => {
  return num * 2;
});

// doubled = [2, 4, 6]