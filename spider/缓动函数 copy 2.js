// def ease_out_expo(x):
//     if x == 1:
//         return 1
//     else:
//         return 1 - pow(2,-10 * x)

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
  let t = 0.05
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
function get_tracks3(distance) {
  // 根据滑动距离生成滑动轨迹
  // :param distance: 需要滑动的距离
  // :return: 滑动轨迹<type 'list'>: [[x,y,t], ...]
  //     x: 已滑动的横向距离
  //     y: 已滑动的纵向距离, 除起点外, 均为0
  //     t: 滑动过程消耗的时间, 单位: 毫秒
   
  let slide_track = [
    [randint(-50, -10), randint(-50, -10), 0],
    [0, 0, 0],
  ]
  let count = 30 + parseInt(distance / 2)
  let t = randint(50, 100)
  let _x = 0
  let _y = 0
  
  for (let i = 0; i < count; i++) {
    let x = Math.round(__ease_out_expo(i / count) * distance)
    t += randint(10, 20)
    if (x === _x) {
      continue
    }
    slide_track.push([x, _y, t])
    _x = x
    slide_track.push(slide_track[slide_track.length-1])
  }
  slide_track = slide_track.filter(v=>(v[0]>0 || v[1]>0))
  return slide_track;
}
console.log(get_tracks3(111));
// for (let i = 0; i < 50; i++) {
//   console.log(BounceOut(i));
// }

//[1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 8].reduce((x,y)=>x+y)
function randint(m, n)  {
  return Math.ceil(Math.random() * (n-m+1) + m-1)
}