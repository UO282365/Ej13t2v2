
class Ejercicio13 {
    constructor() {
        
    }

    leer(files) {
        var archivo = files[0];
        var reader = new FileReader();
        reader.onload = function (evento) {

            var aux = reader.result;
            var json = JSON.parse(aux);

            var c = new Array();
            var n = new Array();
            for (let i = 0; i < json.features.length; i++) {
                c.push(json.features[i].geometry.coordinates);
                n.push(json.features[i].properties.Name);
            }

            var centro = { lat: 40.416895133420645, lng: -3.703282134664379 };//el centro por defecto esta en el km0 en madrid
            var mapaGeoposicionado = new google.maps.Map(document.getElementsByTagName('main')[0], {//crea el mapa dinámico
                zoom: 5,
                center: centro,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            });

            for (let i = 0; i < n.length; i++) {
                
                let infoWindow = new google.maps.InfoWindow;
                var pos = {
                    lat: parseFloat(c[i][1]),
                    lng: parseFloat(c[i][0])
                };
                infoWindow.setPosition(pos);//seteamos la posicion
                infoWindow.setContent(n[i]);//lo que trae el infowindow
                infoWindow.open(mapaGeoposicionado);

            }


        }
        
        reader.readAsText(archivo);
        
        
    }

    initMap() {
        var centro = { lat: 40.416895133420645, lng: -3.703282134664379 };//el centro por defecto esta en el km0 en madrid
        this.mapaGeoposicionado = new google.maps.Map(document.getElementsByTagName('main')[0], {//crea el mapa dinámico
            zoom: 5,
            center: centro,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        });
    }



}
var ej13 = new Ejercicio13();