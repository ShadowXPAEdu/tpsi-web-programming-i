// Trabalho por Pedro dos Santos Alves
// a21270246
// TPSI
// 4/6/2018

// Bloqueia no pesquisar mesmo com o ready e ajaxComplete...
$(document).ready(function() {
//	$(document).ajaxComplete(function(){
		setTimeout(function() {
			var d = new Date();

			if (window.location.href === "https://www.momondo.pt/hotels/" || window.location.href === "https://www.momondo.pt/hotels") {
				// Coloca "Coimbra" na pesquisa
				$('input[id$="-location"].useIcon').val('Coimbra');
				//

				// Se o número de quartos for maior que 1 diminui até 1
				if (parseInt($('div[id$="-rooms"]').attr('aria-valuenow')) > 1) {
				  for (var i = parseInt($('div[id$="-rooms"]').attr('aria-valuenow')); i > 1; i--) {
					var butaochato3 = $('div[id$="-rooms"] .decrementor-js');
					$(butaochato3[0]).trigger('click');
				  }
				}
				//

				// Se o número de crianças for maior que 0 diminui até 0
				if (parseInt($('div[id$="-children"]').attr('aria-valuenow')) > 0) {
					for (var j = parseInt($('div[id$="-children"]').attr('aria-valuenow')); j > 0; j--) {
					  var butaochato4 = $('div[id$="-children"] .decrementor-js');
					  $(butaochato4[0]).trigger('click');
				  }
				}
				//

				// Se o número de adultos não for 3 coloca o valor até 3
				if (parseInt($('div[id$="-adults"]').attr('aria-valuenow')) < 3) {
				  for (var k = parseInt($('div[id$="-adults"]').attr('aria-valuenow')); k < 3; k++) {
					var butaochato = $('div[id$="-roomsGuestsDropdown_content"] div[id$="-adults"][aria-valuenow] .keel-grid .col-numberbox-button > .incrementor-js');
					$(butaochato[0]).trigger('click');
				  }
				}
				else if (parseInt($('div[id$="-adults"]').attr('aria-valuenow')) > 3) {
				  for (var l = parseInt($('div[id$="-adults"]').attr('aria-valuenow')); l > 3; l--) {
					var butaochato2 = $('div[id$="-roomsGuestsDropdown_content"] div[id$="-adults"][aria-valuenow] .keel-grid .col-numberbox-button > .decrementor-js');
					$(butaochato2[0]).trigger('click');
				  }
				}
				else { }
				//

				// Faz click no butão "Pesquisar"
				$('button[id$="-submit"]').trigger('click');
			}
			else {
				var Nome = $('#list-1 .normalResults :nth-child(2) [id$="-mainItemWrapper"] .resultGrid .info .titleContainer').text().trim();
				var Preco = $('#list-1 .normalResults :nth-child(2) [id$="-mainItemWrapper"] .resultGrid .info h3.price').text().trim();
				var Desconto = $('#list-1 .normalResults :nth-child(2) [id$="-mainItemWrapper"] .resultGrid .good-deal').text().trim().slice(6);
				console.log("Nome: " + Nome + "\nPreço: " + Preco + "\nDesconto: " + Desconto);
				window.alert("Nome: " + Nome + "\nPreço: " + Preco + "\nDesconto: " + Desconto);
				if (Nome !== "" && Preco !== "") {
					$.ajax({
					  type: "POST",
					  url: "https://classes.pedrodsa.com/work/",
					  data: JSON.stringify({
						"numero_aluno": "a21270246",
						"turma": "TPSI",
						"email_aluno": "a21270246@alunos.isec.pt",
						"email_professor": "test@isec.pt",
						"url": "https://www.momondo.pt/hotels/",
						"dados": {
							"nome": Nome,
							"preço": Preco,
							"desconto": Desconto
                    	}
					  }),
					  dataType: "json",
					  contentType: "application/json",
					  success: function() { alert('Sucesso ao enviar.') },
					  error: function() { alert('Erro ao enviar.') }
					});
				}
				
				// pode ser outro domínio por isso os dados são enviados antes de clicar na primeira opção
				$('#list-1 .normalResults :nth-child(2) [id$="-mainItemWrapper"] .resultGrid .info .mainInfo .booking button[id$="-booking-bookButton"]').trigger('click');
			}
		}, 3000);
//	});
});