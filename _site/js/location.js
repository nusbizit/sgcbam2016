function init_map() {
	var my_location = {lat: 1.2946937, lng: 103.7741};

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 17,
        center: my_location
    });

    var marker = new google.maps.Marker({
        position: my_location,
    	map: map,
		title: 'NUS School of Computing COM2'
    });
}
