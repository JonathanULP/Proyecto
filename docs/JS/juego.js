
 
 
 $ (function(){
	 
 var res = prompt("CUAL ES TU MAXIMO IDOLO \n (Trata de escribir su apellido y no te olvides de comenzar con mayuscula");
	 
 if(res == "Riquelme"){
	 
	 $("#cualquiera").addClass("riquelme");
	 $("#jrr").fadeIn(5000);
	 
 }
 else if(res== "Palermo"){
	 
	 $("#cualquiera").addClass("palermo");
	 $("#loco").fadeIn(5000);
 }
 
 else if(res=="Palacio"){
	 
	 $("#cualquiera").addClass("palacio");
	 $("#joyita").fadeIn(5000);
 }
 
 else if(res== "Tevez"){
	 
	 $("#cualquiera").addClass("tevez");
	 $("#carlos").fadeIn(5000);
 }
 else{
	$("#cualquiera").addClass("default");
	
 }
 
 
 
 });
 
 
