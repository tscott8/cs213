<?php
	$studentList = array(
	    array (
   			"name" => array( 
    			"first" => "Tyler",
    			"middle" => "Nelson",
    			"last" => "Scott",
    			),
    		"location" => array(        
    			"city" => "Denver",
    			"state" => "CO",
    			),
    		"college" => "BYUI",
    		"department" => "Computer Science and Engineering",
    		"major" => "Computer Engineering",
    	),
	    array(
   			"name" => array(
    			"first" => "Emerson",
    			"middle" => "Brack",
    			"last" => "Jenkins",
    			),
    		"location" => array(         
    			"city" => "Ogden",
    			"state" => "Utah",
    			),
    		"college" => "Utah State",
    		"department" => "Biology",
    		"major" => "Dance",
    	),
    	array(
   			"name" => array(
    			"first" => "Grego",
    			"middle" => "Henry",
    			"last" => "Laff",
    			),
    		"location" => array(         
    			"city" => "Fresno",
    			"state" => "California",
    			),
    		"college" => "UCSB",
    		"department" => "Performing Arts",
    		"major" => "Band",
    	)
 	);

	header("Content-Type:text/xml");
	echo "<?xml version=\"1.0\" encoding=\"utf-8\"?>";
	echo "<!DOCTYPE studentList SYSTEM \"assign09.dtd\">";
	echo "<?xml-stylesheet type=\"text/xsl\" href=\"assign09.xsl\"?>";
	echo "<studentList>";

	for($i = 0; $i < count($studentList); $i++)
	{	
		echo "<student>";
			echo "<name>";
					echo "<first>";
							echo $studentList[$i]["name"]["first"];
					echo "</first>";
					echo "<middle>";
							echo $studentList[$i]["name"]["middle"];
					echo "</middle>";
					echo "<last>";
							echo $studentList[$i]["name"]["last"];
					echo "</last>";
			echo "</name>";		
			echo "<location>";
					echo "<city>";
						echo $studentList[$i]["location"]["city"];
					echo "</city>";
					echo "<state>";
						echo $studentList[$i]["location"]["state"];
					echo "</state>";
			echo "</location>";
			echo "<college name=\"";				
						echo $studentList[$i]["college"];
				echo "\">";	
				echo "<department name=\"";
						echo $studentList[$i]["department"];
						echo "\">";
						echo "<major id=\"399\">";
							echo $studentList[$i]["major"];	
						echo "</major>";
				echo "</department>";
			echo "</college>";
		echo "</student>";
	}
	echo "</studentList>";
?>	