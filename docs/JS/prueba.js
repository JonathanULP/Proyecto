$(document).ready(function(){
	
	$("#nn").mouseover(function(){
			
		$(this).animate({width:"70%", opacity:"0.4"},1500);
	});
	
	$("#nn").mouseout(function(){
		
		$(this).animate({width:"100%", opacity:"100"},1500);
	});
});