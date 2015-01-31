$(document).ready(function() {

	$('#switch .item').each(function(i) {
		
		$(this).on('click', { num: i }, function(e) {
			
			$('.layer').removeClass('current').eq(e.data.num).addClass('current');
			
		});
		
	});
	
});