function moveToNextSlide() {
	var slidesObj = document.getElementsByClassName('div slide');
	var slideActivo = 1;
	var slideButObj = document.getElementsByClassName('slide-button');

	for(var i = 0; i < slidesObj.length; i++) {
		var slide = slidesObj[i];
		var slideClasses = slide.classList;

		var isActive = slideClasses.contains('active');
		if (isActive == true) {
			slideActivo = i + 1;
			slide.classList.remove('active');
			slideButObj[i].classList.remove('active');
		}
	}

	var nextSlide = slideActivo + 1;
	if (nextSlide > slidesObj.length) {
		nextSlide = 1;
	}

	for (var i = 0; i < slidesObj.length; i++) {
		var slide = slidesObj[i];
		
		if (i == (nextSlide - 1)) {
			slide.classList.add('active');
			slideButObj[i].classList.add('active');
		}
	}
}

setInterval(moveToNextSlide, 5000);

// TO DO - Melhorar esta function...!
function moveToSlide(elmt) {
	var slideButObj = document.getElementsByClassName('slide-button');
	var slideObj = document.getElementsByClassName('div slide');

	for(var i = 0; i < slideButObj.length; i++) {
		slideObj[i].classList.remove('active');
		slideButObj[i].classList.remove('active');
	}

	elmt.classList.add('active');
	var indexElmt = [elmt.classList.contains('slide1'), elmt.classList.contains('slide2'), elmt.classList.contains('slide3')];

	for (var i = 0; i < indexElmt.length; i++)
		if (indexElmt[i] == true)
			slideObj[i].classList.add('active');
}