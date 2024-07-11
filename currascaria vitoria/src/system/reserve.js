"use strict"

var infos = {

    vname: document.getElementById("name").value,
    tel: document.getElementById("tel").value,
    email: document.getElementById("e-mail").value,
    vnumber: document.getElementById("number").value,
    date: document.getElementById("date").value,
    time: document.getElementById("time").value,
    service: document.getElementById("service").value,
    reason: document.getElementById("reason").value,
    reserve: document.getElementById("reserve").value

}


localStorage.setItem('reserves', JSON.stringify(infos))

// var blob = (new Blob([JSON.stringify(infos)], {type: "text/plain; charset=utf-8"}))

reserve.addEventListener("click", () => {

    // saveAs(blob, "reserves.json")

    

})