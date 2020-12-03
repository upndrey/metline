
ymaps.ready(init);
function init(){
    var myMap = new ymaps.Map("map",{center: [45.032878,39.022996],zoom: 15});
    myMap.controls.add("zoomControl").add("typeSelector").add("mapTools");
    var myPlacemark = new ymaps.Placemark([45.032878,39.022996]);
    myMap.geoObjects.add(myPlacemark);
}
