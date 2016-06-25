var fixed_time = new Date("Sat Sep 03 2016 09:00:00 GMT+0800 (Singapore Time)");
var time = (fixed_time.getTime() - (new Date()).getTime()) / 1000;
var initialOffset = 440;
var interval = setInterval(function() {
	// Days
	$("#count-day-display").text(parseInt((time / 86400)) + " Days");
	$('#count-day').css('stroke-dashoffset',
	  initialOffset - ((time / 86400) * (initialOffset / 112)));

	// Hours
	$("#count-hour-display").text(parseInt((time / 3600) % 24) + " Hours");
	$('#count-hour').css('stroke-dashoffset',
	  initialOffset - (((time / 3600) % 24) * (initialOffset / 24)));

	// Minutes
	$("#count-minute-display").text(parseInt((time / 60) % 60) + " Minutes");
	$('#count-minute').css('stroke-dashoffset',
	  initialOffset - (((time / 60) % 60) * (initialOffset / 60)));

	// Seconds
	$("#count-second-display").text(parseInt(time % 60) + " Seconds");
	$('#count-second').css('stroke-dashoffset',
	  initialOffset - ((time % 60) * (initialOffset / 60)));

	// Update Time
	if (time <= 0) clearInterval(interval);
	time = (fixed_time.getTime() - (new Date()).getTime()) / 1000;
}, 1000);
