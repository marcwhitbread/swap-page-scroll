$(document).ready(function() {

	
	
});

function close_all() {
	
	$('body').removeClass('menu-open').removeClass('overlay-1');
	
	$('.content-layer').not('.overlay-1').css('max-height', 'none');
	$('.layer').not('.menu').css('max-height', 'none');
	
	window.scrollTo(0, 0);
	
}

function menu_op() {
	close_all();
	
	$('body').addClass('menu-open');
	
	$('.layer').not('.menu').css('max-height', $('.layer.menu').height() + 'px');
	
	window.scrollTo(0, 0);
}

function overlay_op() {
	close_all();
	
	$('body').addClass('overlay-1');
	
	$('.content-layer').not('.overlay-1').css('max-height', $('.content-layer.overlay-1').height() + 'px');
	
	window.scrollTo(0, 0);
}