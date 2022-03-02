//下标为1的枚举
enum Color { Red = 1, Green, Blue };
var c: Color = Color.Green;

console.log(c);//1

console.log(Color[3]);//Blue

console.log(Color);//{ '1': 'Red', '2': 'Green', '3': 'Blue', Red: 1, Green: 2, Blue: 3 }

