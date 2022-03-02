<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title></title>
	</head>
	<body>
		我是子
		<a href="javascript:;" id="s2">子的事件</a>
	</body>
	<script src="../../js/jquery.js"></script>
	<script>
		var s2 = {
			a:123,
			init(){
				$("#s2").click(()=>{
					alert("s2")
				});
				this.console();
			},
			list(callback){
				callback&&callback.call(window)
			},
			auto(){
			  $("#s2").trigger("click");
			},
			console(){
				console.log(s2.a)
			}
		}
		s2.init();
	</script>
</html>
