/*
	Author: Dayoon Lee (301034178), Yoonseop Lee (301037418)
	Date: March 9, 2019
	Filename: js.js
*/

"use strict";
var formValidity = true;

// remove default options
function removeSelectDefaults() {
	var emptyBoxes=document.getElementsByTagName("select");
	for (var i=0; i<emptyBoxes.length; i++) {
		
		emptyBoxes[i].selectedIndex=-1;		
	}
};

// set up cities and provinces accroding to country
function setUpCityAndProvince() {
	var countryOption = document.getElementById("country").value;
	var cityOptions = document.querySelectorAll("#city" + " option");
	var provinceOptions = document.querySelectorAll("#province" + " option");
	if (countryOption === "US") {
		cityOptions[0].innerHTML = "New York City";
		cityOptions[1].innerHTML = "Chicago";
		cityOptions[2].innerHTML = "Houston";
		cityOptions[3].innerHTML = "Los Angeles";
		cityOptions[4].innerHTML = "Philadelphia";
		cityOptions[5].innerHTML = "Phoenix";
		cityOptions[6].innerHTML = "San Antonio";
		cityOptions[7].innerHTML = "San Diego";
		cityOptions[8].innerHTML = "Dallas";

		provinceOptions[0].innerHTML = "AK";
		provinceOptions[1].innerHTML = "AZ";
		provinceOptions[2].innerHTML = "CA";
		provinceOptions[3].innerHTML = "CT";
		provinceOptions[4].innerHTML = "FL";
		provinceOptions[5].innerHTML = "HI";
		provinceOptions[6].innerHTML = "IL";
		provinceOptions[7].innerHTML = "IN";
		provinceOptions[8].innerHTML = "KS";
		provinceOptions[9].innerHTML = "MI";
		provinceOptions[10].innerHTML = "NY";
		provinceOptions[11].innerHTML = "TX";
		provinceOptions[12].innerHTML = "UT";
	}
	if (countryOption === "CA") {
		cityOptions[0].innerHTML = "Toronto";
		cityOptions[1].innerHTML = "Vancouver";
		cityOptions[2].innerHTML = "Ottawa";
		cityOptions[3].innerHTML = "Montreal";
		cityOptions[4].innerHTML = "Calgary";
		cityOptions[5].innerHTML = "Edmonton";
		cityOptions[6].innerHTML = "Winnipeg";
		cityOptions[7].innerHTML = "Halifax";
		cityOptions[8].innerHTML = "Saskatoon";

		provinceOptions[0].innerHTML = "AB";
		provinceOptions[1].innerHTML = "BC";
		provinceOptions[2].innerHTML = "MB";
		provinceOptions[3].innerHTML = "NB";
		provinceOptions[4].innerHTML = "NL";
		provinceOptions[5].innerHTML = "NS";
		provinceOptions[6].innerHTML = "ON";
		provinceOptions[7].innerHTML = "PE";
		provinceOptions[8].innerHTML = "QC";
		provinceOptions[9].innerHTML = "SK";
		provinceOptions[10].innerHTML = "YT";
		provinceOptions[11].innerHTML = "NU";
		provinceOptions[12].innerHTML = "NT";
	}
	if (countryOption === "CN") {
		cityOptions[0].innerHTML = "Beijing";
		cityOptions[1].innerHTML = "Shanghai";
		cityOptions[2].innerHTML = "Hong Kong";
		cityOptions[3].innerHTML = "Taipei";
		cityOptions[4].innerHTML = "Guangzhou";
		cityOptions[5].innerHTML = "Nanjing";
		cityOptions[6].innerHTML = "Tianjin";
		cityOptions[7].innerHTML = "Fuzhou";
		cityOptions[8].innerHTML = "Macau";

		provinceOptions[0].innerHTML = "BJ";
		provinceOptions[1].innerHTML = "FJ";
		provinceOptions[2].innerHTML = "GD";
		provinceOptions[3].innerHTML = "GX";
		provinceOptions[4].innerHTML = "HK";
		provinceOptions[5].innerHTML = "HL";
		provinceOptions[6].innerHTML = "JS";
		provinceOptions[7].innerHTML = "JX";
		provinceOptions[8].innerHTML = "MO";
		provinceOptions[9].innerHTML = "SC";
		provinceOptions[10].innerHTML = "SH";
		provinceOptions[11].innerHTML = "TJ";
		provinceOptions[12].innerHTML = "TW";
	}
	if (countryOption === "IN") {
		cityOptions[0].innerHTML = "Mumbai";
		cityOptions[1].innerHTML = "New Delhi";
		cityOptions[2].innerHTML = "Kolkata";
		cityOptions[3].innerHTML = "Chennai";
		cityOptions[4].innerHTML = "Bangalore";
		cityOptions[5].innerHTML = "Hyderabad";
		cityOptions[6].innerHTML = "Ahmedabad";
		cityOptions[7].innerHTML = "Pune";
		cityOptions[8].innerHTML = "Surat";

		provinceOptions[0].innerHTML = "AP";
		provinceOptions[1].innerHTML = "AR";
		provinceOptions[2].innerHTML = "AS";
		provinceOptions[3].innerHTML = "BR";
		provinceOptions[4].innerHTML = "CG";
		provinceOptions[5].innerHTML = "GA";
		provinceOptions[6].innerHTML = "GJ";
		provinceOptions[7].innerHTML = "HR";
		provinceOptions[8].innerHTML = "HP";
		provinceOptions[9].innerHTML = "JK";
		provinceOptions[10].innerHTML = "JH";
		provinceOptions[11].innerHTML = "KA";
		provinceOptions[12].innerHTML = "KL";
	}
}

