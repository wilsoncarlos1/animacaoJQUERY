/*

fadeIn() faz o elemento aparecer transparente
fadeOut() efeito reverso
toggle() faz os 2
slideDow()mostrar

*****************************
animate() criar animações

*/

$(document).ready(function(){
	$("#action").click(function(){
		$(".box").slideDown(5000);
	});
	$("#action1").click(function(){
		$(".box").slideUp(5000);
	});
	$("#action2").click(function(){
		$(".box").slideToggle(5000);
	});

	$("#animar").click(function(){
		$(".box").animate({left:"+=200px"},1000);
	});
	$("#animar2").click(function(){
		$(".box").animate({left:"-=200px"},1000);
	});
	$("#animar3").click(function(){
		$(".box").animate({top:"+=200px"},1000);
	});
	$("#animar4").click(function(){
		$(".box").animate({top:"-=200px"},1000);
	});
});
