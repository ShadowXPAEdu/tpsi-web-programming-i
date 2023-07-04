function loadProducts() {
	$.ajax({
		url: 'http://classes.pedrodsa.com/products/',

		success: function(prods) {
			drawProducts(prods);
		},

		error: function(prods) {
			alert('Erro ao fazer a ligação');
		}
	})
}

function drawProducts(products) {
	for (var i = 0; i < products.length; i++) {
		var clone = $('#page-body > .template').clone();
		$(clone).addClass(products[i].type);
		$(clone).removeClass('template');
		$(clone).attr('data-product-id', products[i].id);
		$(clone).find('.product-name').text(products[i].name);
		$(clone).find('.product-description').text(products[i].description);
		$(clone).find('.product-price').text(products[i].price + " " + products[i].currency); // + " " + products[i].currency
		$(clone).find('.product-image img').attr('src', products[i].image);
		$('#products-list').append(clone);
	}
}

loadProducts();