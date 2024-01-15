/* W02-Task - Profile Home Page */


/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = "Lucas de Souza Nunes";
const currentYear = 2024;
const profilePicture = "images/placeholder.jpg";

/* Step 3 - Element Variables */
const nameElement = document.querySelector("#name");
const foodElement = document.querySelector("#food");
const yearElement = document.querySelector("#year");
const imageElement = document.querySelector("img");

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
currentYear.textContent = currentYear;
imageElement.setAttribute("src", profilePicture);
imageElement.setAttribute("alt", 'Profile Picture');

/* Step 5 - Array */
const foodArray = [
  "Barbecued Tomahawk Steak",
  "Charcoal Grilled Tambaqui",
  "Brazilian black bean and pork stew",
]
foodElement.innerHTML = foodArray

const newFood = "Mexican Chilli"
foodArray.push(newFood);
foodElement.innerHTML += `<br> ${foodArray}`

foodArray.shift();
foodElement.innerHTML += `<br> ${foodArray}`

foodArray.pop();
foodElement.innerHTML += `<br> ${foodArray}`


