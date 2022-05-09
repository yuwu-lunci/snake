//定义记分牌类
class ScoreArea{
    score=0;
    level=1;
    scoreEle:HTMLElement;
    levelEle:HTMLElement;
    //
    best:HTMLElement
    //最好分数
    bestScore:number=0
    //食物
    food:HTMLElement

    //设置一个变量限制等级
    maxLevel:number
    //设置升级分数
    upScore:number
    constructor(maxLevel:number=10,upScore:number=10){
        //获取分数元素
        this.scoreEle=document.getElementById('score')!;
        //获取等级元素
        this.levelEle=document.getElementById('level')!;
        //获取最好分数的元素
        this.best=document.getElementById('bestScore')!;
        this.maxLevel=maxLevel
        this.upScore=upScore
        //获取食物元素
        this.food=document.getElementById('food')!;
    }

    //设置加分方法
    addScore(){
        //判断蛇吃的食物颜色
        // if (this.food.style.backgroundColor==='pink') {
        //     // 使分数自增
        //     this.score+=1;
        // }else if (this.food.style.backgroundColor==='blue') {
        //  this.score+=2   
        // }
        this.scoreEle.innerHTML='SCORE：'+ ++this.score+'';
        if (this.score%this.upScore==0) {
            this.levelUp()
        }

        
        this.bestScore=JSON.parse(localStorage.getItem('score')||'0')
        if (this.score>this.bestScore) {
            this.bestScore=this.score
            localStorage.setItem('score',JSON.stringify(this.bestScore))
            // this.best.innerHTML='BESTSCORE：'+ this.bestScore
        }
    }
    addBestScore(){
        this.bestScore=JSON.parse(localStorage.getItem('score')||'0')
        this.best.innerHTML='BESTSCORE：'+ this.bestScore
    }

    //等级提升方法
    levelUp(){
        if (this.level<this.maxLevel) {
            this.levelEle.innerHTML='LEVEl：'+ ++this.level+'';
        }
    }
}
export default ScoreArea
// const scoreArea=new ScoreArea();

// for (let i = 0; i <= 20; i++) {
// scoreArea.addScore();
// }
