"use strict"

var jsonObj = JSON.parse(window.localStorage.getItem('jsonObj'));

document.getElementById("oo")
.addEventListener("click", () => {

    document.querySelector("main")
    .innerHTML += toString(jsonObj);

});