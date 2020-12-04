ymaps.ready(init);
function init(){
    var myMap = new ymaps.Map("map",{center: [45.032878,39.022996],zoom: 15});
    myMap.controls.add("zoomControl").add("typeSelector").add("mapTools");
    var myPlacemark = new ymaps.Placemark([45.032878,39.022996]);
    myMap.geoObjects.add(myPlacemark);
}

var myFullpage = new fullpage('#fullpage', {
    anchors: ['firstScreen', 'catalog', 'services','callback'],
    menu: '#menu',
    navigation:false,
    scrollOverflow: true,
    scrollOverflowOptions: {
        disablePointer: true
    }
});

$("#send-message").click( function(e) {
    e.preventDefault();
    var name = $("#client-name").val();
    var email = $("#client-email").val();
    var phone = $("#client-phone").val();
    var quest = $("#subject-list option:selected").text();
    var message = $("#message").val();
    var spam = $("#spam").val();
    if ( spam.length == 0 ) {
        $.ajax({
            url: 'sender.php',
            data: {
                "name": name,
                "email": email,
                "phone": phone,
                "quest": quest,
                "message": message,

            },
            type: 'POST',
            success: function(response){
                alert(response);
            }
        });
    }
});
