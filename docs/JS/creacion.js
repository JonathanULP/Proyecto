$(document).ready(function(){  

$("#crear").click(function(){
	
	$(".cuerpo").removeClass("worl");
	$(".cuerpo").removeClass("cri");
	$(".cuerpo").removeClass("camp");
	$(".cuerpo").removeClass("creacion");
	$(".cuerpo").addClass("creadores");

	
	
         
});

$("#creador").click(function(){
	
	$(".cuerpo").removeClass("worl");
	$(".cuerpo").removeClass("cri");
	$(".cuerpo").removeClass("camp");
	$(".cuerpo").removeClass("creadores");
	$(".cuerpo").addClass("creacion");
	
	
				
});

$("#campeon").click(function(){
	
	$(".cuerpo").removeClass("worl");
	$(".cuerpo").removeClass("cri");
	$(".cuerpo").removeClass("creacion");
	$(".cuerpo").removeClass("creadores");
	$(".cuerpo").addClass("camp");
	
	
				
});

$("#crisis").click(function(){
	
	$(".cuerpo").removeClass("worl");
	$(".cuerpo").removeClass("camp");
	$(".cuerpo").removeClass("creacion");
	$(".cuerpo").removeClass("creadores");
	$(".cuerpo").addClass("cri");


});

$("#mundo").click(function(){
	
	$(".cuerpo").removeClass("cri");
	$(".cuerpo").removeClass("camp");
	$(".cuerpo").removeClass("creacion");
	$(".cuerpo").removeClass("creadores");
	$(".cuerpo").addClass("worl");


});

});