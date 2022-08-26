function showPage(pagina) {
	var element = document.querySelector('#' + pagina + ' .' + pagina + '.section');
	if (element) {
		element.className = "section";
	}

	var links = document.getElementsByClassName('link');

	for(var i = 0; i < links.length; i++) {
		links[i].classList.remove("active");
	}
	
	var menuObj = document.getElementById('link-'+pagina);
	menuObj.classList.add('active');

	var pages = document.getElementsByClassName('section');

	for(var j = 0; j < pages.length; j++) {
		pages[j].classList.remove("active");
	}
	
	var page = document.getElementById(pagina);
	page.classList.add('active');
}

function showLogin(pagina) {
	var loginObj = document.getElementById('link-'+pagina);
	var loginObjClasses = loginObj.classList;
	var loginSectionObj = document.getElementById('login');
	var ifProfileActive = document.getElementById('perfil');

	if (loginObjClasses.contains('active')) {
		if (ifProfileActive.classList.contains('active')) {
			if (loginSectionObj.classList.contains('active')) {
				loginSectionObj.classList.remove('active');
			} else {
				loginSectionObj.classList.add('active');
			}
		} else {
			loginObjClasses.remove('active');
			loginSectionObj.classList.remove('active');
		}
	} else {
		loginObjClasses.add('active');
		loginSectionObj.classList.add('active');
	}
}

function profilePage() {
	var profileObj = document.getElementById('perfil');
	var profileClasses = profileObj.classList;
	var activeSection = document.querySelector('.section.active');
	var activeLink = document.querySelector('.link.active');

	if (!profileClasses.contains('active')) {
		profileClasses.add('active');
		activeSection.classList.remove('active');
		activeLink.classList.remove('active');
	}

	document.getElementById('login').classList.remove('active');
}