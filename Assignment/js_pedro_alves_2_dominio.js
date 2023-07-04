// 2º domínio...

setTimeout(function() {
  var Nome = $('h4 [class="pull-left"]').text().trim();
  var chato = $('.detail form .price-wrapper ul li span[class="price"]');
  var Preco = $(chato[1]).attr('data-value');
  window.alert("Nome: " + Nome + "\nPreço: " + Preco);
}, 3000);
