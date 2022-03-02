let str = `操作


款式角色


颜色


异常节点


异常描述


异常处理备注`

let resArr = str.split('\n').map(v=>v.replace(/[\r\n\s]/img,"")).filter(v=>v);


console.log(resArr.map(v=>`{  title: '${v}',field: 'produce_factory'},`).join(""))