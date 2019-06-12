var link = document.querySelector(".clicked");
var catalog_block = document.querySelector(".catalog");

link.addEventListener("mouseenter", function(evt) {
    evt.preventDefault();
    catalog_block.classList.add("show");

});

link.addEventListener("mouseleave", function(evt) {
    evt.preventDefault();
    catalog_block.classList.remove("show");

});

var iceCream = document.querySelector(".ice-cream__block.orange");
var quickly = document.querySelector(".ice-cream__block.orange.pop_up-orange");

iceCream.addEventListener("mouseenter", function(evt) {
    evt.preventDefault();
    quickly.classList.add("show");

});

iceCream.addEventListener("mouseleave", function(evt) {
    evt.preventDefault();
    quickly.classList.remove("show");

});