//class关键字定义一个类
class Person{
    //定义属性
    //实例属性需要对象实例去访问
    name:string='xiaoyu';
    //静态属性：在属性前使用static关键字可以定义类属性
    static age:number=18;

    //readonly只读不可改
    readonly sex:string='female'

    // 定义方法
    sayHello(){
        console.log('hello'+this.name);
        
    }
}
const per=new Person();
// 实例属性
console.log(per.name);
//静态属性可直接通过类去调用
console.log(Person.age);

//调用方法
per.sayHello()

