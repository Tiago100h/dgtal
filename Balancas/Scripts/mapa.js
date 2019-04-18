var map;
var directionsDisplay;
var directionsService = new google.maps.DirectionsService();

function initialize() {
    directionsDisplay = new google.maps.DirectionsRenderer();
    var latlng = new google.maps.LatLng(-18.8800397, -47.05878999999999);

    var options = {
        zoom: 5,
        center: latlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    map = new google.maps.Map(document.getElementById("mapa"), options);
    directionsDisplay.setMap(map);
    directionsDisplay.setPanel(document.getElementById("trajeto-texto"));

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {

            pontoPadrao = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            map.setCenter(pontoPadrao);

            var geocoder = new google.maps.Geocoder();

            geocoder.geocode({
                "location": new google.maps.LatLng(position.coords.latitude, position.coords.longitude)
            },
            function (results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                    $("#txtEnderecoPartida").val(results[0].formatted_address);
                    $("#txtEnderecoPartida").val("FAESA");
                }
            });
        });
    }
}

initialize();

$("form").submit(function (event) {
    event.preventDefault();

    var paradas = [];
    $("[name='end']").each(function (index) {
        if ($(this).val() != "") {
            paradas.push({ location: $(this).val() })
        }
    });

    var enderecoPartida = $("#txtEnderecoPartida").val();
    var enderecoChegada = $("#txtEnderecoChegada").val();

    var request = {
        origin: enderecoPartida,
        destination: enderecoChegada,
        waypoints: paradas,
        optimizeWaypoints: true,
        travelMode: google.maps.TravelMode.DRIVING
    };

    directionsService.route(request, function (result, status) {
        if (status == google.maps.DirectionsStatus.OK) {
            directionsDisplay.setDirections(result);
        }
    });
});

$('#exemplo').click(function () {
    $('#divExemplo').toggle("slow");
})

var fileSelected = document.getElementById('inputFile');
fileSelected.addEventListener('change', function (e) {
    //Set the extension for the file
    var fileExtension = /text.*/;
    //Get the file object
    var fileTobeRead = fileSelected.files[0];
    //Check of the extension match
    if (fileTobeRead.type.match(fileExtension)) {
        //Initialize the FileReader object to read the 2file
        var fileReader = new FileReader();
        fileReader.onload = function (e) {
            var fileContents = document.getElementById('filecontents');
            var arquivo = fileReader.result;
            $("[name='end']").each(function (index) {
                if ($(this).val() == "") {
                    $(this).val(arquivo);
                    return false;
                }
            });
        }
        fileReader.readAsText(fileTobeRead);
    }
    else {
        alert("Por favor selecione arquivo texto");
    }

})