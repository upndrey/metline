ymaps.ready(init);
function init(){
    var myMap1 = new ymaps.Map("map1",{center: [45.032878,39.022996],zoom: 12});
    var myMap2 = new ymaps.Map("map2",{center: [55.483439,38.312356],zoom: 12});

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
if(branch) {
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

            var numsContainer1Dom = document.querySelector(".numsContainer1");
            var numsContainer2Dom = document.querySelector(".numsContainer2");
            numsContainer1Dom.classList.toggle("displaynone");
            numsContainer2Dom.classList.toggle("displaynone");
        });
    });
}

var headerArrDown = document.querySelector(".phone>.arrDown");
if(headerArrDown) {
    var isPhonesOpened = 0;
    var numbersContainer = document.querySelectorAll(".phone>.numsContainer");
    var phoneArrdown = document.querySelector(".phone>.arrDown");
    headerArrDown.addEventListener("click", function () {
        if(!isPhonesOpened) {
            numbersContainer.forEach(function (elem) {
                [...elem.children].forEach(function (child) {
                    child.classList.remove("displaynone");
                });
            });
            isPhonesOpened = 1;
        }
        else {
            numbersContainer.forEach(function (elem) {
                [...elem.children].forEach(function (child, i) {
                    if(i !== 0)
                        child.classList.add("displaynone");
                });
            });
            isPhonesOpened = 0;
        }
        numbersContainer.forEach(function (elem) {
            elem.classList.toggle("jsTopMargin");
        });
        phoneArrdown.classList.toggle("arrDownReverse");
    });
}

var productList = {
    "name": "link",
    "name1": "link1",
    "name2": "link2",
    "name3": "link3",
    "name32": "link32",
};
var searchPopup = document.getElementById("searchPopup");
if(searchPopup) {
    var searchLine = document.getElementById("searchLine");
    var searchBlock = document.getElementById("searchBlock");
    var result = Object.entries(productList);

    var searchOpenButton = document.querySelectorAll(".search");
    searchOpenButton.forEach(function (elem) {
        elem.addEventListener("click", function () {
            console.log(1);
            searchPopup.classList.remove("displaynone");
        });
    });


    searchPopup.addEventListener("click", function (e) {
        if (e.target !== this)
            return;
        searchPopup.classList.add("displaynone");
    });

    result.forEach(function (elem) {
        var searchBlockElem = document.createElement("a");
        searchBlockElem.innerText = elem[0];
        searchBlockElem.href = elem[1];
        searchBlock.appendChild(searchBlockElem);
    });
    searchLine.addEventListener("input", function () {
        var result = Object.entries(productList);
        result = result.filter(function (elem) {
            if(elem[0].includes(searchLine.value))
                return true;
        });
        while (searchBlock.childNodes[0]) {
            searchBlock.removeChild(searchBlock.childNodes[0]);
        }
        result.forEach(function (elem) {
            var searchBlockElem = document.createElement("a");
            searchBlockElem.innerText = elem[0];
            searchBlockElem.href = elem[1];
            searchBlock.appendChild(searchBlockElem);
        });
        if(!result.length) {
            searchBlock.innerText = "Продуктов с таким названием не найдено.";
        }
    });
}

$(".ceh").click(function(e) {
    $(".hiddenCeh").addClass("blockAnimate");
    $(".hiddenBlocks__bg").removeClass("displaynone");
});

$(".rezka").click(function(e) {
    $(".hiddenRezka").addClass("blockAnimate");
    $(".hiddenBlocks__bg").removeClass("displaynone");
});

$(".zink").click(function(e) {
    $(".hiddenZink").addClass("blockAnimate");
    $(".hiddenBlocks__bg").removeClass("displaynone");
});

$(".hiddenBlocks__bg").click(function(e) {
    $(".hiddenCeh").removeClass("blockAnimate");

    $(".hiddenRezka").removeClass("blockAnimate");

    $(".hiddenZink").removeClass("blockAnimate");
    $(".hiddenBlocks__bg").addClass("displaynone");
});

