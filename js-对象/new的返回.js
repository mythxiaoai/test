class Person {
  constructor() {
    this.name = "小明";
    this.age = 18;
    //这里如果返回的是一个基础数据类型  那么当new对象的时候返回该对象的实例 { name: '小明', age: 18 }
    //如果是引用类型的对象就直接返回当前，new没生效  相当于执行了构造器方法 返回 {name:"小艾"}  为什么？
    return {name:"小艾"};
  }
}
//console.log(new Person()); //{name:"小艾"}

