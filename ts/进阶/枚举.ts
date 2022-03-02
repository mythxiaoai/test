//用于取值被限定在一定范围内的场景，如果是业务枚举建义用type
//TypeScript 的枚举类型的概念来源于 C#。

enum Days { Sun, Mon, Tue, Wed, Thu, Fri, Sat };

console.log(Days["Sun"] === 0); // true
console.log(Days["Mon"] === 1); // true
console.log(Days["Tue"] === 2); // true
console.log(Days["Sat"] === 6); // true

console.log(Days[0] === "Sun"); // true
console.log(Days[1] === "Mon"); // true
console.log(Days[2] === "Tue"); // true
console.log(Days[6] === "Sat"); // true


/** 编译为
var Days;
(function (Days) {
    Days[Days["Sun"] = 0] = "Sun";
    Days[Days["Mon"] = 1] = "Mon";
    Days[Days["Tue"] = 2] = "Tue";
    Days[Days["Wed"] = 3] = "Wed";
    Days[Days["Thu"] = 4] = "Thu";
    Days[Days["Fri"] = 5] = "Fri";
    Days[Days["Sat"] = 6] = "Sat";
})(Days || (Days = {}));
{
    "0": "Sun",
    "1": "Mon",
    "2": "Tue",
    "3": "Wed",
    "4": "Thu",
    "5": "Fri",
    "6": "Sat",
    "Sun": 0,
    "Mon": 1,
    "Tue": 2,
    "Wed": 3,
    "Thu": 4,
    "Fri": 5,
    "Sat": 6
}
 */


/**  修改默认值 */
//可能会重复  自定义初始值默认为1.5,步长也是1 所以web=3与Sun=3重复，所以最好是设置字符串
enum Days2 {Sun = 3, Mon = 1.5, Tue, Wed, Thu, Fri, Sat};

console.log(Days2["Sun"] === 3); // true
console.log(Days2["Wed"] === 3.5); // true
console.log(Days2[3] === "Sun"); // false
console.log(Days2[3] === "Wed"); // true
console.log(Days2);
/*
{
  '3': 'Sun',
  Sun: 3,
  Mon: 1.5,
  '1.5': 'Mon',
  Tue: 2.5,
  '2.5': 'Tue',
  Wed: 3.5,
  '3.5': 'Wed',
  Thu: 4.5,
  '4.5': 'Thu',
  Fri: 5.5,
  '5.5': 'Fri',
  Sat: 6.5,
  '6.5': 'Sat'
}
*/

const enum Directions1 {
    Up,
    Down,
    Left,
    Right
}

console.log(Directions1.Up);//0

