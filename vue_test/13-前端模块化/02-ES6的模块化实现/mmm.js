// 导入方式一
import {flag,sum} from "./aaa.js";

if (flag) {
  console.log("----导入方式一----");
  console.log('导入成功');
  console.log(sum(20, 30))
}

import {num1, height} from "./aaa.js"
console.log("----导入方式二----");
console.log(height);
console.log(num1);


// 导入函数
import {mul} from "./aaa.js"
console.log("----导入函数----");
console.log(mul(20, 30));

import {Person} from "./aaa.js"
console.log("----导入类----");
const p = new Person();
p.run()

// 导入 export default中的内容 利用default能够让导入者自定义名字
import addr from "./aaa.js"
addr("default方式导入函数")


