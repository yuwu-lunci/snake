//定义食物类food
class Food{
    //定义一个属性表示食物对应元素
    element:HTMLElement;

    constructor(){
        //获取food元素并赋值给element
        //！表示不可能为空
        this.element=document.getElementById('food')!;
    }

    //定义一个获取食物x轴坐标方法
    get X(){
        return this.element.offsetLeft;
    }
    //定义一个获取食物y轴坐标方法
    get Y(){
        return this.element.offsetTop;
    }

    //修改食物位置
    change(){
        //生成随机位置,食物位置区间为[0,290]
        let l=Math.floor(30*Math.random());
        let t=Math.floor(30*Math.random());
        //蛇移动一次为10px，所以要求食物坐标能整除10
        this.element.style.left=10*l+'px'
        this.element.style.top=10*t+'px'

        
        if (Math.random()<0.4&&Math.random()>0) {
            this.element.style.backgroundColor='pink'
        }else if(Math.random()>0.4&&Math.random()<0.6){
            this.element.style.backgroundColor='blue'
        }else if(Math.random()>0.6&&Math.random()<0.8){
            this.element.style.backgroundColor='red'
        }else{
            this.element.style.backgroundColor='green'
        }
    }
}
export default Food;
//测试代码
// const food=new Food();
// console.log(food.X,food.Y);

// food.change();
// console.log(food.X,food.Y);

