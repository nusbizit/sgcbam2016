$(function() {
	$('#sgc-navbar li a').on('click', function() {
		// Only enable for mobile view otherwise scrollbars appear randomly
		if ($(document).width() <= 768)
			$('.navbar-toggle').click();
	});
});
