"use strict"

var jsonObj = JSON.parse(localStorage.getItem('jsonObj'))

document.getElementById("oo")
.addEventListener("click", () => {

    document.querySelector("main")
    .innerHTML = String(jsonObj)

})