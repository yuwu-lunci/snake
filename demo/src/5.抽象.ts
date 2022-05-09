(function (){
    //定义animal类
    //以abstract开头的是抽象类，
    //不能用来创建实例对象
    //抽象类是专门用来继承的类
   abstract class Animal{
        name:string;
        constructor(name:string){
            this.name=name
        }
        //定义一个抽象方法
        //抽象方法使用abstract开头，没有方法体
        //抽象方法只定义在抽象类中，子类必须对抽象方法进行重写
        abstract sayHello():void;
    }
    //定义dog类继承animal
    //dog为子类，animal为父类，这时子类会拥有父类所有方法和属性
    class Dog extends Animal{
        sayHello(){
            console.log('wang');
        }
    }
    //定义cat类继承animal
    class Cat extends Animal{
       sayHello(){
            console.log('miao');
        }
    }


    const dog=new Dog('xiaobai')
    const cat=new Cat('xiaohua')

    console.log(cat.name);
    cat.sayHello()
    
})()