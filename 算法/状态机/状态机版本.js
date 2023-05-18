function match(string) {
   let state = start;
   for (let c of string) {
    state = state(c);
   }
   return state === end
}

function start(c){
  if(c==="a"){
    return foundB;
  }
  return start;
}

function foundB(c){
  if(c==="b"){
    return foundC;
  }
  return start;
}
function foundC(c){
  if(c==="c"){
    return end;
  }
  return start;
}
function end(c){
  return end;
}

console.log(match("I math acdabef xxx"));
