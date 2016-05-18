function init_map() {


	// Styling for map
	var styles = [
    {
        "featureType": "landscape",
        "stylers": [
            { "saturation": -100 },
            { "lightness": 0 },
            { "visibility": "on" }
        ]
    }, {
        "featureType": "poi",
        "stylers": [
            { "saturation": -100 },
            { "lightness": 0 },
            { "visibility": "simplified" }
        ]
    }, {
        "featureType": "road.highway",
        "stylers": [
            { "saturation": -100 },
            { "visibility": "simplified" }
        ]
    }, {
        "featureType": "road.arterial",
        "stylers": [
            { "saturation": -100 },
            { "lightness": 0 },
            { "visibility": "on" }
        ]
    }, {
        "featureType": "road.local",
        "stylers": [
            { "saturation": -100 },
            { "lightness": 0 },
            { "visibility": "on" }
        ]
    }, {
        "featureType": "transit",
        "stylers": [
            { "saturation": -100 },
            { "visibility": "simplified" }
        ]
    }, {
        "featureType": "administrative.province",
        "stylers": [
            { "visibility": "off" }
        ]
    }, {
        "featureType": "water",
        "elementType": "labels",
        "stylers": [
            { "visibility": "on" },
            { "lightness": -25 },
            { "saturation": -100 }
        ]
    }, {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            { "hue": "#ffff00" },
            { "lightness": -25 },
            { "saturation": -97 }
        ]
    }];

	var styledMap = new google.maps.StyledMapType(styles, {name: "Styled Map"});

	// Map Object
	var my_location = {lat: 1.3049, lng: 103.7725};
	var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 17,
        center: my_location,
		mapTypeControlOptions: {
			mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
		},
		disableDefaultUI: true
    });

	// Apply style to map
	map.mapTypes.set('map_style', styledMap);
	map.setMapTypeId('map_style');

	// Marker for Location
    var marker = new google.maps.Marker({
        position: my_location,
    	map: map,
		icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
		title: 'NUS University Town, Stephen Riady Centre'
    });
}
