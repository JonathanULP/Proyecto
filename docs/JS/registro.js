function validar(){
	
	var m = document.registro.nombre.value;
  var expreg = /^[A-Z]([a-z]){2}/

  if(!expreg.test(m)){

    alert("El nombre NO es correcto");
  return false;}

	
	var ed = document.registro.edad.value
	if(ed < 18 || !Number.parseInt(ed) ){
		alert("Por favor ingrese una edad validad y mayor a 18");
		return false;
	}
	
	var buscoarroba=false;
    var buscopunto=false;
	var posarroba = -1;
	var pospunto = -1;
	var valido;
	var valor = document.registro.correo.value;
  
	for(var i=0; i < valor.length;i++){
	  
	  if(valor.charAt(i)=="@"){
		  buscoarroba=true;
		  posarroba=i;
	  }
	  
	  else if(valor.charAt(i) =="."){
		  buscopunto=true;
		  pospunto=i;
	  }
	}
	  
	  if((posarroba < pospunto) && (buscoarroba && buscopunto)){
		
		  valido = true;
	  }
	  
	  else{
	alert("Disculpe ingrese una direccion valida");
	return false;
	}	 


	alert("Muchas gracias por registrarse");
	return true;
}



$(document).ready(function(){
	
	$(".limpiar").click(function(){
		
		$(".cliar").val('');
	});
});