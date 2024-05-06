function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.watchPosition(function(position) {
            console.log("Latitude: " + position.coords.latitude +
                " Longitude: " + position.coords.longitude +
                " Speed: " + position.coords.speed);
            // Update UI with speed information
        });
    } else {
        console.log("Geolocation is not supported by this browser.");
    }
}

// Start tracking location
getLocation();
