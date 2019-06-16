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

/* Changed background

var body = document.querySelector(".body");
var color1 = document.querySelector("#switch_1");
var color2 = document.querySelector("#switch_2");
var color3 = document.querySelector("#switch_3");

color1.addEventListener("click", function(evt) {
    evt.preventDefault();
    body.classList.add("body_color_1");

});

color2.addEventListener("click", function(evt) {
    evt.preventDefault();
    body.classList.add("body_color_2");

});

color3.addEventListener("click", function(evt) {
    evt.preventDefault();
    body.classList.add("body_color_3");

});
*/






















/* 
$(document).ready(function() {
    alert("Hi");
    $('.btn').click(function() {
        alert("WORKED");
    });
}); //end move_up

*/