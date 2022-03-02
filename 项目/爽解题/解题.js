//基础数据
let male = 50;
let female =50;
const maleGift = ["A","B"]
const femaleGift = ["C","D"]
const specialGift = "E"
let maleE = {
    name:"Johnson",
    sex:"male",
    gift:specialGift,
    luck:false//是否中奖
}
let femaleE = {
    name:"Marry",
    gift:specialGift,
    sex:"female",
    luck:false//是否中奖
}
//编号
let no = [];
//人员
let people = [];

//男生中奖人数
let maleCount = 0;
//女生中奖人数
let femaleCount = 0;

//运行
//1.100名员工  男女各一半分配编号
//初始化编号
for (let i = 0; i < 100; i++) {
    no.push(i);
}
//创建人并 分配编号  男女各50随机分配编号
while(no.length>2){
    let randomNo = Math.floor(Math.random()*100);//随机0-99
    let randomGift = Math.floor(Math.random()*2);//随机0-1
    let index = no.indexOf(randomNo)//查找下标
    if(~index){//如果存在
        no.splice(index,1);//删除编号  让条件终止
        if(people.length<=49){
            people.push({
                name:String.fromCharCode(randomNo),
                no:randomNo,
                sex:"male",
                gift:maleGift[randomGift],
                luck:false
            })
        }else if(people.length<=98){
            people.push({
                name:String.fromCharCode(randomNo),
                no:randomNo,
                sex:"female",
                gift:maleGift[randomGift],
                luck:false
            })
        } 
    }
}
console.log(no);
//剩下特殊的两个人的节省性能手动添加
maleE.no = no[0]
femaleE.no = no[1]
people.push(maleE)
people.push(femaleE);

console.log(people);
console.log(people.length);
//抽签程序  100次抽签
//100次抽签结果  目的是获取100个 0-99编号随机的值
let result = []
while(result.length<100){
    let randomNo = Math.floor(Math.random()*100);//随机0-99
    let index = result.indexOf(randomNo);//是否在
    if(!~index){//不存在才添加
        result.push(randomNo);
    }
}
console.log("result",result);
console.log("result",result.length);

//循环中奖签和个人比对  打印程序
result.forEach((v,i)=>{
    //v：当前下标值 编号   i：下标0 1 2 3
    //当前人
    let currPeople = people[i];
    //是否中奖  插值的绝对值小于30
    if(Math.abs(currPeople.no - v)<=30){
        //对应序号为题目要求的打印
        //1.
        console.log(`I am No.${currPeople.no}.My lottery number is ${v}`);
        //2.1
        if(currPeople.sex == "male"){
            maleCount = maleCount + 1;//顺便统计
            console.log(`I am a male,and I am luck yoday!`);
        }
        //2.2
        if(currPeople.sex == "female"){
            femaleCount = femaleCount + 1;
            console.log(`I am a female,and I am luck yoday!`);
        }
        //改变当前中奖者的属性
        currPeople.luck = true;
    }
})
console.log("people",people);

 //对应序号为题目要求的打印
//1
console.log(`男生中奖人数：`+maleCount);
console.log(`女生中奖人数:`+femaleCount);
//2
//打印程序
//按照编号排序
people = people.sort((a,b)=>a.no-b.no);
console.log("people:sort",people);
people.forEach(v=>{//中奖
    if(v.luck){
        //2.1
        if(v.name=="Johnson" || v.name=="Marry"){
            console.log("present E is give to lucky"+v.name);
        }
        //2.2
        if(v.name!="Johnson"){
            console.log(`present ${v.gift} is given to Gentleman No.${v.no}`);
        }
        //2.3
        if(v.name!="Marry"){
            console.log(`present ${v.gift} is given to Gentleman No.${v.no}`);
        }
    }else{
        //2.4
        console.log(`today is not aluck day for ${v.sex} No.${v.no}`);
    }

})

