<?php
$no="";
$yes=$_POST["yes"];
$no=$_POST["no"];

header("Content-Type:text/html");
echo "<?xml version=\"1.0\" encoding=\"utf-8\"?>";
echo "<!DOCTYPE html>";
echo "<html><head>";
echo "<link rel=\"stylesheet\" type=\"text/css\" href=\"assign10.css\"/>";
echo "<title>Submission response</title></head>";
echo "<body><div id=\"container\">";

if($no!="")
{
	echo "<p>Your order has been cancelled</p>";
}
else
{
	echo "<p>Thank you for your purchase! Your order has been submitted</p>";
}

echo"</div></body></html>"
?>