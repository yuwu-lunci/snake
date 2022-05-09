"use strict";
class Dog {
    //constructor称为构造函数
    //构造函数在对象创建时就会被调用
    constructor(name, age) {
        //实例方法中，this表示当前实例
        console.log(this);
        this.name = name;
        this.age = age;
    }
    bark() {
        console.log(this.name);
    }
}
const dog = new Dog('xiaobai', 18);
const dog2 = new Dog('xiaohei', 19);
console.log(dog);
