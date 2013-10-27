$(document).ready(function(){
	// --------------------------------------
	// elementos ocultos iniciales
	$('#BorrarDesorden').hide();

	$('#probarToggle').hide();
	//---------------------------------------
	// aplicando estilos CSS desde javascript
	$('h1').css({
		'color': '#454657',
		'font-size': '88px',
	});
	//aplicando clase 'colores' del documento 'estilos-laboratorio.css'
	$('section').addClass('colores');
	//aplicando clase 'animacion'+
	$('#animaciones').addClass('animacion');
	// Quitando estilo a traves de JQuery
	$('#quitarClase').click(function(event){
		$('section').removeClass('colores');//.removeAttr('class');
	});
});