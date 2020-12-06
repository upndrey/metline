ymaps.ready(init);
function init(){
    var myMap1 = new ymaps.Map("map1",{center: [45.032878,39.022996],zoom: 15});
    var myMap2 = new ymaps.Map("map2",{center: [55.483439,38.312356],zoom: 15});

    myMap1.controls.add("zoomControl");
    myMap2.controls.add("zoomControl");

    var myPlacemark1 = new ymaps.Placemark([45.032878,39.022996]);
    var myPlacemark2 = new ymaps.Placemark([55.483439,38.312356]);
    myMap1.geoObjects.add(myPlacemark1);
    myMap2.geoObjects.add(myPlacemark2);
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

var branch = document.querySelectorAll(".branch");
branch.forEach((elem1) => {
    elem1.addEventListener("change", (e) => {
        branch.forEach((elem2) => {
            elem2.value = elem1.value;
        });
        var contacts1Dom = document.querySelector(".contacts__info.block1");
        var contacts2Dom = document.querySelector(".contacts__info.block2");
        contacts1Dom.classList.toggle("displaynone");
        contacts2Dom.classList.toggle("displaynone");
        contacts1Dom.classList.toggle("displayflex");
        contacts2Dom.classList.toggle("displayflex");

        var map1Dom = document.getElementById("map1");
        var map2Dom = document.getElementById("map2");
        map1Dom.classList.toggle("displaynone");
        map2Dom.classList.toggle("displaynone");
    });
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