// validate entered first name and last name
function validateFirstname() {
	var firstName = document.getElementById("firstName");
	var errorDiv = document.getElementById("fNameError");
	try {
		if (firstName.value.length > 15) {
			throw "First name must be maximum 15 characters.";
		}
		else {
			firstName.style.background = "";
			errorDiv.innerHTML = "";
			firstName.value=firstName.value.charAt(0).toUpperCase() + firstName.value.slice(1);
		}
	}
	catch(msg) {
		errorDiv.style.margin = "5px 0 0 0";
		errorDiv.style.display = "block";
		errorDiv.innerHTML = msg;
		firstName.style.background = "rgb(255,233,233)";
	}
 }
 function validateLastname() {
	var lastName = document.getElementById("lastName");
	var errorDiv = document.getElementById("lNameError");
	try {
		if (lastName.value.length > 15) {
			throw "Last name must be maximum 15 characters.";
		}
		else {
			lastName.style.background = "";
			errorDiv.innerHTML = "";
			lastName.value=lastName.value.charAt(0).toUpperCase() + lastName.value.slice(1);
		}
	}
	catch(msg) {
		errorDiv.style.margin = "5px 0 0 0";
		errorDiv.style.display = "block";
		errorDiv.innerHTML = msg;
		lastName.style.background = "rgb(255,233,233)";
	}
 }

// validate entered password
function validatePassword() {
	var password = document.getElementById("password");
	var passwordConfirm = document.getElementById("passwordConfirm");
	var errorDiv = document.getElementById("passwordError");
	try {
		if (/.{8,}/.test(password.value) === false || password.value.length > 12) {
			throw "Password must be 8 to 12 characters.";
		} else if (password.value.localeCompare(passwordConfirm.value) !== 0) {
		  	throw "Passwords must match";
		}  else if (/\d/.test(password.value) === false || /[\\]/.test(password.value) === false || /[.]/.test(password.value) === false) {
			throw "Password must contain all of the followings: numbers, dot(.) and back slash(\\)";
		}
		else {
		password.style.background = "";
		passwordConfirm.style.background = "";
		errorDiv.innerHTML = "";
		}
	}
	catch(msg) {
		errorDiv.style.margin = "5px 0 0 0";
		errorDiv.style.display = "block";
		errorDiv.innerHTML = msg;
		password.style.background = "rgb(255,233,233)";
		passwordConfirm.style.background = "rgb(255,233,233)";
	}
}

// validate entered phone number
function validatePhoneNumber() {
	var phoneNum = document.getElementById("phoneNum");
	var errorDiv = document.getElementById("phoneNumError");
	try {
		if (phoneNum.value.length != 10 || /\d/.test(phoneNum.value) === false) {
			throw "Phone number must be 10 digits.";
		}
		else {
		phoneNum.style.background = "";
		errorDiv.innerHTML = "";
		}
	}
	catch(msg) {
		errorDiv.style.margin = "5px 0 0 0";
		errorDiv.style.display = "block";
		errorDiv.innerHTML = msg;
		phoneNum.style.background = "rgb(255,233,233)";
	}
}

// validate entered email
function validateEmail() {
	var email = document.getElementById("email");
	var errorDiv = document.getElementById("emailError");
	try {
		if (/[@]/.test(email.value) === false || /[.]/.test(email.value) === false) {
			throw "Email is invalid.";
		}
		else {
		email.style.background = "";
		errorDiv.innerHTML = "";
		}
	}
	catch(msg) {
		errorDiv.style.margin = "5px 0 0 0";
		errorDiv.style.display = "block";
		errorDiv.innerHTML = msg;
		email.style.background = "rgb(255,233,233)";
	}
}

