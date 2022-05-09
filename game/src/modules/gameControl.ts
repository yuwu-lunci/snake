//引入food模块
import Food from './food'
// 引入scoreArea模块
import ScoreArea from './scoreArea'
//引入蛇类
import Snake from './snake'

class GameControl{
    food:Food
    snake:Snake
    score:ScoreArea

    //创建一个属性保存蛇的移动方向
    direction:string='ArrowRight'

    //游戏是否结束
    isLive=true

    constructor(){
        this.food=new Food()
        this.score=new ScoreArea()
        this.snake=new Snake()
        this.init();
    }

    //游戏初始化方法，调用游戏开始
    init(){
        //绑定键盘按下事件
        document.addEventListener('keydown',this.keyDownHandler.bind(this))
        
        // setInterval(()=>{     
            this.run()
        //     },1000)

        //初始化时获取本地存储中的最好分数
        this.score.addBestScore()
    }

    keyDownHandler(event:KeyboardEvent){
        //判断event.key是否合法
        //修改direction属性
        this.direction=event.key
    }

    //让蛇移动
    run(){
        let X=this.snake.X
        let Y=this.snake.Y
        switch (this.direction) {
            case 'ArrowUp':
                Y-=10;
                break;
            case 'ArrowDown':
                Y+=10;
                break;
            case 'ArrowLeft':
                X-=10;
                break;
            case 'ArrowRight':
                    X+=10;
                break;
        }

        // 检查蛇是否吃到食物,调用checkEat方法
        this.checkEat(X,Y)

        try {
            //修改蛇X和Y值
            this.snake.X=X
            this.snake.Y=Y
        } catch (error) {
            //进入catch，说明出现了异常，即蛇撞墙了，弹出提示框
            alert('gg')
            //同时修改isLive的值
            this.isLive=false
        }
        

        //递归，使蛇一直移动，this.run要改变this指向
       this.isLive && setTimeout(this.run.bind(this),300-(this.score.level-1)*30)
    }

    //定义一个方法 检查蛇是否吃到食物
    checkEat(X:number,Y:number){
        if (X===this.food.X&&Y===this.food.Y) {
            // console.log('!!!');
            //吃到食物后，食物位置要发生变化，
            this.food.change();
            //分数增加
            this.score.addScore();
            //蛇要增加一节
            this.snake.addBody()
        }
    }
}

export default GameControl

// const scoreArea=new ScoreArea();

// for (let i = 0; i <= 20; i++) {
// scoreArea.addScore();
// }