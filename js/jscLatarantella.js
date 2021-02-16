// JavaScript Document

$(document).ready(function(){
 	$(".ItemCardapioNome, .ItemCardapioIngredientes, .CardapioSaborDoce").hover(
			function(){$(this).parent().addClass("ItemCardapioHover");},
			function(){$(this).parent().removeClass("ItemCardapioHover");}
	);
});