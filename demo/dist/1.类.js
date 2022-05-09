"use strict";
//class关键字定义一个类
class Person {
    constructor() {
        //定义属性
        //实例属性需要对象实例去访问
        this.name = 'xiaoyu';
        //readonly只读不可改
        this.sex = 'female';
    }
    // 定义方法
    sayHello() {
        console.log('hello' + this.name);
    }
}
//静态属性：在属性前使用static关键字可以定义类属性
Person.age = 18;
const per = new Person();
// 实例属性
console.log(per.name);
//静态属性可直接通过类去调用
console.log(Person.age);
//调用方法
per.sayHello();
