function * gen(){
    yield "generate";
}
console.log(gen().next());

export default 1