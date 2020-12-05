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

$("#send-message").click(function(e) {
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

$(".ceh").click(function(e) {
    console.log(1);
    $(".hiddenCeh").removeClass("displaynone");
    $(".hiddenCeh").addClass("displayflex");
    $(".hiddenBlocks__bg").removeClass("displaynone");
});

$(".rezka").click(function(e) {
    $(".hiddenRezka").removeClass("displaynone");
    $(".hiddenRezka").addClass("displayflex");
    $(".hiddenBlocks__bg").removeClass("displaynone");
});

$(".zink").click(function(e) {
    $(".hiddenZink").removeClass("displaynone");
    $(".hiddenZink").addClass("displayflex");
    $(".hiddenBlocks__bg").removeClass("displaynone");
});

$(".hiddenBlocks__bg").click(function(e) {
    $(".hiddenCeh").removeClass("displayflex");
    $(".hiddenRezka").removeClass("displayflex");
    $(".hiddenZink").removeClass("displayflex");
    $(".hiddenCeh").addClass("displaynone");
    $(".hiddenRezka").addClass("displaynone");
    $(".hiddenZink").addClass("displaynone");
    $(".hiddenBlocks__bg").addClass("displaynone");
});