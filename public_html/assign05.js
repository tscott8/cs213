function validateUser() {
	var FirstName = document.getElementById("FirstName");
	if (!FirstName.value.length) {
		FirstName.focus();
		return false;
	}
	var LastName = document.getElementById("LastName");
	if (!LastName.value.length) {
		LastName.focus();
		return false;
	}
	var Address = document.getElementById("Address");
	if (!Address.value.length) {
		Address.focus();
		return false;
	}

	var Phone = document.getElementById("Phone");
	if (!Phone.value.length) {
		Phone.focus();
		return false;
	}
	var CardNum = document.getElementById("CardNum");
	if (!CardNum.value.length) {
		CardNum.focus();
		return false;
	}
	var CardExp = document.getElementById("CardExp");
	if (!CardExp.value.length) {
		CardExp.focus();
		return false;
	}
	return true;	
}
function phoneValidate() {
	var dirtyString = document.getElementById("Phone").value
	var cleanString = dirtyString.replace(/[|&;$%@"<>()+,-]/g, "");
	if (cleanString.length > 10 | isNaN(cleanString)) {
		alert(cleanString + " is not a legal value for " + "Phone")
		CardNum.focus();
		return false;
	}
	else 
		document.getElementById("Phone").value=cleanString;
		return	true;
}
function cardValidate(){
	var dirtyString = document.getElementById("CardNum").value
	var cleanString = dirtyString.replace(/[|&;$%@"<>()+,-]/g, "");
	if (cleanString.length > 16 | isNaN(cleanString)) {
		alert(cleanString + " is not a legal value for " + "CardNum")
		CardNum.focus();
		return false;
	}
	else
		document.getElementById("CardNum").value=cleanString;
		return true;
}
function calcTotal() {
	var totalA = 0;
	var totalB = 0;
	var totalC = 0;
	var totalD = 0;
	if (document.getElementById("addA").checked)
		totalA = document.getElementById("qtyA").value*399.99;
	if (document.getElementById("addB").checked)
		totalB = document.getElementById("qtyB").value*229.99;
	if (document.getElementById("addC").checked)
		totalC = document.getElementById("qtyC").value*119.99;
	if (document.getElementById("addD").checked)
		totalD = document.getElementById("qtyD").value*199.99;
	var totalAll = totalA + totalB + totalC + totalD;
	document.getElementById("totalAll").value="$"+totalAll.toFixed(2);
}

function setFocus() {
	document.getElementById("FirstName").focus();
}
