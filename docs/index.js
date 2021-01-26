var titleDom = document.querySelectorAll("h4");
var links = document.querySelectorAll(".link-fon-file");
links.forEach(function (elem) {
    elem.classList.add("displaynone");
});
titleDom.forEach(function (elem) {
    elem.addEventListener("click", function (e) {
        var sibling = elem.nextElementSibling;
        var arr = elem.getElementsByTagName("span");
        arr[0].classList.toggle("rotated");
        sibling.classList.toggle("displaynone");
    })
});