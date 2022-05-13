<!DOCTYPE html>
<html>
<body>
	<script>    
	function OuterFunction(){
		var num=15;
		function InnerFunction(){
			alert(num);
		}
		return InnerFunction;
	}
	var show=OuterFunction();
	show();
	</script>	
</body>
</html>