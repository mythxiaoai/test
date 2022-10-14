
function __ease_out_expo(x) { 
  if (x === 1) return 1;
  return 1 - Math.pow(2,-10 * x)
}

function BounceOut(k) {
  if (k < (1 / 2.75)) {
    return 7.5625 * k * k;
  }
  else if (k < (2 / 2.75)) {
    return 7.5625 * (k -= (1.5 / 2.75)) * k + 0.75;
  } else if (k < (2.5 / 2.75)) {
    return 7.5625 * (k -= (2.25 / 2.75)) * k + 0.9375;
  } else {
    return 7.5625 * (k -= (2.625 / 2.75)) * k + 0.984375;
  }
}


function get_tracks(distance) {
  let v = 0
  let t = 1
  let forward_tracks = []
  let current = 0
  let mid = distance * 3 / 5
  while (current < distance) {
    let a = 0;
    if (current < mid) {
      a = 2
    } else {
      a = -3
    }
    let s = v * t + 0.5 * a * (t ** 2)
    v = v + a * t
    current += s
    forward_tracks.push(s)
  }

  return forward_tracks
}

console.log(get_tracks(100));
// for (let i = 0; i < 50; i++) {
//   console.log(BounceOut(i));
// }


function randint(m, n)  {
  return Math.ceil(Math.random() * (n-m+1) + m-1)
}