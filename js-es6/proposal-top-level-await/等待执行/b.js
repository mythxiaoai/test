let output;
async function main() {
  console.log("b-1");
  const A = await import("./a.js");
  output = await A.a;
  console.log("b-2");
}
await main();
export { output };