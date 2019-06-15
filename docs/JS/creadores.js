$(document).ready(function(){
$("#creador").click(function(){

	$('#cuerpo').toggle(
	    function () {

				
				
				$("#cuerpo").addClass("creadores");
            },
	    function () {
			
                  $("#cuerpo").addClass("creadores");
            }
        );
});
});
