"use strict";
(function () {
    //定义animal类
    class Animal {
        constructor(name, age) {
            this.name = name,
                this.age = age;
        }
        sayHello() {
            console.log('hello');
        }
    }
    //定义dog类继承animal
    //dog为子类，animal为父类，这时子类会拥有父类所有方法和属性
    class Dog extends Animal {
        run() {
            console.log(this.name + 'fly');
        }
    }
    //定义cat类继承animal
    //通过继承，可以把共有代码写在一个父类
    class Cat extends Animal {
        //可以覆盖父类方法
        sayHello() {
            console.log('miaomiao');
        }
    }
    const dog = new Dog('xiaobai', 18);
    const cat = new Cat('xiaohua', 18);
    console.log(cat.name);
    console.log(dog.age);
    dog.run();
    cat.sayHello();
})();
