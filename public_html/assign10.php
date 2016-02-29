<?php
	$firstName=$_POST["firstName"];
	$lastName=$_POST["lastName"];
	$address=$_POST["address"];
	$phone=$_POST["phone"]; //make easier to read
	$totalAll=$_POST["totalAll"];
	$pay=$_POST["pay"];
	$cardNum=$_POST["cardNum"]; // show only last 4 digits
	$cardExp=$_POST["cardExp"]; // need to process January 2015

	//pretty mods
	$phone="(".substr($phone,0,3).") ".substr($phone,3,3)."-".substr($phone,6);
	$hiddenCard="xxxxxxxxxxxx".substr($cardNum, 12);
	$expMonth=substr($cardExp,0,2);
	$expYear="20".substr($cardExp,2);

	switch ($expMonth) {
	 	case '01':
	 		$expMonth="January";
	 		break;
	 	case '02':
	 		$expMonth="February";
	 		break;
	 	case '03':
	 		$expMonth="March";
	 		break;
	 	case '04':
	 		$expMonth="April";
	 		break;
	 	case '05':
	 		$expMonth="May";
	 		break;
	 	case '06':
	 		$expMonth="June";
	 		break;
	 	case '07':
	 		$expMonth="July";
	 		break;
	 	case '08':
	 		$expMonth="August";
	 		break;
	 	case '09':
	 		$expMonth="September";
	 		break;
	 	case '10':
	 		$expMonth="October";
	 		break;
	 	case '11':
	 		$expMonth="November";
	 		break;
	 	case '12':
	 		$expMonth="December";
	 		break;
	 	default:
	 		# code...
	 		break;
	 }

	header("Content-Type:text/html");
	echo "<?xml version=\"1.0\" encoding=\"utf-8\"?>";
	echo "<!DOCTYPE html>";
	echo "<html><head>";
	echo "<link rel=\"stylesheet\" type=\"text/css\" href=\"assign10.css\"/>";
	echo "<title>Purchase Review/Confirmation</title></head>";
	echo "<body><div id=\"container\">";
	echo "<h3>Cart:</h3><hr>";
	echo "<p>".$firstName." ".$lastName."'s Order<br>";
	echo "Shipping address: ".$address."<br>";
	echo "Phone number: ".$phone."<br>";
	echo "Payment method: ".$pay."<br>";
	echo "Card number: ".$hiddenCard."<br>";
	echo "Exp. date: ".$expMonth." ".$expYear."<br>";
	echo "Cart total: ".$totalAll."<br>";
	echo "</p><hr>";
	echo "<form action=\"assign10_a.php\" method=\"POST\">";
	echo "Is this order correct? ";
	echo "<input type=\"submit\" name=\"yes\" value=\"Confirm\"/>";
	echo "<input type=\"submit\" name=\"no\" value=\"Cancel\"/>";
	echo "</form></div>";
	echo "</body><html>";
?>
