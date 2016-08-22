
var google;

function init() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    // var myLatlng = new google.maps.LatLng(40.71751, -73.990922);
    var myLatlng = new google.maps.LatLng(45.5016889, -73.567256);
    // "lat" : 45.5016889,
    // "lng" : -73.567256
    // -73.56945168444146!3d45.49745737910122
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 15,
        // The latitude and longitude to center the map (always required)
        center: myLatlng,
        // How you would like to style the map.
        scrollwheel: false,
        styles: [
            {
                "featureType":"administrative.land_parcel",
                "elementType":"all",
                "stylers": [
                    {"visibility":"off"}
                ]
            },
            {
                "featureType":"landscape.man_made",
                "elementType":"all",
                "stylers": [
                    {
                        "visibility":"off"
                    }
                ]
            },
            // {
            //     "featureType":"poi",
            //     "elementType":"labels",
            //     "stylers": [
            //         {
            //             "visibility":"off"
            //         }
            //     ]
            // },
            {
                "featureType":"road",
                "elementType":"labels",
                "stylers": [
                    {
                        "visibility":"simplified"
                    },
                    {
                        "lightness":20
                    }
                ]
            },
            {
                "featureType":"road.highway",
                "elementType":"geometry",
                "stylers": [
                    {
                        "hue":"#f49935"
                    }
                ]
            },
            {
                "featureType":"road.highway",
                "elementType":"labels",
                "stylers": [
                    {
                        "visibility":"simplified"
                    }
                ]
            },
            {
                "featureType":"road.arterial",
                "elementType":"geometry",
                "stylers": [
                    {
                        "hue":"#fad959"
                    }
                ]
            },
            {
                "featureType":"road.arterial",
                "elementType":"labels",
                "stylers": [
                    {
                        "visibility":"off"
                    }
                ]
            },
            {
                "featureType":"road.local",
                "elementType":"geometry",
                "stylers": [
                    {
                        "visibility":"simplified"
                    }
                ]
            },
            {
                "featureType":"road.local",
                "elementType":"labels",
                "stylers": [
                    {
                        "visibility":"simplified"
                    }
                ]
            },
            {
                "featureType":"transit",
                "elementType":"all",
                "stylers": [
                    {
                        "visibility":"off"
                    }
                ]
            },
            {
                "featureType":"water",
                "elementType":"all",
                "stylers": [
                    {
                        "hue":"#a1cdfc"
                    },
                    {
                        "saturation":30
                    },
                    {
                        "lightness":49
                    }
                ]
            }
        ]
    };

    // Get the HTML DOM element that will contain your map
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');

    // Create the Google Map using out element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);
    var marker = new google.maps.LatLng(45.4972543,-73.5680462);
    new google.maps.Marker({
        position: marker,
        map: map,
        icon: 'assets/images/loc.png'
    });
}
google.maps.event.addDomListener(window, 'load', init);
