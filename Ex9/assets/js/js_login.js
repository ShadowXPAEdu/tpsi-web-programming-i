// Toggle Login Tab
function toggleLoginTab() {
	var loginObj = document.getElementById('login');
	
	if (loginObj.classList.contains('active')) {
		loginObj.classList.remove('active');
	}
	else {
		loginObj.classList.add('active');
	}
}

// Valida Form
function validaLogin() {

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

		$('#link-login').addClass('inactive');
		$('#link-user').removeClass('inactive');
		$('#username').text(eMail.toUpperCase().slice(0, eMail.indexOf('@')));
		$('#login').removeClass('active');
		$('#login-form').removeClass('active');
		$('#logout-form').addClass('active');

		if (!relembrarValor) { // Funciona em alguns computadores...
			eMailObj.value = "";
		}
		passObj.value = "";
	}

	return valida;
}

function validaLogout() {
	$('#link-login').removeClass('inactive');
	$('#link-user').addClass('inactive');
	$('#login').removeClass('active');
	$('#login-form').addClass('active');
	$('#logout-form').removeClass('active');

	if (document.getElementById('perfil').classList.contains('active')) {
		$('#perfil').removeClass('active');
		$('#products-list').addClass('active');
		$('#link-home').addClass('active');
	}
}

function profilePage() {
	var perfilObj = document.getElementById('perfil');
	var profileClasses = perfilObj.classList;
	var activeSection = document.querySelectorAll('.section.active');

	if (!profileClasses.contains('active')) {
		for (var i = 0; i < activeSection.length; i++) {
			activeSection[i].classList.remove('active');
			activeSection[i].classList.add('inactive');
		}
		profileClasses.add('active');
		profileClasses.remove('inactive');
		$('#products-list').removeClass('active');
		$('#products-list').addClass('inactive');
	}
}

document.getElementById('link-login').addEventListener("click", function () { toggleLoginTab(); });
document.getElementById('link-user').addEventListener("click", function () { toggleLoginTab(); });
document.getElementById('form-login').addEventListener("submit", function () { validaLogin(); });
document.getElementById('logout-button').addEventListener("click", function () { validaLogout(); });
document.getElementById('profile-button').addEventListener("click", function () { profilePage(); });