"use strict";


const labelTel =      document.getElementById("tel");
const list     =   document.getElementById("prices");
const linkTel  = document.getElementById("link-tel");

const prices = {

    "Buffet Livre": "36.00",
    "Mini Rodízio": "71.00"

};

const tel = 999888676;

var item;
var keys = Object.keys(prices)

for (item of keys) {

    let li = document.createElement("li")
    let index = keys.indexOf(item)

    li.textContent = `${keys[index]}: R$ ${Object.values(prices)[index]}`;
    
    list.appendChild(li)

}

labelTel.textContent = tel
linkTel.href = `tel: ${tel}`