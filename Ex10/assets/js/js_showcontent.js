
	function showPage(page) {
		if ($('#products-list').hasClass('inactive')) {
			$('#products-list').removeClass('inactive');
			$('#perfil').removeClass('active');
		}
		var valor = $(page).text().toLowerCase();
		$('.product-item').removeClass('active');
		$('.product-item').removeClass('inactive');
		if($('.product-item').hasClass(valor)) {
			$('.product-item').addClass('inactive');
			$('.product-item.' + valor).addClass('active');
			$('.product-item.' + valor).removeClass('inactive');
		}

		if (valor == 'home') {
			$('.product-item').removeClass('active');
			$('.product-item').removeClass('inactive');
		}
	}

	$('#products-filter a').on('click', function() {
		showPage($(this));
	});