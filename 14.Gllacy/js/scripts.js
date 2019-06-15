/* Pop's up Catalog navigation*/

var link = document.querySelector(".clicked");
var catalog_block = document.querySelector(".catalog");

link.addEventListener("click", function(evt) {
    evt.preventDefault();
    catalog_block.classList.add("show");

});

catalog_block.addEventListener("mouseleave", function(evt) {
    evt.preventDefault();
    catalog_block.classList.remove("show");

});

/* Pop's up Search*/

var search_clicked = document.querySelector(".btn.glass");
var search_form = document.querySelector(".search");

search_clicked.addEventListener("click", function(evt) {
    evt.preventDefault();
    search_form.classList.add("show");

});

search_form.addEventListener("mouseleave", function(evt) {
    evt.preventDefault();
    search_form.classList.remove("show");

});

/* Pop's up Login*/

var enter = document.querySelector(".btn.enter");
var login = document.querySelector(".login");

enter.addEventListener("click", function(evt) {
    evt.preventDefault();
    login.classList.add("show");

});

login.addEventListener("mouseleave", function(evt) {
    evt.preventDefault();
    login.classList.remove("show");

});


/* JQuary Scripts*/