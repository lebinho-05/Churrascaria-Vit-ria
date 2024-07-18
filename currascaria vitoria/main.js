// helpers

"use strict"

function updateGreeting(currentHour) {

  let salutation = document.getElementById("salutation")

  let greeting;
  
  if (currentHour >= 4 && currentHour < 12) {

    greeting = "Bom Dia!";

  } else if (currentHour >= 12 && currentHour < 18) {

    greeting = "Boa Tarde!";

  } else {

    greeting = "Boa Noite!";

  }

  salutation.textContent = greeting

}


function updateMeal(currentHour) {

  let meal = document.getElementById("meal")
  
  let snack

  if (currentHour >= 1 && currentHour < 11) {

    snack = "Coma";

  } else if (currentHour >= 11 && currentHour <= 14) {

    snack = "Almoce";

  } else {

    snack = "Jante";

  }

  meal.textContent = snack

}

setInterval(() => {

  let currentHour = (new Date()).getHours();

  updateGreeting(currentHour)
  updateMeal(currentHour)
  
}, 1000)