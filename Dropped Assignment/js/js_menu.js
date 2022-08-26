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