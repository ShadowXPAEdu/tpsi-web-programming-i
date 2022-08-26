function actualizarCart(el) {
	var str = "";
	var tam = $('.cart-add-item [type="text"]').length;
	for (var i = 0; i < tam; i++) {
		var test = $('.cart-add-item [type="text"]')[i];
		var test2 = parseInt($(test).val());
		$(('.li_' + i)).remove();
		if (test2 > 0) {
			str = "<li class='" + "li_" + i + "'>" + $($(test).parent()).parent().children(".product-name").html() + " - " + test2 + "</li>";
			$('#cart-items').append(str);
		}
	}
}

function verificarCart(el) {
	var acu = 0;
	var acu2 = 0;
	for (var i = 1; i < $('.cart-add-item [type="text"]').length; i++) {
		var test = $('.cart-add-item [type="text"]')[i];
		acu += parseInt($(test).val());
		acu2 += parseInt(parseInt($(test).val()) * ($(test).parent().parent().children('.product-price').text().slice(0, $(this).text().indexOf(' '))));
	}

	$("#cart-number").text("Cart (" + acu + ") - " + (acu2) + " €");

	actualizarCart(el);
}

function toggleCart() {
	if ($('#cartzinho').hasClass('active'))
		$('#cartzinho').removeClass('active');
	else
		$('#cartzinho').addClass('active');
}

function changeValue(el, valor) {
	var elPar = $(el).parent().children('[type="text"]');
	var valorD = (parseInt($(el).parent().children('[type="text"]').val()));

	if (!(valorD < 0))
		elPar.val(parseInt($(el).parent().children('[type="text"]').val()) + valor);

	if (elPar.val() < 0)
		elPar.val(0);

	verificarCart(el);
}

var $min = $('[value="-"]');
var $max = $('[value="+"]');

$min.addClass("but-min");
$max.addClass("but-add");

$min.on('click', function () { changeValue($(this), -1); });
$max.on('click', function () { changeValue($(this), 1); });

$('.cart-add-item [type="text"]').on("input", function() {
	if (!($(this).val() >= 0))
		$(this).val(0);

	if($(this).val() == "" || $(this).val() == " ")
		$(this).val(0);

	verificarCart();
});

$('#cart-number').click(function () { toggleCart(); } );

verificarCart();