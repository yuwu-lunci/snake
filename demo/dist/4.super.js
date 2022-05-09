"use strict";
(function () {
    //定义animal类
    class Animal {
        constructor(name) {
            this.name = name;
        }
        sayHello() {
            console.log('hello');
        }
    }
    //定义dog类继承animal
    //dog为子类，animal为父类，这时子类会拥有父类所有方法和属性
    class Dog extends Animal {
        constructor(name, age) {
            //子类中写了构造函数，在子类构造函数中必须对父类调用
            super(name); //必须调用父类构造函数
            this.age = age;
        }
    }
    //定义cat类继承animal
    //通过继承，可以把共有代码写在一个父类
    class Cat extends Animal {
        sayHello() {
            //在类方法中，super就表示当前父类
            super.sayHello();
        }
    }
    const dog = new Dog('xiaobai', 18);
    const cat = new Cat('xiaohua');
    console.log(cat.name);
    console.log(dog.age);
    cat.sayHello();
})();
