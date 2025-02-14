function initMap() {
    var location = { lat: -34.6037, lng: -58.3816 }; // Coordenadas de ejemplo (Buenos Aires)
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 14,
        center: location,
        styles: [
            {
                featureType: "all",
                elementType: "geometry",
                stylers: [{ color: "#202020" }]
            },
            {
                featureType: "all",
                elementType: "labels.text.fill",
                stylers: [{ color: "#ffffff" }]
            },
            {
                featureType: "poi",
                elementType: "labels.text",
                stylers: [{ visibility: "off" }]
            }
        ]
    });
  
    var marker = new google.maps.Marker({
        position: location,
        map: map,
        title: "Ubicación"
    });
  }
  
  // Cargar el script de Google Maps con API Key
  var script = document.createElement("script");
  script.src = https://maps.googleapis.com/maps/api/js?key=[TU_API_KEY]&callback=initMap;
  script.async = true;
  script.defer = true;
  document.body.appendChild(script);