// validate entered postal code
function validatePostalCode() {
	var countryOption = document.getElementById("country").value;
	var postalCode = document.getElementById("postalCode");
	var errorDiv = document.getElementById("postalCodeError");
	try {
		if (countryOption === "CA" && /[A-Za-z]\d[A-Za-z] ? \d[A-Za-z]\d$/.test(postalCode.value) === false || countryOption === "US" && /^[0-9]{5}$/.test(postalCode.value) === false ) {
			throw "Postal code is wrong.";
		}
		else {
		postalCode.style.background = "";
		errorDiv.innerHTML = "";
		}
	}
	catch(msg) {
		errorDiv.style.margin = "5px 0 0 0";
		errorDiv.style.display = "block";
		errorDiv.innerHTML = msg;
		postalCode.style.background = "rgb(255,233,233)";
	}
}

// validate fieldsets and shows error messages
function validateFields(fieldsetId) {
	var inputElements = document.querySelectorAll("#" + fieldsetId + " input");
	var selectElements = document.querySelectorAll("#" + fieldsetId + " select" + "[required]");
	var errorDiv = document.querySelectorAll("#" + fieldsetId + " .errorMessage")[0];
	var fieldsetValidity = true;
	var elementCount = inputElements.length;
	var currentElement;
	try {
		for (var i=0; i < elementCount; i++) {
			currentElement = inputElements[i];
			if (currentElement.value === "") {
				currentElement.style.background = "rgb(255, 233, 233)";
				currentElement.style.border = "solid red 1px";
				fieldsetValidity = false;
			} else {
				currentElement.style.background = "white";
			}
		}
		elementCount = selectElements.length;
		for (var i=0; i < elementCount; i++) {
			currentElement = selectElements[i];
			if (currentElement.selectedIndex === -1) {
				currentElement.style.border = "1px solid red";
				fieldsetValidity = false;
			} else {
				currentElement.style.border = "";
			}
		}
		if (fieldsetValidity === false) {
				throw "Please complete all fields.";
		} else {
			errorDiv.style.display = "none";
			errorDiv.innerHTML = "";
		}
	}
	catch (msg) {
		errorDiv.style.display = "block";
		errorDiv.style.color = "#FE0000";
		errorDiv.style.padding = "20px 0 0 15px";
		errorDiv.innerHTML = msg;
		formValidity = false;
	}
}

// validate the form and shows a validation error
function validateForm(evt) {
	evt.preventDefault();
	formValidity = true;
	validateFields("personalInfo");
	if (formValidity === true) {
		document.getElementById("validationErrorMessage").innerHTML="";
		document.getElementById("validationErrorMessage").style.display = "none";
		document.getElementsByTagName("form")[0].submit();
	} else {
		document.getElementById("validationErrorMessage").innerHTML = "Please fix the indicated problems and then resubmit your form.";
		document.getElementById("validationErrorMessage").style.display="block";
		document.getElementById("validationErrorMessage").style.paddingTop="15px";
		document.getElementById("validationErrorMessage").style.margin="30px 0";
		document.getElementById("validationErrorMessage").style.height="30px";
		document.getElementById("validationErrorMessage").style.backgroundColor="#FFF";
		document.getElementById("validationErrorMessage").style.opacity="0.7";
		document.getElementsByClassName("intro")[0].style.paddingBottom="0";
		scroll(0,0);
	}
}

// create an event listener on the submit event for the first form and triggers the validateForm() function
function createEventListeners() {
	var form = document.getElementsByTagName("form")[0];
	var firstName = document.getElementById("firstName");
	var lastName = document.getElementById("lastName");
	var passwordConfirm = document.getElementById("passwordConfirm");
	var email = document.getElementById("email");
	var phoneNum = document.getElementById("phoneNum");
	var postalCode = document.getElementById("postalCode");
    if (firstName.addEventListener) {
		form.addEventListener("submit", validateForm, false);
		firstName.addEventListener("change", validateFirstname, false);
		lastName.addEventListener("change", validateLastname, false);
		passwordConfirm.addEventListener("change", validatePassword, false);
		email.addEventListener("change", validateEmail, false);
		phoneNum.addEventListener("change", validatePhoneNumber, false);
		postalCode.addEventListener("change", validatePostalCode, false);
    }
    else if (firstName.attachEvent) {
		form.attachEvent("onsubmit", validateForm);
		firstName.attachEvent("onchange", validateFirstname);
		lastName.attachEvent("onchange", validateLastname);
		passwordConfirm.attachEvent("onchange", validatePassword);
		email.attachEvent("onchange", validateEmail);
		phoneNum.attachEvent("onchange", validatePhoneNumber);
		postalCode.attachEvent("onchange", validatePostalCode);
	}
}

// run initial form configuration functions
function setUpPage() {
	removeSelectDefaults();
	createEventListeners();
}

// trigger the setUpPage() function
if (window.addEventListener) {
    window.addEventListener("load", setUpPage, false);
}
else if (window.attachEvent) {
    window.attachEvent("onload", setUpPage);
}