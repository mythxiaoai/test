//any
//声明任意值之后，对它的任何操作，返回值的类型也是任意值  运行时才回报错
let any:any = "5";
any.setValue("6")
any.setName("6").sayhello()

//变量没指定类型，那么他会被识别为任意类型
let any2;  //== let any2:any
any2 = "string"
any2 = 5;
any2.setName("666")


//类型推论
let myFavoriteNumber = 'seven';
//Type 'number' is not assignable to type 'string'.
myFavoriteNumber = 7;