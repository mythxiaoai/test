

// function test() { 
//   try {
//     console.log(1);
//     return 2;
//   } finally { 
//     console.log("f");
//     return 3
//   }
// }

// console.log(test());

function test() { 
  console.log(1);
  return 2
}

(async () => { 
  let c = await test();
  console.log(c);
})()