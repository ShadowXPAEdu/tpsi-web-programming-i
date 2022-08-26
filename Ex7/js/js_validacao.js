function validaLogin(element) {

	var formObj = document.getElementById("form-login");
	var formElements = formObj.elements;
	var valida = true;

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

	// Password
	var passObj = document.getElementById("pass");
	var pass = passObj.value;

	if (pass == "" || pass == undefined) {
		alert("Password inválida!");
		passObj.blur();
		passObj.focus();
		passObj.scrollIntoView();
		valida = false;
	} else if (pass.length < 6) {
		alert("Password deve ser maior que 6 caracteres!");
		passObj.blur();
		passObj.focus();
		passObj.scrollIntoView();
		valida = false;
	}
	
	if (valida) {
		var relembrarValor = document.getElementById('relembrar').checked;

		document.getElementById('link-login').classList.add('inactive');
		document.getElementById('link-user').classList.remove('inactive');
		document.getElementById('link-user').classList.remove('active');
		document.getElementById('username').innerHTML = eMail.slice(0, eMail.indexOf('@'));
		document.getElementById('login').classList.remove('active');
		document.getElementById('login-form').classList.remove('active');
		document.getElementById('logout-form').classList.add('active');

		if (!relembrarValor) { // Funciona em alguns computadores...
			eMailObj.value = "";
		}
		passObj.value = "";
	}
	
	return valida;
}

function validaLogout() {
	document.getElementById('link-login').classList.remove('inactive');
	document.getElementById('link-login').classList.remove('active');
	document.getElementById('link-user').classList.add('inactive');
	document.getElementById('login').classList.remove('active');
	document.getElementById('login-form').classList.add('active');
	document.getElementById('logout-form').classList.remove('active');
	
	if (document.getElementById('perfil').classList.contains('active')) {
		document.getElementById('perfil').classList.remove('active');
		document.getElementById('home').classList.add('active');
		document.getElementById('link-home').classList.add('active');
	}
}