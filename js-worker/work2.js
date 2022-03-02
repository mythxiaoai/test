var data = [5,26,84,23,95,42,63,41,26,5,2,236,5841,2];
let worker = new Worker("./run.js");

worker.onmessage = function (event) {
    console.log(event);
}

worker.postMessage(data)

