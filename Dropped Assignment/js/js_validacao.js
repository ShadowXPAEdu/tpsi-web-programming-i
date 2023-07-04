function showProgressBar(message) {	

	var progressBarObj = document.getElementById('progress-bar');
	var textoObj = document.getElementById('text-bar');

	if (message) {
		message = message;
	} else {
		message = "A carregar!";		// Erro?
	}

	textoObj.innerHTML = message;

	progressBarObj.style = "display: block;";
}

function actionUmm(teste) {
		// Funciona se voltar atrás
		if (teste) {
			function showBar() {
				window.location = "index.html";
			}

			showProgressBar('A redireccionar...');
			setTimeout(showBar, 10000);
			setTimeout(function(){ showProgressBar('Está a demorar muito tempo...'); }, 5000);
			return teste;
		} else {
			return teste;
		}
}

function validaForm(element) {

	var formObj = document.getElementById("form-login");
	var formElements = formObj.elements;
	var valida = true;

	// First Name
	var firstNameObj = document.getElementById("fName");
	var firstName = firstNameObj.value;

	if (firstName == "" || firstName == undefined || firstName.length < 2 || firstName.length > 20) {
		alert("Introduza o primeiro nome!\nO nome tem de ter pelo menos 2 letras, e um máximo de 20 letras.");
		firstNameObj.blur();
		firstNameObj.focus();
		firstNameObj.scrollIntoView();
		valida = false;
	}



	// Last Name
	var lastNameObj = document.getElementById("lName");
	var lastName = lastNameObj.value;

	if (lastName == "" || lastName == undefined || lastName.length < 2 || lastName.length > 20) {
		alert("Introduza o ultimo nome!\nO nome tem de ter pelo menos 2 letras, e um máximo de 20 letras.");
		lastNameObj.blur();
		lastNameObj.focus();
		lastNameObj.scrollIntoView();
		valida = false;
	}



	// E-mail
	var eMailObj = document.getElementById("email");
	var eMail = eMailObj.value;
	var eMailVal = /(\w+)@(.+)\.(\w+)$/;

	if (eMail == "" || eMail == undefined) {
		alert("Introduza o e-mail!");
		eMailObj.blur();
		eMailObj.focus();
		eMailObj.scrollIntoView();
		valida = false;
	} else if (eMail.match(eMailVal) == null) {
		alert("E-mail inválido! Tente novamente.");
		eMailObj.blur();
		eMailObj.focus();
		eMailObj.scrollIntoView();
		valida = false;
	}



	// Phone Number
	var phoneNumObj = document.getElementById("phoneNum");
	var phoneNum = phoneNumObj.value;
	var phoneNumVal = /^[^\d]+$/;

	if (phoneNum.match(phoneNumVal) || (phoneNum.length > 0 && phoneNum.length < 9)) {
		alert("Número inválido!");
		phoneNumObj.blur();
		phoneNumObj.focus();
		phoneNumObj.scrollIntoView();
		valida = false;
	}



	// City Name
	var cityNameObj = document.getElementById("cityName");
	var cityName = cityNameObj.value;

	if (cityName == "select") {
		alert("Seleccione a cidade!");
		cityNameObj.blur();
		cityNameObj.focus();
		cityNameObj.scrollIntoView();
		valida = false;
	}



	// Assunto
	var subjectObj = document.getElementById("topico");
	var subject = subjectObj.value;

	if (subject == "" || subject == undefined) {
		alert("Introduza o assunto!");
		subjectObj.blur();
		subjectObj.focus();
		subjectObj.scrollIntoView();
		valida = false;
	}



	// Message
	var messageObj = document.getElementById("message");
	var message = messageObj.value;

	if (message == "" || message == undefined) {
		alert("Introduza a mensagem!");
		messageObj.blur();
		messageObj.focus();
		messageObj.scrollIntoView();
		valida = false;
	}



	// Terms and Conditions
	var termsObj = document.getElementById("termsandconditions");
	var terms = termsObj.checked;

	if (!terms) {
		alert("Aceite os termos e condições!");
		termsObj.blur();
		termsObj.focus();
		termsObj.scrollIntoView();
		valida = false;		
	}

	return actionUmm(valida);
}