$(function() {
	$('#sgc-navbar').on('click', function() {
		$(this).collapse('hide');
	});
});

$(document).on('click','#sgc-navbar',function(e) {
	alert("A");
    if( $(e.target).is('a') ) {
        $(this).collapse('hide');
    }
});
