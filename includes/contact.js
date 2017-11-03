function validate() {
	var fail = 0;
	var format = 0;
	
	if (document.getElementById('firstname').value=="") {
		document.getElementById('firstname').style.border="1px solid red";
		fail++;
	}
	if (document.getElementById('lastname').value=="") {
		document.getElementById('lastname').style.border="1px solid red";
		fail++;
	}
	if (document.getElementById('contactphone').value=="") {
		document.getElementById('contactphone').style.border="1px solid red";
		fail++;
	}
	if (IsNumeric(document.getElementById('contactphone').value)==false) {
		document.getElementById('contactphone').style.border="1px solid red";
		format++;
	}
	if (document.getElementById('companyname').value=="") {
		document.getElementById('companyname').style.border="1px solid red";
		fail++;
	}
	if (document.getElementById('contactemail').value=="") {
		document.getElementById('contactemail').style.border="1px solid red";
		fail++;
	}
	if (fail>0) {
		alert ("You are missing required information");
	}
	else if (format>0) {
		alert ("Phone number must be (XXX) XXX-XXXX OR XXXXXXXXXX");	
	}
	else {
		document.contact.submit();
	}
}

function IsNumeric(strString) //  check for valid numeric strings	
{
	var ret = 0;
	strString = strString.replace(".", "");
	strString = strString.replace(".", "");
	strString = strString.replace("-", "");
	strString = strString.replace("-", "");
	strString = strString.replace("(", "");
	strString = strString.replace(")", "");
	strString = strString.replace(" ", "");
	if(!/\D/.test(strString)) { ret = true; }//IF NUMBER
	else if(/^\d+\.\d+$/.test(strString)) { ret = true; }//IF A DECIMAL NUMBER HAVING AN INTEGER ON EITHER SIDE OF THE DOT(.)
	else { ret = false };
	return ret;
}
