salutation = document.getElementById("salutation")

const currentHour = (new Date()).getHours();

var greeting;

if (currentHour >= 5 && currentHour < 12) {

  greeting = "Bom Dia!";

} else if (currentHour >= 12 && currentHour < 18) {

  greeting = "Boa Tarde!";

} else {

  greeting = "Boa Noite!";

}

salutation.textContent = greeting