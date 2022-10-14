//取模拟拖动滑块的数据
//用等差数列代替了匀加速运动
//因为匀加速运动取得的小数经过四舍五入会出现不精确，导致拖动的距离出差错
function getTrack(distance){
	var track = [],d=2,n=0,s=0,S=0
	while(S<distance){
		s=1+n;
		n=n+d;
		S+=s;
		track.push(s)
	}

	var diff = (S - distance);
	track.splice(-1,1,Math.round(Number(track.slice(-1))-diff))
	return track;
}

function getTrack33(distance){
	var track = [],d=2,n=0,s=0,S=0
	while(S<distance){
		s=1+n;
		n=n+d;
		S+=s;
		track.push(s)
	}

	var diff = (S - distance);
	track.splice(-1,1,Math.round(Number(track.slice(-1))-diff))

	return track;
}
console.log(getTrack33(207));