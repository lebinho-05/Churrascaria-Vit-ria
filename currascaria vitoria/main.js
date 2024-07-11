// helpers

"use strict"

const currentHour = (new Date()).getHours();

function updateGreeting() {

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


function updateMeal() {

  let meal = document.getElementById("meal")
  
  let snack

  if (currentHour >= 1 && currentHour < 11) {

    snack = "COMA";

  } else if (currentHour >= 11 && currentHour <= 14) {

    snack = "ALMOCE";

  } else {

    snack = "JANTE";

  }

  meal.textContent = snack

}

setInterval(() => {

  updateGreeting()
  updateMeal()
  
}, 1000)