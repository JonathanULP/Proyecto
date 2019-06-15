function validar(){
	
	var puntaje = document.opinion.puntaj.value
	
	if(!Number.parseInt(puntaje)) {
		alert("Por favor ingresa un puntaje correcto");
		document.opinion.puntaj.focus();
		return false;
		
	}
	else if ((puntaje < 0 ) || (puntaje > 10)){
		alert("Ingresa un puntaje correcto");
		document.opinion.puntaj.focus();
		return false;
	}
	
	if(document.opinion.util[0].checked==false && document.opinion.util[1].checked==false)
    {
    alert('Selecciona una respuesta por favor');
    return false;
	}
	
	if(document.opinion.op.selectedIndex==0)
	{
		alert("Por favor elegi una opcion");
		return false;
	}
	
	alert("Muchas gracias por tomarte un momento para ayudar a la pagina");
	return true;
}