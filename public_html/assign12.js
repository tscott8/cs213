function checkDisplay() {
	var type = document.getElementById("type");
	console.log(type.value);	
	if (type.value == "Duet") {
		document.getElementById("performer2").style.display = "table-row";
		document.getElementById("performer1").style.display = "table-row";
		document.getElementById("hideF").style.display = "table-row";
		document.getElementById("hideL").style.display = "table-row";
		document.getElementById("hideI").style.display = "table-row";
		document.getElementById("hideHr").style.display = "table-row";
	}
	else
	{
		document.getElementById("performer2").style.display = "none";
		document.getElementById("performer1").style.display = "none";
		document.getElementById("hideF").style.display = "none";
		document.getElementById("hideL").style.display = "none";
		document.getElementById("hideI").style.display = "none";
		document.getElementById("hideHr").style.display = "none";
	}
}

function getInstrument() {
	var instrument = document.getElementById("instrument").value;
	console.log(instrument);
	if (instrument != "Piano" && instrument != "Voice" && instrument != "String" && instrument != "Organ") {
		var other = prompt("Please enter the intrument you will be playing.", "Harmonica").value;
		if (other != null)
		{
			document.getElementById("replaceInstrument").innerHTML = other;
		}
	}
}
function getLocation() {
	var location = document.getElementById("location").value;
	console.log(location);
	if (location != "Agriculture Engineering Building" && location != "Austin (Mark) Technical and Engineering Building"
					&& location != "Benson (Ezra Taft) Agricultural and Biological Sciences Building"
					&& location != "BYU-Idaho Center" && location != "Clarke (John L.) Building"
					&& location != "Hinckley (Gordon B.) Building" && location != "Kirkham (Oscar A.) Building"
					&& location != "McKay (David O.) Library" && location != "Ricks (Thomas E.) Building"
					&& location != "Romney (George S.) Sciences Building" && location != "Smith (Joseph Fielding) Building"
					&& location != "Snow (Eliza R.) Performing Arts Center" && location != "Spori (Jacob) Building"
					&& location != "Taylor (John) Building") {
		var other = prompt("Please enter the location of the venue", "Campus Gardens").value;
		if (other != null)
		{
			document.getElementById("replaceLocation").innerHTML = other;
		}
	}
}

function checkForm() {
	var helperMsg = "Please enter a legal value for ";
	var first = document.getElementById("first");
	if (!first.value.length && !isNaN(first.value)) {
		alert(helperMsg + "[First Name]");
		first.focus();
		return false;
	}
	var last = document.getElementById("last");
	if (!last.value.length && !isNaN(last.value)) {
		alert(helperMsg + "[Last Name]");
		last.focus();
		return false;
	}
	var studentID = document.getElementById("studentID");
	if (!studentID.value.length) {
		alert(helperMsg + "[Student ID]");
		studentID.focus();
		return false;
	}
	var room = document.getElementById("room");
	console.log(room.value);
	if (!room.value.length || isNaN(room.value)) {
		alert(helperMsg + "[Room #]");
		room.focus();
		return false;
	}
	var check2 = document.getElementById("type").value;
	if (check2 == "Duet") {
		var test = checkStudent2();
		console.log(test);
		return checkStudent2();
	}
	return true;	
}

function checkStudent2() {
	var helperMsg2 = "Please enter a legal value for the second entry's ";
	var first2 = document.getElementById("first2");
	if (!first2.value.length && !isNaN(first2.value)) {
		alert(helperMsg2 + "[First Name]");
		first2.focus();
		return false;
	}
	var last2 = document.getElementById("last2");
	if (!last2.value.length && !isNaN(last2.value)) {
		alert(helperMsg2 + "[Last Name]");
		last2.focus();
		return false;
	}
	var studentID2 = document.getElementById("studentID2");
	if (!studentID2.value.length) {
		alert(helperMsg2 + "[Student ID]");
		studentID2.focus();
		return false;
	}
	return true;
}

function buildQueryString() {
	var queryString="assign12.php?";
	var type = document.getElementById("type").value;
	var first = document.getElementById("first").value;
	var last = document.getElementById("last").value;
	var studentID = document.getElementById("studentID").value;
	queryString+="type="+type+"&first="+first+"&last="+last+"&studentID="+studentID;

	var first2 = "";
	var last2 = "";
	var studentID2 = "";
	if (type == "Duet")
	{
		first2 = document.getElementById("first2").value;
		last2 = document.getElementById("last2").value;
		studentID2 = document.getElementById("studentID2").value;
		queryString+="&first2="+first2+"&last2="+last2+"&studentID2="+studentID2;
	}

	var skill = document.getElementById("skill").value;
	var instrument = document.getElementById("instrument").value;
	var location = document.getElementById("location").value;
	switch(location) {
		case "Agriculture Engineering Building":
			location = "AGM";
			break;
		case "Austin (Mark) Technical and Engineering Building":
			location = "AUS";
			break;
		case "Benson (Ezra Taft) Biological Sciences Building":
			location = "BEN";
			break;
		case "BYU-Idaho Center":
			location = "BCTR";
			break;
		case "Clarke (John L.) Building":
			location = "CLK";
			break;
		case "Hinckley (Gordon B.) Building":
			location = "HIN";
			break;
		case "Kirkham (Oscar A.) Building":
			location = "KRK";
			break;
		case "McKay (David O.) Library":
			location = "MCK";
			break;
		case "Ricks (Thomas E.) Building":
			location = "RKS";
			break;
		case "Romney (George S.) Sciences Building":
			location = "ROM";
			break;
		case "Smith (Joseph Fielding) Building":
			location = "SM";
			break;
		case "Snow (Eliza R.) Performing Arts Center":
			location = "SNO";
			break;
		case "Spori (Jacob) Building":
			location = "SPO";
			break;
		case "Taylor (John) Building":
			location = "TAY";
			break;
	}
	var room = document.getElementById("room").value;
	var time = document.getElementById("time").value;
	queryString+="&skill="+skill+"&instrument="+instrument+"&location="+location+"&room="+room+"&time="+time;
	return queryString;
}

function loadAJAX() { 
	var request="";
	var response="";

	//ajax request
	if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
		request=new XMLHttpRequest();
	}
	else {// code for IE6, IE5
		request=new ActiveXObject("Microsoft.XMLHTTP");
	}

	request.onreadystatechange=function() {
		if (request.readyState==4 && request.status==200) {
			response=request.responseText;
			console.log(response);
			document.getElementById("acts").innerHTML+=response;
		}
	}
	request.open("GET","onload.php",true);
	request.send();
}

function sendAJAX() { 
	var request ="";
	var validate = checkForm();
	if(validate	!= true)
	{
		return;
	}//check input fields

	var url = buildQueryString();
	console.log(url);
	var response="";

	//ajax request
	if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
		request=new XMLHttpRequest();
	}
	else {// code for IE6, IE5
		request=new ActiveXObject("Microsoft.XMLHTTP");
	}

	request.onreadystatechange=function() {
		if (request.readyState==4 && request.status==200) {
			response=request.responseText;
			console.log(response);
			document.getElementById("acts").innerHTML+=response;
		}
	}
	request.open("GET",url,true);
	request.send();
	document.getElementById("regform").reset();
}

