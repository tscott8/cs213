<html>
<head>
<style>
	p {
		font-family: verdana;
		font-size: 150%;
	}
</style>
</head>
<body>
<?php
	$colorNum = 000;
	$output = "<p style = 'color:#$colorNum'>Hello World</p>";
	for($i=0; $i <=10; $i++)
	{
		print($output);
		$colorNum+=10;
	}
?>	
</body>
</html>