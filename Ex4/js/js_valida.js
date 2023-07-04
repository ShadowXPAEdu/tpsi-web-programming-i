function x() {
	
	var val = true;
	
	// Nome
	var nomeObj = document.getElementById("name");
	var nome = nomeObj.value;
	
	if (nome == "" || nome == undefined) {
		alert("O campo 'Nome' é obrigatório!");
		nomeObj.blur();
		nomeObj.focus();
		nomeObj.scrollIntoView();
		val = false;
	} else if (nome.length < 3 || nome.length > 10) {
		alert("Nome tem de ter entre [3-10] caracteres!");
		nomeObj.blur();
		nomeObj.focus();
		nomeObj.scrollIntoView();
		val = false;
	}
	
	// E-mail
	var emailObj = document.getElementById("email");
	var email = emailObj.value;
	var emailVal = /(\w+)@(.+)\.(\w+)$/;
	
	if (email == "" || email == undefined) {
		alert("O campo 'E-mail' é obrigatório!");
		emailObj.blur();
		emailObj.focus();
		emailObj.scrollIntoView();
		val = false;
	} else if (email.match(emailVal) == null) {
		alert("E-mail inválido! Tente novamente.");
		emailObj.blur();
		emailObj.focus();
		emailObj.scrollIntoView();
		val = false;
	}
	
	// Select SO
	var selectObj = document.getElementById("so");
	var selectV = selectObj.value;
	
	if (selectV == "0") {
		alert("O campo '(SO)' é obrigatório!");
		selectObj.blur();
		selectObj.focus();
		selectObj.scrollIntoView();
		val = false;
	}
	
	// Password
	var pwObj = document.getElementById("pass");
	var pw = pwObj.value;
	var conf_pwObj = document.getElementById("pass2");
	var conf_pw = conf_pwObj.value;
	
	if (pw == "" || pw == undefined) {
		alert("O campo 'Password' é obrigatório!");
		pwObj.blur();
		pwObj.focus();
		pwObj.scrollIntoView();
		val = false;
	} else if (pw != conf_pw) {
		alert("As passwords têm de ser iguais!");
		conf_pwObj.blur();
		conf_pwObj.focus();
		conf_pwObj.scrollIntoView();
		val = false;
	}
	
	// Checkbox
	var checkBoxObj = document.getElementById("check");
	var check = checkBoxObj.checked;
	
	if (!check) {
		alert("É obrigatório permitir o uso desta informação para fins estatísticos!");
		checkBoxObj.blur();
		checkBoxObj.focus();
		checkBoxObj.scrollIntoView();
		val = false;
	}

	if (val) {
		return confirm("Formulário válido.\nDeseja enviar?");
	}
	
	return val;
}