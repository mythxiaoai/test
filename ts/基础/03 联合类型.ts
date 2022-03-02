//取值可以为多种类型中的一种
let myType:string | number ;
myType = "five"
myType = 5
//ts不确定联合类型的变量是两个的时候，会才去悲观判断，访问此联合类型的所有类型里共有的属性或者方法
//类型“number”上不存在属性“length”会报错
myType.length
//没问题
myType.toString()


myType = "five"//被推断成String类型
//没问题  因为在赋值的时候，会根据类型推导的规则推断出一个类型
myType.length

