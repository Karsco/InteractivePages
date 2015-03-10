function validateForm(){
	var userName = document.contactForm.customerName.value;
	var email = document.contactForm.email.value;
	var addr1 = document.contactForm.address1.value;
	var town = document.contactForm.town.value;
	var phone = document.contactForm.phoneNum.value;	
	
	if(userName.indexOf('Enter') != -1)
	{
		alert('You must enter a name');
	}
	else if(email=="")
	{
		alert('You must enter a valid email address');
	}
	else
	{
		alert('Checking form ' + '\n' + userName + '\n' + email + '\n' + addr1 + '\n' + town + '\n' + phone);
	}	
}

function clearText(thisField){
	thisField.value="";
}