window.onload = function(){
    var map;
    function initialize(){
        var mapProp = {
            center: new google.maps.LatLng(-23.567250,-46.784840),
            scrollwhell:false,
            zoom:12,
            MapTypeId:google.maps.MapTypeId.ROADMAP
        }

        map = new google.maps.Map(document.getElementById("mapa"),mapProp);
    }

    function addMarker(lat,long,icon,content,click){
        var latLng = {'lat':lat,'lng':long};

        var marker = new google.maps.Marker({
            position:latLng,
            map:map,
            icon:icon
        });

        var infoWindow = new google.maps.InfoWindow({
            content:content,
            maxWidth:200,
            pixelOffset: new google.maps.Size(0,20)
        });

        if(click == true){
        google.maps.event.addListener(marker,'click',function(){
            infoWindow.open(map,marker);
        });
        } else{
            infoWindow.open(map,marker); 
        }
    }

    initialize();

    var conteudo = '<p style="color: black; border-bottom: 2px solid black; font-size: 15px;">Meu endereço</p>';

    addMarker(-23.567250,-46.784840,'',conteudo,true);

    setTimeout(function(){
        map.panTo({'lat':-23.550520,'lng':-46.633308})
        map.setZoom(10);
    },2000);
    

    /*function animal(){
        this.nome = 'Cachorro';
        this.peso = '24kg';
    }

    var meuAnimal = new animal();

    console.log(meuAnimal.nome);*/
}