
class Snake{
    //表示获取蛇头元素
    snakeHead:HTMLElement;
    //表示蛇身
    bodies:HTMLCollection

    element:HTMLElement
    constructor(){
        this.snakeHead=document.querySelector('#snake>div')!;
        this.bodies=document.getElementById('snake')!.getElementsByTagName('div');
        this.element=document.getElementById('snake')!
    }

    //获取蛇头坐标
    get X(){
        return this.snakeHead.offsetLeft
    }

    get Y(){
        return this.snakeHead.offsetTop
    }

    set X(val:number){

        //如果新值与旧值相同，直接返回不修改
        //意思是X和y不可能同时发生改变，其中一个不变，则不进行下面方法
        if (this.X===val) {
            return
        }

        //X值是否在0-290之间
        if (val<0||val>290) {
            //如果蛇撞墙了，抛出一个异常
            throw new Error("游戏结束");
        }
       
        //禁止蛇调头
        if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft===val) {
            //如果蛇向反方向移动，是被禁止的，蛇继续向原方向移动
            if (val>this.X) {
                val=this.X-10
            }else{
                val=this.X+10
            }
        }

        this.moveBody()
        this.snakeHead.style.left=val+'px'

    }
    set Y(val:number){

        //如果新值与旧值相同，直接返回不修改
        if (this.Y===val) {
            return
        }
         //Y值是否在0-290之间
        if (val<0||val>290) {
            //如果蛇撞墙了，抛出一个异常
            throw new Error("游戏结束");
        }
        
        //禁止蛇调头
        if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop===val) {
            //如果蛇向反方向移动，是被禁止的，蛇继续向原方向移动
            if (val>this.Y) {
                val=this.Y-10
            }else{
                val=this.Y+10
            }
        }

        this.moveBody()
        this.snakeHead.style.top=val+'px'

    }

    //蛇增加身体
    addBody(){
        //在element中添加一个div
        this.element.insertAdjacentHTML('beforeend','<div></div>')
    }

    //蛇移动的方法
    moveBody(){
        /*
        将后边的身体设置为前边身体的位置
        第3节=>第2节
        第2节=>蛇头
        */
       for (let i = this.bodies.length-1; i >0; i--) {
           //获取前边的位置
           let X=(this.bodies[i-1] as HTMLElement).offsetLeft;
           let Y=(this.bodies[i-1] as HTMLElement).offsetTop;
       
            (this.bodies[i] as HTMLElement).style.left=X+'px';
            (this.bodies[i] as HTMLElement).style.top=Y+'px'
        }

        if (this.bodies.length>=4) {
            for (let i = 4; i < this.bodies.length; i++) {
            if((this.bodies[i] as HTMLElement).offsetLeft===this.X&&(this.bodies[i] as HTMLElement).offsetTop===this.Y){
                //如果蛇撞到自己了，抛出一个异常
                throw new Error("游戏结束");
            }
        }
        }
    }
}

export default Snake
