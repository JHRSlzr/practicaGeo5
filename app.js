var informacion =  "<h1>Universidad DeLaSalle Bajío</h1>"
            informacion += "<p><strong>Dirección:</strong> Avenida Universidad 602, Lomas del Campestre, 37150 León, Gto, México.</p>"
            informacion += "<p><strong>Teléfono:</strong>477 710 8500</p>"

        function iniciaMapa() {

            var propiedades = {
                center: {
                    lat: 21.1516556, lng: -101.7109258 //Coordenadas DeLaSalleBajío
                },
                zoom: 10
            };

            const mapa = document.getElementById("map")
            const map = new google.maps.Map(mapa,propiedades)

            if(navigator.geolocation){

                navigator.geolocation.getCurrentPosition( position => {

                    let posicion = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    }

                    let propiedadesMarcador = {
                        position: posicion,
                        map,
                        title: "Marcardor"
                    }

                    const marcador = new google.maps.Marker(propiedadesMarcador);

                    map.setCenter(posicion)

                    const infowindow = new google.maps.InfoWindow({
                        content : informacion
                    })

                    marcador.addListener("click", ()=>{
                        infowindow.open(map,marcador);
                    })
                    

                })


            }


        }