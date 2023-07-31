let col = 6;
let list = [];
for (let i = 0; i < 20; i++) {
  list.push(i);
}

for (let i = 0; i < col; i++) {
  for (let j = 0; j < list.length; j++) {
    if(j%col === i){
      console.log(`${i}-${j}`);
    }
  }
  
}
